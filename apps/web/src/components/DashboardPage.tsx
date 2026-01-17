import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  CircleDashed,
  CreditCard,
  DollarSign,
  Package,
  Plus,
  Search,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col">
        <header className="flex h-16 items-center gap-4 border-b px-6">
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Search className="size-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="size-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        <main className="flex-1 space-y-6 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <Users className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Sales
                </CardTitle>
                <CreditCard className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <TrendingUp className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>
                  Monthly revenue breakdown by category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8 pt-4">
                  {[
                    { category: "Product A", revenue: 45000, percentage: 45 },
                    { category: "Product B", revenue: 32000, percentage: 32 },
                    { category: "Product C", revenue: 18000, percentage: 18 },
                    { category: "Product D", revenue: 5000, percentage: 5 },
                  ].map((item) => (
                    <div key={item.category}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-muted-foreground">${item.revenue.toLocaleString()}</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="mr-2 size-4" />
                    Create New User
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 size-4" />
                    Upload Document
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 size-4" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="mr-2 size-4" />
                    Create Invoice
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 size-4" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>
                      Your latest financial activities
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <ArrowUpRight className="size-4" />
                    <span className="sr-only">View All</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alice Johnson",
                      type: "Payment",
                      amount: "$2,400.00",
                      status: "Completed",
                      date: "2 min ago",
                      icon: <CheckCircle2 className="size-4 text-green-600" />,
                    },
                    {
                      name: "Bob Smith",
                      type: "Subscription",
                      amount: "$49.00",
                      status: "Active",
                      date: "15 min ago",
                      icon: <CircleDashed className="size-4 text-blue-600" />,
                    },
                    {
                      name: "Carol White",
                      type: "Refund",
                      amount: "$120.00",
                      status: "Processing",
                      date: "1 hour ago",
                      icon: <CircleDashed className="size-4 text-orange-600" />,
                    },
                    {
                      name: "David Brown",
                      type: "Payment",
                      amount: "$3,500.00",
                      status: "Completed",
                      date: "2 hours ago",
                      icon: <CheckCircle2 className="size-4 text-green-600" />,
                    },
                    {
                      name: "Eva Green",
                      type: "Subscription",
                      amount: "$99.00",
                      status: "Active",
                      date: "3 hours ago",
                      icon: <CircleDashed className="size-4 text-blue-600" />,
                    },
                  ].map((transaction) => (
                    <div key={transaction.name} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>
                          {transaction.name.split(" ")[0][0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{transaction.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.type} • {transaction.amount}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {transaction.icon}
                        <Badge variant="outline" className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
                <CardDescription>
                  Your subscription details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Plan</span>
                    <Badge>Pro</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Storage</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next billing</span>
                    <span className="font-medium">Dec 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-medium">$29.00</span>
                  </div>
                </div>
                <Separator />
                <Button className="w-full">
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
