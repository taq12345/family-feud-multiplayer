import { SEO } from "../components/SEO";
import { useLocation, Link } from "wouter";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { ArrowLeft, Shield } from "lucide-react";
import { playClickSound } from "../lib/sounds";

const LAST_UPDATED = "September 3, 2026";
const CONTACT_EMAIL = "talhaahmadqureshi@gmail.com";
const SITE_URL = "https://friendlyfeud.fun";

export default function Privacy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Friendly Feud, a free online Family Feud-style survey game. Learn what data we collect, how advertising and analytics work, and your rights."
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
              This policy explains what information Friendly Feud, a free Family Feud-style survey game, collects, how it is used, and your rights regarding that information.
            </p>
          </header>

          {[
            {
              id: "overview",
              title: "1. Overview",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Friendly Feud ("<strong className="text-white">we</strong>", "<strong className="text-white">us</strong>", or "<strong className="text-white">our</strong>") operates the website at <a href={SITE_URL} className="text-amber-400 hover:underline">{SITE_URL}</a>, a free online Family Feud-style multiplayer survey game. This Privacy Policy describes how we handle your personal information when you use our service.
                  </p>
                  <p>
                    You can play without creating an account. Where this policy mentions accounts, it applies only if you choose to sign up.
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
                      <li><strong className="text-slate-200">Nickname:</strong> The display name you choose is stored in your browser's <code className="text-amber-300 bg-white/5 px-1 rounded">localStorage</code> and held server-side while you are in a game room. For guests it is not linked to any account or identity.</li>
                      <li><strong className="text-slate-200">Optional account details:</strong> If you create an account, our authentication provider (Clerk) collects the email address and, where you sign in with a third-party provider, the name and profile picture that provider shares. We store a copy of your email address, a reserved nickname and an avatar URL so we can show you on the leaderboard.</li>
                      <li><strong className="text-slate-200">Game chat and answers:</strong> Messages you type in a room's chat, and the answers you submit, are transmitted to other players in the room. Chat messages are stored briefly with the room record for the life of that room.</li>
                      <li><strong className="text-slate-200">Feedback:</strong> If you use the Feedback page we collect the email address and message you provide solely to follow up on your submission. We do not use it for marketing.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">b) Information collected automatically</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li><strong className="text-slate-200">Gameplay statistics (accounts only):</strong> For signed-in players we record games and rounds won and lost, correct and wrong guesses, successful steals and total points, separately for multiplayer and solo play. These power the public leaderboard, which shows your nickname and avatar.</li>
                      <li><strong className="text-slate-200">Cookies &amp; similar technologies:</strong> We use cookies and local storage to keep you signed in, remember your nickname, and to support the third-party analytics and advertising services described in Section 4. You can control cookies through your browser settings.</li>
                      <li><strong className="text-slate-200">Usage data:</strong> Pages visited, time spent, browser type, device type and approximate location (country/city level) may be collected by our analytics provider.</li>
                      <li><strong className="text-slate-200">IP address and logs:</strong> Your IP address may be logged briefly by our hosting infrastructure for security, rate limiting and abuse prevention.</li>
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
                  <li>To operate the game: creating rooms, matching players to teams, judging answers, keeping score and running the chat.</li>
                  <li>To provide optional accounts, reserve nicknames and display the leaderboard.</li>
                  <li>To respond to feedback, bug reports and support requests.</li>
                  <li>To understand how the site is used and improve it (analytics).</li>
                  <li>To display advertising on our informational pages through Google AdSense (see Section 4). We never show ads inside game rooms.</li>
                  <li>To detect and prevent abuse, cheating or misuse of the service.</li>
                </ul>
              ),
            },
            {
              id: "third-parties",
              title: "4. Third-Party Services",
              content: (
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>We rely on the following third-party services. Each processes data under its own privacy policy:</p>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Google AdSense",
                        desc: "Displays advertisements on our content pages (home, guides, rules and questions). Google and its partners use cookies and device identifiers to serve ads and to measure them; where you have consented, ads may be personalised based on your visits to this and other sites. You can opt out of personalised advertising at Google's Ads Settings or via www.aboutads.info. Visitors in the EEA, UK and Switzerland are shown a consent message before any personalised ads are served, and can change their choice at any time.",
                        link: "https://policies.google.com/technologies/ads",
                      },
                      {
                        name: "Google Analytics",
                        desc: "Collects anonymised usage statistics (pages visited, session duration, device info). Google may process data on servers outside your country. You can opt out via the Google Analytics Opt-out Browser Add-on.",
                        link: "https://policies.google.com/privacy",
                      },
                      {
                        name: "Clerk",
                        desc: "Provides optional sign-in and account management. Clerk processes your email address, authentication credentials and session cookies on our behalf.",
                        link: "https://clerk.com/legal/privacy",
                      },
                      {
                        name: "Resend",
                        desc: "Delivers feedback-form submissions to us by email. Your email address and message pass through Resend's servers for delivery.",
                        link: "https://resend.com/legal/privacy-policy",
                      },
                      {
                        name: "Google Fonts",
                        desc: "Loads the web font used on the site. Google may log the request, including your IP address.",
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
                  <p>
                    The site is hosted on cloud infrastructure that may store server logs and our database in data centres outside your country. We do not sell your personal information.
                  </p>
                </div>
              ),
            },
            {
              id: "data-retention",
              title: "5. Data Retention",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <ul className="space-y-2 list-disc pl-5">
                    <li><strong className="text-slate-200">Guest nicknames and rooms:</strong> Held server-side only while the room is active. Rooms are deleted automatically once they have been inactive for a short period, and disconnected players are dropped after 30 minutes.</li>
                    <li><strong className="text-slate-200">Chat messages:</strong> Stored with the room and removed when the room is deleted.</li>
                    <li><strong className="text-slate-200">Accounts and statistics:</strong> Kept until you ask us to delete your account. Deleting your account removes your stored profile and statistics.</li>
                    <li><strong className="text-slate-200">Feedback submissions:</strong> Retained as long as necessary to address the issue, then deleted.</li>
                    <li><strong className="text-slate-200">Local storage:</strong> Your nickname preference stays in your own browser until you clear it.</li>
                    <li><strong className="text-slate-200">Analytics and advertising data:</strong> Governed by Google's retention policies (typically 14–26 months for Analytics).</li>
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
                    <li>Request correction or deletion of your personal data, including deletion of your account and statistics.</li>
                    <li>Withdraw consent to personalised advertising at any time via <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Google's Ads Settings</a> or the consent message shown on the site.</li>
                    <li>Clear your browser's <code className="text-amber-300 bg-white/5 px-1 rounded">localStorage</code> at any time to remove your stored nickname.</li>
                  </ul>
                  <p>To exercise any of these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 hover:underline">{CONTACT_EMAIL}</a>. We respond within 30 days.</p>
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
          <Link href="/" onClick={() => playClickSound()} className="hover:text-slate-400 transition-colors">Home</Link>
          <span>·</span>
          <Link href="/terms" onClick={() => playClickSound()} className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          <span>·</span>
          <Link href="/privacy" onClick={() => playClickSound()} className="text-slate-400">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}
