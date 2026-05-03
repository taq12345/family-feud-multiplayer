import { dark } from "@clerk/themes";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const clerkAppearance = {
  theme: dark,
  cssLayerName: "clerk",
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: basePath || "/",
    logoImageUrl: typeof window !== "undefined"
      ? `${window.location.origin}${basePath}/logo.svg`
      : "/logo.svg",
    socialButtonsPlacement: "top" as const,
    socialButtonsVariant: "blockButton" as const,
  },
  variables: {
    colorPrimary: "#fbbf24",
    colorForeground: "#f8fafc",
    colorMutedForeground: "#94a3b8",
    colorDanger: "#ef4444",
    colorBackground: "#0d1525",
    colorInput: "#0d1525",
    colorInputForeground: "#f8fafc",
    colorNeutral: "#1e293b",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    borderRadius: "0.75rem",
  },
  elements: {
    rootBox: "w-full flex justify-center",
    cardBox:
      "bg-[#0d1525] rounded-2xl w-[420px] max-w-full overflow-hidden border border-white/10 shadow-2xl",
    card: "!shadow-none !border-0 !bg-transparent !rounded-none",
    footer:
      "!shadow-none !border-0 !bg-[#0a1120] !rounded-none border-t border-white/5",
    headerTitle: "text-white text-2xl font-extrabold",
    headerSubtitle: "text-slate-400 text-sm",
    socialButtonsBlockButton:
      "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all",
    socialButtonsBlockButtonText: "text-white font-semibold",
    formFieldLabel: "text-slate-300 font-medium",
    formFieldInput:
      "bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-amber-500/50 focus:ring-amber-500/20",
    formButtonPrimary:
      "bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] border-0",
    footerAction: "text-slate-400",
    footerActionText: "text-slate-400 text-sm",
    footerActionLink: "text-amber-400 hover:text-amber-300 font-semibold",
    dividerLine: "bg-white/10",
    dividerText: "text-slate-500 text-xs uppercase tracking-wider",
    identityPreviewEditButton: "text-amber-400 hover:text-amber-300",
    formFieldSuccessText: "text-emerald-400",
    alert: "bg-red-500/10 border border-red-500/20",
    alertText: "text-red-300",
    otpCodeFieldInput: "bg-white/5 border-white/10 text-white",
    formFieldRow: "flex flex-col gap-1.5",
    main: "gap-4",
    logoBox: "h-10 mb-2",
    logoImage: "h-10 w-auto",
  },
};
