import Logo from "/TeamSync_logo.svg"

import { SignupForm } from "@/components/signup-form"

export default function Login() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <img src={Logo} alt="Logo" className="size-4" />
          </div>
          TeamSync
        </a>
        <SignupForm />
      </div>
    </div>
  )
}
