const fs = require('fs');
const path = 'src/pages/Rules.tsx';
let code = fs.readFileSync(path, 'utf8');

const useEffectRegex = /  useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);\r?\n\r?\n?/;
code = code.replace(useEffectRegex, '');

const targetDiv = '<div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">';
const seoInject = `<div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">\n      <SEO \n        title="How to Play" \n        description="Learn how to play Friendly Feud — the free online feud-style survey game. Full rules covering Face-Off, Playing phase, Steal, scoring, and tips to win." \n        canonical="https://friendlyfeud.fun/rules"\n        schema={faqSchema}\n      />`;

code = code.replace(targetDiv, seoInject);
fs.writeFileSync(path, code);
console.log('Modified Rules.tsx');
