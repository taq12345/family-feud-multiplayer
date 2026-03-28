import { SEO } from "../components/SEO";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { ArrowLeft, Shield } from "lucide-react";
import { playClickSound } from "../lib/sounds";

const LAST_UPDATED = "March 28, 2025";
const CONTACT_EMAIL = "talhaahmadqureshi@gmail.com";
const SITE_URL = "https://friendlyfeud.fun";

export default function Privacy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Friendly Feud. Learn how we handle your data and protect your privacy while you play our online games." 
        canonical="https://friendlyfeud.fun/privacy"
      />
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
          <button
            onClick={() => { playClickSound(); setLocation("/"); }}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Back to lobby"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <FriendlyFeudLogo className="w-9 h-9 shrink-0" />
            <div>
              <FriendlyFeudWordmark />
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Privacy Policy</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <article>
          <header className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4">
              <Shield className="w-7 h-7 text-amber-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-sm">
              Last updated: <span className="text-slate-300 font-medium">{LAST_UPDATED}</span>
            </p>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl mx-auto">
              This policy explains what information Friendly Feud collects, how it is used, and your rights regarding that information.
            </p>
          </header>

          {[
            {
              id: "overview",
              title: "1. Overview",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Friendly Feud ("<strong className="text-white">we</strong>", "<strong className="text-white">us</strong>", or "<strong className="text-white">our</strong>") operates the website at <a href={SITE_URL} className="text-amber-400 hover:underline">{SITE_URL}</a>. This Privacy Policy describes how we handle your personal information when you use our service.
                  </p>
                  <p>
                    By using Friendly Feud, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>
              ),
            },
            {
              id: "data-collected",
              title: "2. Information We Collect",
              content: (
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <div>
                    <p className="font-semibold text-white mb-2">a) Information you provide directly</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li><strong className="text-slate-200">Nickname:</strong> The display name you choose is stored in your browser's <code className="text-amber-300 bg-white/5 px-1 rounded">localStorage</code> and temporarily held server-side during an active game session. It is not linked to any account or personal identity.</li>
                      <li><strong className="text-slate-200">Email address:</strong> If you submit feedback via our Feedback page, we collect the email address you provide solely to follow up on your submission. We do not use it for marketing.</li>
                      <li><strong className="text-slate-200">Feedback messages:</strong> The text content of any feedback or bug reports you submit.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">b) Automatically collected information</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li><strong className="text-slate-200">Cookies &amp; similar technologies:</strong> We use cookies to support site functionality and, where present, to enable third-party analytics and advertising services (see Section 4). You can control cookies through your browser settings.</li>
                      <li><strong className="text-slate-200">Usage data:</strong> When analytics are active, information such as pages visited, time spent, browser type, device type, and approximate geographic location (country/city level) may be collected automatically.</li>
                      <li><strong className="text-slate-200">IP address:</strong> Your IP address may be logged briefly by our server infrastructure for security and abuse prevention.</li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              id: "how-we-use",
              title: "3. How We Use Your Information",
              content: (
                <ul className="space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed list-disc pl-5">
                  <li>To operate and maintain the game service, including matchmaking and session management.</li>
                  <li>To respond to feedback, bug reports, or support requests you submit.</li>
                  <li>To understand how the website is used and improve the user experience (via analytics).</li>
                  <li>To display contextually relevant advertising through Google AdSense (when active).</li>
                  <li>To detect and prevent abuse, cheating, or misuse of the service.</li>
                </ul>
              ),
            },
            {
              id: "third-parties",
              title: "4. Third-Party Services",
              content: (
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>We use or plan to use the following third-party services. Each is governed by its own privacy policy:</p>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Google Analytics",
                        desc: "Used to collect anonymised usage statistics (pages visited, session duration, device info). Google may process data on servers outside your country. You can opt out via the Google Analytics Opt-out Browser Add-on.",
                        link: "https://policies.google.com/privacy",
                      },
                      {
                        name: "Google AdSense",
                        desc: "Used to display advertisements. AdSense uses cookies to serve ads based on prior visits to our site or other sites. You can opt out of personalised advertising at Google's Ads Settings.",
                        link: "https://policies.google.com/privacy",
                      },
                      {
                        name: "Google Fonts",
                        desc: "Used to load web fonts. Google may log the request including your IP address.",
                        link: "https://policies.google.com/privacy",
                      },
                    ].map(({ name, desc, link }) => (
                      <div key={name} className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                        <p className="font-semibold text-amber-400 text-sm mb-1">{name}</p>
                        <p className="text-slate-400 text-xs leading-relaxed">{desc}{" "}
                          <a href={link} target="_blank" rel="noopener noreferrer" className="text-amber-400/70 hover:text-amber-400 hover:underline">Privacy Policy →</a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              id: "data-retention",
              title: "5. Data Retention",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <ul className="space-y-2 list-disc pl-5">
                    <li><strong className="text-slate-200">Nicknames:</strong> Held server-side only for the duration of an active game session (up to 30 minutes after disconnect), then deleted automatically.</li>
                    <li><strong className="text-slate-200">Feedback submissions:</strong> Retained as long as necessary to address the issue, then deleted.</li>
                    <li><strong className="text-slate-200">Local storage:</strong> Your nickname preference is stored in your own browser until you clear it.</li>
                    <li><strong className="text-slate-200">Analytics data:</strong> Governed by Google's own retention policies (typically 14–26 months).</li>
                  </ul>
                </div>
              ),
            },
            {
              id: "your-rights",
              title: "6. Your Rights",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>Regardless of your location, you have the right to:</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Request access to any personal data we hold about you.</li>
                    <li>Request deletion of your personal data (where technically feasible).</li>
                    <li>Opt out of personalised advertising via <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Google's Ads Settings</a>.</li>
                    <li>Clear your browser's <code className="text-amber-300 bg-white/5 px-1 rounded">localStorage</code> at any time to remove your stored nickname.</li>
                  </ul>
                  <p>To exercise any of these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 hover:underline">{CONTACT_EMAIL}</a>.</p>
                </div>
              ),
            },
            {
              id: "children",
              title: "7. Children's Privacy",
              content: (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Friendly Feud is intended for users aged <strong className="text-white">13 and older</strong>. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has submitted personal data to us, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 hover:underline">{CONTACT_EMAIL}</a> and we will delete it promptly.
                </p>
              ),
            },
            {
              id: "changes",
              title: "8. Changes to This Policy",
              content: (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the service after any changes constitutes your acceptance of the updated policy.
                </p>
              ),
            },
            {
              id: "contact",
              title: "9. Contact",
              content: (
                <div className="space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>If you have questions about this Privacy Policy, please contact us at:</p>
                  <p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 hover:underline font-medium">{CONTACT_EMAIL}</a>
                  </p>
                </div>
              ),
            },
          ].map(({ id, title, content }) => (
            <section key={id} className="mb-8" aria-labelledby={`${id}-heading`}>
              <h2 id={`${id}-heading`} className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/8">
                {title}
              </h2>
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6">
                {content}
              </div>
            </section>
          ))}
        </article>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-6 text-center">
        <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
          <button onClick={() => { playClickSound(); setLocation("/"); }} className="hover:text-slate-400 transition-colors">Home</button>
          <span>·</span>
          <button onClick={() => { playClickSound(); setLocation("/terms"); }} className="hover:text-slate-400 transition-colors">Terms of Service</button>
          <span>·</span>
          <button onClick={() => { playClickSound(); setLocation("/privacy"); }} className="text-slate-400">Privacy Policy</button>
        </div>
      </footer>
    </div>
  );
}
