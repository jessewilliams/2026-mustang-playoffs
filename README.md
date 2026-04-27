# 2026 Mustang Division Playoffs

A self-contained bracket tracker for an 8-team double elimination tournament.
No server required — runs entirely as static files on GitHub Pages.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Public bracket page fans and managers view |
| `data.js` | All bracket data — seedings, game results, pitch counts |

---

## Setup on GitHub Pages

1. Create a new GitHub repository (can be public or private — Pages works either way)
2. Upload both files (`index.html`, `data.js`) to the root
3. Go to **Settings → Pages** and set source to **main branch / root**
4. Your bracket is live at `https://yourusername.github.io/your-repo-name/`

---

## Workflow

### Before the tournament — set seedings

Paste your final standings into the Claude conversation and a updated `data.js`
will be provided. Replace the file in your GitHub repo and the bracket updates automatically.

### After each game — process an affidavit

Paste the affidavit text into the Claude conversation and specify which game it's for (G1–G15).
Claude will extract the teams, inning-by-inning scores, and pitcher pitch counts, then
produce an updated `data.js` to drop into your repo.

### What the bracket shows

- **Bracket cards**: team names with seedings, score (if played), date/time, location
- **Pending games**: show source labels like "Winner of G5" or "Loser of G2" until resolved
- **Click any game** to see the full detail modal:
  - Final score display
  - Full box score (inning by inning, 6 innings)
  - Pitcher table with pitch counts, color-coded bars, and next game eligibility

---

## Pitcher rest rules (Mustang)

| Pitches thrown | Rest days required |
|---|---|
| 1–20 | 0 |
| 21–35 | 1 |
| 36–50 | 2 |
| 51–65 | 3 |
| 66+ | 4 |

The bracket automatically calculates each pitcher's next eligible game date
based on the game date recorded in the affidavit.
