import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-md">
        <SignIn
          routing="path"
          path="/sign-in"
          afterSignInUrl="/protected"
          appearance={{
            elements: {
              card: "bg-gray-800 text-gray-100 shadow-lg",
              title: "text-white",
              subtitle: "text-gray-300",
              formFieldLabel: "text-gray-300",
              formFieldInput: "bg-gray-700 text-gray-100 border-gray-600",
              formButtonPrimary:
                "bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-300",
            },
          }}
        />
      </div>
    </div>
  );
}
