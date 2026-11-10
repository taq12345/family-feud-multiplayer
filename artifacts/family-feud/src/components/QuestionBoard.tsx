import { NotebookPen } from "lucide-react";
import type { ThemeQuestion } from "../content/questionThemes";
import { playClickSound } from "../lib/sounds";

/**
 * One survey board as a native <details> element: collapsed by default so a
 * host can read the question aloud without spoiling it, but the answers and
 * the host note are always in the HTML (prerendered pages and crawlers see
 * them without JavaScript).
 */
export function QuestionBoard({ item, number }: { item: ThemeQuestion; number?: number }) {
  return (
    <details className="group" onToggle={() => playClickSound()}>
      <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
        <h3 className="font-semibold text-sm sm:text-base text-slate-200 group-hover:text-amber-300 transition-colors">
          {number !== undefined && <span className="text-amber-500/70 mr-2">{number}.</span>}
          {item.q}
        </h3>
        <p className="text-xs text-amber-500/70 mt-1">
          <span className="group-open:hidden">Show the {item.a.length} answers ▾</span>
          <span className="hidden group-open:inline">Hide the answers ▴</span>
        </p>
      </summary>
      <div className="px-5 pb-5">
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {item.a.map((ans, i) => (
            <li
              key={ans.text}
              className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm flex items-center justify-between gap-2"
            >
              <span>
                <span className="text-amber-400 font-bold mr-2">{i + 1}.</span>
                <span className="text-slate-300">{ans.text}</span>
              </span>
              <span className="text-amber-400/80 font-mono text-xs font-bold whitespace-nowrap">{ans.pts} pts</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 flex gap-2 text-sm text-slate-400 leading-relaxed">
          <NotebookPen className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <span className="font-semibold text-slate-300">Host note: </span>
            {item.note}
          </span>
        </p>
      </div>
    </details>
  );
}

/** The honest-labelling line shown wherever suggested points appear. */
export const SUGGESTED_POINTS_NOTE =
  "Points are suggested values that add up to 100 per board. We chose them ourselves; they are not survey results.";
