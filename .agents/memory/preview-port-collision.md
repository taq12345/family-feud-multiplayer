---
name: Preview port collisions
description: Replit artifact workflow restarts can leave an orphaned Vite process and route the preview to stale code.
---

When a Vite artifact reports that its configured port is busy and falls back to another port, the proxy may still serve the older process on the configured port. Clear the orphaned process before diagnosing browser-only failures.

**Why:** The artifact proxy routes to its configured port, not whichever fallback port Vite selected. This can make a current workflow appear healthy while the preview serves stale or unrelated output.

**How to apply:** Check workflow logs for a port fallback, compare the running Vite processes, remove only stale processes for the affected artifact, then restart the managed artifact workflow.