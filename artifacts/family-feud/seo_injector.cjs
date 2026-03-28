const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const pages = [
  {
    name: 'About.tsx',
    title: "About Friendly Feud",
    desc: "Learn about Friendly Feud, the inspiration behind the free multiplayer survey game, and how it was built to bring friends and family together.",
    canonical: "https://friendlyfeud.fun/about",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Friendly Feud",
        "url": "https://friendlyfeud.fun"
      }
    }
  },
  {
    name: 'Terms.tsx',
    title: "Terms of Service",
    desc: "Terms of Service and user agreement for playing Friendly Feud online.",
    canonical: "https://friendlyfeud.fun/terms"
  },
  {
    name: 'Privacy.tsx',
    title: "Privacy Policy",
    desc: "Privacy Policy for Friendly Feud. Learn how we handle your data and protect your privacy while you play our online games.",
    canonical: "https://friendlyfeud.fun/privacy"
  },
  {
    name: 'Feedback.tsx',
    title: "Feedback & Bug Reports",
    desc: "Report bugs, suggest new features, or contact the developer of Friendly Feud.",
    canonical: "https://friendlyfeud.fun/feedback"
  },
  {
    name: 'Lobby.tsx',
    // Lobby uses the default title/desc from the SEO component, so no props needed
    isLobby: true
  },
  {
    name: 'GameRoom.tsx',
    // GameRoom will also use the default title/desc, or could be dynamic
    isGameRoom: true
  }
];

const useEffectRegex = /  useEffect\(\(\) => \{[\s\S]*?document\.title = [\s\S]*?\}, \[\]\);\r?\n\r?\n?/;

for (const page of pages) {
  const filePath = path.join(pagesDir, page.name);
  if (!fs.existsSync(filePath)) continue;
  
  let code = fs.readFileSync(filePath, 'utf8');
  
  // 1. Remove the manual document.title useEffect if it exists
  code = code.replace(useEffectRegex, '');
  
  // 2. Add the import if it's not there
  if (!code.includes('import { SEO }')) {
    code = `import { SEO } from "../components/SEO";\n` + code;
  }
  
  // 3. Prepare the SEO snippet
  let seoSnippet = `<SEO />`;
  if (!page.isLobby && !page.isGameRoom) {
    let schemaStr = page.schema ? `\n        schema={${JSON.stringify(page.schema, null, 2)}}` : '';
    seoSnippet = `<SEO \n        title="${page.title}" \n        description="${page.desc}" \n        canonical="${page.canonical}"${schemaStr}\n      />`;
  }
  
  // 4. Inject into the main wrapper div
  // All these pages have a <div className="min-h-screen bg-[#070d1f]... "> or similar
  const mainDivRegex = /(<div className="min-h-screen[^>]*>)/;
  
  if (!code.includes('<SEO')) {
      code = code.replace(mainDivRegex, `$1\n      ${seoSnippet}`);
  }
  
  fs.writeFileSync(filePath, code);
  console.log(`Processed ${page.name}`);
}
