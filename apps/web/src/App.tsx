import { useState } from "react";
import { authClient } from "./lib/auth-client";

export default function App() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending || session === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-10 bg-light dark:bg-dark p-4 border-b-2 border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Convex + React</h1>
          {session && (
            <button
              type="button"
              className="text-sm px-4 py-2 rounded-md border-2 bg-dark dark:bg-light text-light dark:text-dark"
              onClick={() => {
                void authClient.signOut();
              }}
            >
              Sign out
            </button>
          )}
        </div>
      </header>
      <main className="p-8 flex flex-col gap-16">
        {session ? <Welcome user={session.user} /> : <SignIn />}
      </main>
    </>
  );
}

function Welcome({ user }: { user: { email?: string; name?: string } }) {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Welcome{user.name ? `, ${user.name}` : ""}!
      </h2>
      <p className="text-center mb-4">
        You are signed in as {user.email ?? "unknown"}
      </p>
    </div>
  );
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await authClient.signUp.email({
          email,
          password,
          name,
        });
        if (error) {
          setError(error.message ?? "Authentication failed");
        }
      } else {
        const { error } = await authClient.signIn.email({
          email,
          password,
        });
        if (error) {
          setError(error.message ?? "Authentication failed");
        }
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {isSignUp ? "Sign Up" : "Sign In"}
      </h2>
      <form
        onSubmit={(e) => {
          void handleSubmit(e);
        }}
        className="flex flex-col gap-4"
      >
        {isSignUp && (
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-md border-2 border-slate-300 dark:border-slate-700 bg-light dark:bg-dark"
              required={isSignUp}
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md border-2 border-slate-300 dark:border-slate-700 bg-light dark:bg-dark"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-md border-2 border-slate-300 dark:border-slate-700 bg-light dark:bg-dark"
            required
            minLength={8}
          />
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-dark dark:bg-light text-light dark:text-dark text-sm px-4 py-2 rounded-md border-2 disabled:opacity-50"
        >
          {isLoading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className="mt-6 flex items-center gap-2">
        <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700" />
        <span className="text-sm text-slate-500">or</span>
        <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700" />
      </div>
      <button
        type="button"
        onClick={() => {
          void authClient.signIn.social({ provider: "google" });
        }}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-sm px-4 py-2 rounded-md hover:opacity-80"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" role="img">
          <title>Google logo</title>
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Sign in with Google
      </button>
      <p className="mt-4 text-center text-sm">
        {isSignUp ? "Already have an account? " : "Don't have an account? "}
        <button
          type="button"
          className="underline"
          onClick={() => {
            setIsSignUp(!isSignUp);
          }}
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}
