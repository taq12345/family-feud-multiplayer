import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Build-time prerendering snapshots each route's <head> (title, description,
// canonical, Open Graph…) so crawlers get real per-page metadata. React 19
// hoists those tags without any marker it can later recognise, so on the
// client it would append a second copy. The prerender step tags every
// snapshotted head element with `data-prerender`; strip them right before the
// live render so exactly one set remains.
document
  .querySelectorAll("head [data-prerender]")
  .forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(<App />);
