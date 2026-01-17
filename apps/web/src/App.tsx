import { useState } from "react";
import { authClient } from "./lib/auth-client";
import { AppSidebar } from "./components/AppSidebar";
import { DashboardPage } from "./components/DashboardPage";
import { Analytics } from "./components/Analytics";
import { Settings } from "./components/Settings";
import { Card, CardContent } from "@/components/ui/card";
import { SidebarTrigger, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

type View = "dashboard" | "analytics" | "users" | "documents" | "settings";

export default function App() {
  const { data: session, isPending } = authClient.useSession();
  const [currentView, setCurrentView] = useState<View>("dashboard");

  if (isPending || session === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardContent>
            <p className="text-center">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar onNavigate={(view) => setCurrentView(view as View)} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 border-b">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            {session?.user?.name && (
              <span className="text-sm text-muted-foreground">
                {session.user.name}
              </span>
            )}
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {currentView === "dashboard" && <DashboardPage />}
          {currentView === "analytics" && <Analytics />}
          {currentView === "settings" && <Settings />}
          {currentView !== "dashboard" && currentView !== "analytics" && currentView !== "settings" && (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
                </h2>
                <p className="text-muted-foreground mt-2">This section is coming soon!</p>
              </div>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
