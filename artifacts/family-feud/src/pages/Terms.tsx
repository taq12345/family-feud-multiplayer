import { SEO } from "../components/SEO";
import { useLocation, Link } from "wouter";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { ArrowLeft, ScrollText } from "lucide-react";
import { playClickSound } from "../lib/sounds";

const LAST_UPDATED = "September 3, 2026";
const CONTACT_EMAIL = "talhaahmadqureshi@gmail.com";
const SITE_URL = "https://friendlyfeud.fun";

export default function Terms() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO 
        title="Terms of Service" 
        description="Terms of Service and user agreement for playing Friendly Feud online." 
        canonical="https://friendlyfeud.fun/terms"
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
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Terms of Service</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <article>
          <header className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4">
              <ScrollText className="w-7 h-7 text-amber-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3">
              Terms of Service
            </h1>
            <p className="text-slate-400 text-sm">
              Last updated: <span className="text-slate-300 font-medium">{LAST_UPDATED}</span>
            </p>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl mx-auto">
              Please read these terms carefully before using Friendly Feud. By accessing or using the service, you agree to be bound by these terms.
            </p>
          </header>

          {[
            {
              id: "acceptance",
              title: "1. Acceptance of Terms",
              content: (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  By accessing or using <a href={SITE_URL} className="text-amber-400 hover:underline">{SITE_URL}</a> (the "<strong className="text-white">Service</strong>"), you agree to be bound by these Terms of Service and our <Link href="/privacy" onClick={() => playClickSound()} className="text-amber-400 hover:underline">Privacy Policy</Link>. If you do not agree to these terms, please do not use the Service. These terms apply to all visitors, users, and other persons who access or use the Service.
                </p>
              ),
            },
            {
              id: "description",
              title: "2. Description of Service",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Friendly Feud is a free, browser-based multiplayer quiz game inspired by classic TV game show formats. It allows users to create or join game rooms, form teams, and compete to answer survey-style questions in real time.
                  </p>
                  <p>
                    The Service is provided free of charge and does not require account registration. An optional free account lets you reserve a nickname and appear on the leaderboard. We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice.
                  </p>
                </div>
              ),
            },
            {
              id: "accounts",
              title: "3. Optional Accounts",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    You may create one account per person. You are responsible for keeping your sign-in credentials secure and for all activity under your account. Nicknames must not impersonate other people or contain offensive content; we may change or remove a nickname, or suspend an account, that breaches these Terms.
                  </p>
                  <p>
                    Gameplay statistics attached to an account are displayed publicly on the leaderboard together with your nickname and avatar. You can ask us to delete your account and its statistics at any time by contacting <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 hover:underline">{CONTACT_EMAIL}</a>.
                  </p>
                </div>
              ),
            },
            {
              id: "eligibility",
              title: "4. Eligibility & Age Requirements",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>You must be at least <strong className="text-white">13 years of age</strong> to use this Service. By using the Service, you represent and warrant that you meet this age requirement.</p>
                  <p>If you are under 18, you represent that a parent or guardian has reviewed and agreed to these Terms on your behalf.</p>
                </div>
              ),
            },
            {
              id: "conduct",
              title: "5. Acceptable Use",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>You agree not to use the Service to:</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Harass, bully, threaten, or abuse other users in any way (including through nicknames or in-game chat).</li>
                    <li>Use offensive, discriminatory, or sexually explicit nicknames or messages.</li>
                    <li>Attempt to cheat, exploit bugs, or manipulate game outcomes in bad faith.</li>
                    <li>Interfere with or disrupt the servers or networks that the Service relies on.</li>
                    <li>Attempt unauthorised access to any part of the Service or its backend systems.</li>
                    <li>Use automated scripts, bots, or scrapers to interact with the Service.</li>
                    <li>Violate any applicable laws or regulations.</li>
                  </ul>
                  <p>We reserve the right to remove any user from a game room or block access to the Service for violations of these rules, without prior notice.</p>
                </div>
              ),
            },
            {
              id: "intellectual-property",
              title: "6. Intellectual Property",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    The Friendly Feud name, logo, design, and all associated content are owned by or licensed to the operator. The survey questions used in the game are curated for entertainment purposes. "Family Feud" is a registered trademark of Fremantle; Friendly Feud is an independent fan project and is not affiliated with or endorsed by Fremantle or any related entity.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable licence to access and use the Service for personal, non-commercial entertainment purposes only.
                  </p>
                </div>
              ),
            },
            {
              id: "advertising",
              title: "7. Advertising",
              content: (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The informational pages of the Service (such as the home page, guides, rules and question library) display advertisements served by Google AdSense. No advertisements are shown inside game rooms. Google may use cookies and similar technologies to show you relevant ads based on your browsing activity, subject to your consent where required by law. We do not control the content of these ads. Please refer to our <Link href="/privacy" onClick={() => playClickSound()} className="text-amber-400 hover:underline">Privacy Policy</Link> for more details on how advertising data is handled.
                </p>
              ),
            },
            {
              id: "disclaimers",
              title: "8. Disclaimers & Limitation of Liability",
              content: (
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    THE SERVICE IS PROVIDED <strong className="text-white">"AS IS"</strong> AND <strong className="text-white">"AS AVAILABLE"</strong> WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                  <p>
                    We do not guarantee that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We are not responsible for any loss of game progress, scores, or data arising from disconnections, server downtime, or any other technical issues.
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service.
                  </p>
                </div>
              ),
            },
            {
              id: "privacy",
              title: "9. Privacy",
              content: (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Your use of the Service is also subject to our <Link href="/privacy" onClick={() => playClickSound()} className="text-amber-400 hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review it to understand our practices.
                </p>
              ),
            },
            {
              id: "modifications",
              title: "10. Modifications to Terms",
              content: (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We reserve the right to update or modify these Terms at any time. Changes will take effect immediately upon posting to this page with an updated "Last updated" date. Your continued use of the Service after any changes constitutes your acceptance of the revised Terms.
                </p>
              ),
            },
            {
              id: "governing-law",
              title: "11. Governing Law",
              content: (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of the <strong className="text-white">Islamic Republic of Pakistan</strong>. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts located in Pakistan.
                </p>
              ),
            },
            {
              id: "contact",
              title: "12. Contact",
              content: (
                <div className="space-y-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>If you have any questions about these Terms, please contact us at:</p>
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
          <Link href="/terms" onClick={() => playClickSound()} className="text-slate-400">Terms of Service</Link>
          <span>·</span>
          <Link href="/privacy" onClick={() => playClickSound()} className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}
