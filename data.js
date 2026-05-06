// ─────────────────────────────────────────────
//  2026 MUSTANG DIVISION PLAYOFF DATA
// ─────────────────────────────────────────────

window.PLAYOFF_DATA = {

  seedings: {
    1: "Reds",
    2: "Brewers",
    3: "Red Sox",
    4: "Mets",
    5: "Phillies",
    6: "Giants",
    7: "Pirates",
    8: "Blue Jays"
  },

  games: {

    // ── ROUND 1 ──────────────────────────────
    G1: {
      date: "Tue 5/5", time: "5:15 PM", location: "Britton",
      homeSlot: { seed: 1 }, awaySlot: { seed: 8 },
      result: {
        homeTeam: "Reds", homeSeed: 1,
        awayTeam: "Blue Jays", awaySeed: 8,
        homeScore: 5, awayScore: 4,
        innings: {
          home: [4, 0, 0, 0, 0, 1],
          away: [3, 0, 0, 1, 0, 0]
        },
        pitchers: [
          { name: "Joey",   team: "Reds",      pitches: 36, gameDate: "2026-05-05" },
          { name: "AJ",     team: "Reds",      pitches: 45, gameDate: "2026-05-05" },
          { name: "Jake",   team: "Reds",      pitches: 8,  gameDate: "2026-05-05" },
          { name: "Bryson", team: "Blue Jays", pitches: 65, gameDate: "2026-05-05" },
          { name: "Joe",    team: "Blue Jays", pitches: 16, gameDate: "2026-05-05" }
        ]
      }
    },
    G2: {
      date: "Tue 5/5", time: "5:15 PM", location: "Central MP",
      homeSlot: { seed: 4 }, awaySlot: { seed: 5 },
      result: {
        homeTeam: "Mets", homeSeed: 4,
        awayTeam: "Phillies", awaySeed: 5,
        homeScore: 15, awayScore: 6,
        innings: {
          home: [3, 0, 4, 4, 4, 0],
          away: [0, 1, 0, 3, 0, 2]
        },
        pitchers: [
          { name: "J. Rodriguez", team: "Mets",     pitches: 55, gameDate: "2026-05-05" },
          { name: "K. Pacheco",   team: "Mets",     pitches: 23, gameDate: "2026-05-05" },
          { name: "D. Hodge",     team: "Mets",     pitches: 18, gameDate: "2026-05-05" },
          { name: "R. Kanney",    team: "Mets",     pitches: 26, gameDate: "2026-05-05" },
          { name: "Lucas V",      team: "Phillies", pitches: 54, gameDate: "2026-05-05" },
          { name: "Lucas C",      team: "Phillies", pitches: 20, gameDate: "2026-05-05" },
          { name: "Jovan",        team: "Phillies", pitches: 38, gameDate: "2026-05-05" }
        ]
      }
    },
    G3: {
      date: "Wed 5/6", time: "5:15 PM", location: "Britton",
      homeSlot: { seed: 3 }, awaySlot: { seed: 6 },
      result: null
    },
    G4: {
      date: "Wed 5/6", time: "5:15 PM", location: "Central MP",
      homeSlot: { seed: 2 }, awaySlot: { seed: 7 },
      result: null
    },

    // ── WINNERS BRACKET ROUND 2 ──────────────
    G6: {
      date: "Sat 5/9", time: "9:00 AM", location: "Britton",
      homeSlot: { winnerOf: "G1" }, awaySlot: { winnerOf: "G2" },
      result: null
    },
    G8: {
      date: "Sat 5/9", time: "12:00 PM", location: "Britton",
      homeSlot: { winnerOf: "G3" }, awaySlot: { winnerOf: "G4" },
      result: null
    },

    // ── WINNERS FINAL ─────────────────────────
    G12: {
      date: "Tue 5/12", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G6" }, awaySlot: { winnerOf: "G8" },
      result: null
    },

    // ── ELIMINATION BRACKET ROUND 1 ──────────
    G5: {
      date: "Sat 5/9", time: "3:00 PM", location: "Britton",
      homeSlot: { loserOf: "G1" }, awaySlot: { loserOf: "G2" },
      result: null
    },
    G7: {
      date: "Sat 5/9", time: "12:00 PM", location: "Central MP",
      homeSlot: { loserOf: "G3" }, awaySlot: { loserOf: "G4" },
      result: null
    },

    // ── ELIMINATION BRACKET ROUND 2 ──────────
    G9: {
      date: "Mon 5/11", time: "5:15 PM", location: "El Toro",
      homeSlot: { loserOf: "G6" }, awaySlot: { winnerOf: "G7" },
      result: null
    },
    G10: {
      date: "Mon 5/11", time: "5:15 PM", location: "Britton",
      homeSlot: { loserOf: "G8" }, awaySlot: { winnerOf: "G5" },
      result: null
    },

    // ── ELIMINATION SEMI ──────────────────────
    G11: {
      date: "Wed 5/13", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G10" }, awaySlot: { winnerOf: "G9" },
      result: null
    },

    // ── ELIMINATION FINAL ─────────────────────
    G13: {
      date: "Thu 5/14", time: "5:15 PM", location: "Britton",
      homeSlot: { loserOf: "G12" }, awaySlot: { winnerOf: "G11" },
      result: null
    },

    // ── CHAMPIONSHIP ─────────────────────────
    G14: {
      date: "Sat 5/16", time: "10:00 AM", location: "Britton",
      homeSlot: { winnerOf: "G12" }, awaySlot: { winnerOf: "G13" },
      result: null
    },
    G15: {
      date: "Sat 5/16", time: "TBD", location: "Britton",
      homeSlot: { winnerOf: "G14" }, awaySlot: { loserOf: "G14" },
      ifNecessary: true,
      result: null
    }
  },

  restRules: [
    { maxPitches: 20, restDays: 0 },
    { maxPitches: 35, restDays: 1 },
    { maxPitches: 50, restDays: 2 },
    { maxPitches: 65, restDays: 3 },
    { maxPitches: 999, restDays: 4 }
  ]
};
