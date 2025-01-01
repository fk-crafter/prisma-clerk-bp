import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function ProtectedPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">page de connexion</h1>

      <SignedIn>
        <p>bienvenue sur la page de connexion</p>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <p>tu dois être connecté pour accéder à cette page.</p>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
