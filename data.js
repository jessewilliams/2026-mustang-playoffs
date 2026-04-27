// ─────────────────────────────────────────────
//  2026 MUSTANG DIVISION PLAYOFF DATA
//  Example file with sample results
// ─────────────────────────────────────────────

window.PLAYOFF_DATA = {

  seedings: {
    1: "Mets",
    2: "Blue Jays",
    3: "Phillies",
    4: "Pirates",
    5: "Red Sox",
    6: "Brewers",
    7: "Reds",
    8: "Giants"
  },

  games: {

    // ── WINNERS BRACKET ROUND 1 ──────────────

    G1: {
      date: "Tue 5/5", time: "5:15 PM", location: "Britton",
      homeSlot: { seed: 1 }, awaySlot: { seed: 8 },
      result: {
        homeTeam: "Mets", homeSeed: 1,
        awayTeam: "Giants", awaySeed: 8,
        homeScore: 9, awayScore: 4,
        innings: {
          home: [2, 0, 3, 1, 2, 1],
          away: [0, 2, 0, 1, 1, 0]
        },
        pitchers: [
          { name: "D. Hodge",   team: "Mets",   pitches: 58, gameDate: "2026-05-05" },
          { name: "R. Kanney",  team: "Mets",   pitches: 21, gameDate: "2026-05-05" },
          { name: "J. Torres",  team: "Giants",  pitches: 65, gameDate: "2026-05-05" },
          { name: "M. Ruiz",    team: "Giants",  pitches: 18, gameDate: "2026-05-05" }
        ]
      }
    },

    G2: {
      date: "Tue 5/5", time: "5:15 PM", location: "Central MP",
      homeSlot: { seed: 4 }, awaySlot: { seed: 5 },
      result: {
        homeTeam: "Pirates", homeSeed: 4,
        awayTeam: "Red Sox", awaySeed: 5,
        homeScore: 5, awayScore: 7,
        innings: {
          home: [1, 0, 2, 0, 1, 1],
          away: [0, 3, 1, 2, 0, 1]
        },
        pitchers: [
          { name: "C. Burke",   team: "Pirates", pitches: 72, gameDate: "2026-05-05" },
          { name: "T. Evans",   team: "Red Sox",  pitches: 55, gameDate: "2026-05-05" },
          { name: "A. Cross",   team: "Red Sox",  pitches: 16, gameDate: "2026-05-05" }
        ]
      }
    },

    G3: {
      date: "Wed 5/6", time: "5:15 PM", location: "Britton",
      homeSlot: { seed: 2 }, awaySlot: { seed: 7 },
      result: {
        homeTeam: "Blue Jays", homeSeed: 2,
        awayTeam: "Reds", awaySeed: 7,
        homeScore: 11, awayScore: 3,
        innings: {
          home: [3, 2, 1, 3, 1, 1],
          away: [1, 0, 2, 0, 0, 0]
        },
        pitchers: [
          { name: "L. Park",    team: "Blue Jays", pitches: 63, gameDate: "2026-05-06" },
          { name: "W. Chen",    team: "Blue Jays", pitches: 14, gameDate: "2026-05-06" },
          { name: "R. Gomez",   team: "Reds",      pitches: 71, gameDate: "2026-05-06" }
        ]
      }
    },

    G4: {
      date: "Wed 5/6", time: "5:15 PM", location: "Central MP",
      homeSlot: { seed: 3 }, awaySlot: { seed: 6 },
      result: {
        homeTeam: "Phillies", homeSeed: 3,
        awayTeam: "Brewers", awaySeed: 6,
        homeScore: 6, awayScore: 8,
        innings: {
          home: [2, 1, 0, 1, 2, 0],
          away: [0, 2, 3, 0, 1, 2]
        },
        pitchers: [
          { name: "B. Allen",   team: "Phillies", pitches: 68, gameDate: "2026-05-06" },
          { name: "N. Shaw",    team: "Phillies", pitches: 12, gameDate: "2026-05-06" },
          { name: "D. Watts",   team: "Brewers",  pitches: 52, gameDate: "2026-05-06" },
          { name: "K. Flores",  team: "Brewers",  pitches: 27, gameDate: "2026-05-06" }
        ]
      }
    },

    // ── WINNERS BRACKET ROUND 2 ──────────────

    G5: {
      date: "Sat 5/9", time: "9:00 AM", location: "Britton",
      homeSlot: { winnerOf: "G1" }, awaySlot: { winnerOf: "G2" },
      result: {
        homeTeam: "Mets", homeSeed: 1,
        awayTeam: "Red Sox", awaySeed: 5,
        homeScore: 4, awayScore: 6,
        innings: {
          home: [1, 0, 2, 0, 0, 1],
          away: [2, 1, 0, 0, 2, 1]
        },
        pitchers: [
          { name: "M. McBride", team: "Mets",    pitches: 61, gameDate: "2026-05-09" },
          { name: "T. Evans",   team: "Red Sox",  pitches: 44, gameDate: "2026-05-09" },
          { name: "S. King",    team: "Red Sox",  pitches: 22, gameDate: "2026-05-09" }
        ]
      }
    },

    G6: {
      date: "Sat 5/9", time: "9:00 AM", location: "Central MP",
      homeSlot: { winnerOf: "G3" }, awaySlot: { winnerOf: "G4" },
      result: {
        homeTeam: "Blue Jays", homeSeed: 2,
        awayTeam: "Brewers", awaySeed: 6,
        homeScore: 7, awayScore: 5,
        innings: {
          home: [0, 3, 1, 2, 0, 1],
          away: [1, 0, 2, 1, 1, 0]
        },
        pitchers: [
          { name: "L. Park",    team: "Blue Jays", pitches: 48, gameDate: "2026-05-09" },
          { name: "J. Reed",    team: "Blue Jays", pitches: 31, gameDate: "2026-05-09" },
          { name: "K. Flores",  team: "Brewers",   pitches: 59, gameDate: "2026-05-09" },
          { name: "D. Watts",   team: "Brewers",   pitches: 19, gameDate: "2026-05-09" }
        ]
      }
    },

    // ── ELIMINATION BRACKET ROUND 1 ──────────

    G7: {
      date: "Sat 5/9", time: "12:00 PM", location: "Britton",
      homeSlot: { loserOf: "G1" }, awaySlot: { loserOf: "G2" },
      result: {
        homeTeam: "Giants", homeSeed: 8,
        awayTeam: "Pirates", awaySeed: 4,
        homeScore: 3, awayScore: 8,
        innings: {
          home: [0, 1, 0, 2, 0, 0],
          away: [2, 0, 3, 1, 2, 0]
        },
        pitchers: [
          { name: "M. Ruiz",    team: "Giants",  pitches: 55, gameDate: "2026-05-09" },
          { name: "C. Burke",   team: "Pirates", pitches: 38, gameDate: "2026-05-09" },
          { name: "O. James",   team: "Pirates", pitches: 29, gameDate: "2026-05-09" }
        ]
      }
    },

    G8: {
      date: "Sat 5/9", time: "12:00 PM", location: "Central MP",
      homeSlot: { loserOf: "G3" }, awaySlot: { loserOf: "G4" },
      result: {
        homeTeam: "Reds", homeSeed: 7,
        awayTeam: "Phillies", awaySeed: 3,
        homeScore: 5, awayScore: 4,
        innings: {
          home: [1, 2, 0, 1, 0, 1],
          away: [0, 1, 1, 2, 0, 0]
        },
        pitchers: [
          { name: "A. Vega",    team: "Reds",     pitches: 67, gameDate: "2026-05-09" },
          { name: "N. Shaw",    team: "Phillies",  pitches: 51, gameDate: "2026-05-09" },
          { name: "B. Allen",   team: "Phillies",  pitches: 14, gameDate: "2026-05-09" }
        ]
      }
    },

    // ── WINNERS BRACKET FINAL ─────────────────

    G11: {
      date: "Tue 5/12", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G5" }, awaySlot: { winnerOf: "G6" },
      result: null
    },

    // ── ELIMINATION BRACKET ROUND 2 ──────────

    G9: {
      date: "Mon 5/11", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G7" }, awaySlot: { loserOf: "G5" },
      result: null
    },

    G10: {
      date: "Mon 5/11", time: "5:15 PM", location: "El Toro",
      homeSlot: { winnerOf: "G8" }, awaySlot: { loserOf: "G6" },
      result: null
    },

    // ── ELIMINATION BRACKET SEMI ──────────────

    G12: {
      date: "Wed 5/13", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G9" }, awaySlot: { winnerOf: "G10" },
      result: null
    },

    // ── ELIMINATION BRACKET FINAL ─────────────

    G13: {
      date: "Thu 5/14", time: "5:15 PM", location: "Britton",
      homeSlot: { loserOf: "G11" }, awaySlot: { winnerOf: "G12" },
      result: null
    },

    // ── CHAMPIONSHIP ─────────────────────────

    G14: {
      date: "Sat 5/16", time: "10:00 AM", location: "Britton",
      homeSlot: { winnerOf: "G11" }, awaySlot: { winnerOf: "G13" },
      result: null
    },

    G15: {
      date: "Sat 5/16", time: "TBD", location: "Britton",
      homeSlot: { loserOf: "G14" }, awaySlot: { winnerOf: "G14" },
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
