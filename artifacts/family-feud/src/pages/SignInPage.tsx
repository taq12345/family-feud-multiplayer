import { SignIn } from "@clerk/react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function SignInPage() {
  return (
    <div className="min-h-[100dvh] bg-[#070d1f] text-white flex flex-col">
      <div className="p-4">
        <Link href="/" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to lobby
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 pb-10">
        <SignIn
          routing="path"
          path={`${basePath}/sign-in`}
          signUpUrl={`${basePath}/sign-up`}
          fallbackRedirectUrl={basePath || "/"}
        />
      </div>
    </div>
  );
}
