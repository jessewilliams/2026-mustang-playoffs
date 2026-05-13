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
      result: {
        homeTeam: "Red Sox", homeSeed: 3,
        awayTeam: "Giants", awaySeed: 6,
        homeScore: 13, awayScore: 9,
        innings: {
          home: [4, 1, 4, 4, 0, 0],
          away: [2, 0, 3, 0, 2, 2]
        },
        pitchers: [
          { name: "Jon",     team: "Red Sox", pitches: 6,  gameDate: "2026-05-06" },
          { name: "Kayson",  team: "Red Sox", pitches: 50, gameDate: "2026-05-06" },
          { name: "Gavin",   team: "Red Sox", pitches: 34, gameDate: "2026-05-06" },
          { name: "Kaleb",   team: "Red Sox", pitches: 49, gameDate: "2026-05-06" },
          { name: "Brantly", team: "Red Sox", pitches: 6,  gameDate: "2026-05-06" },
          { name: "Angelo",  team: "Giants",  pitches: 11, gameDate: "2026-05-06" },
          { name: "Lorenzo", team: "Giants",  pitches: 36, gameDate: "2026-05-06" },
          { name: "Owen",    team: "Giants",  pitches: 36, gameDate: "2026-05-06" },
          { name: "Chase",   team: "Giants",  pitches: 24, gameDate: "2026-05-06" },
          { name: "Carson",  team: "Giants",  pitches: 11, gameDate: "2026-05-06" }
        ]
      }
    },
    G4: {
      date: "Wed 5/6", time: "5:15 PM", location: "Central MP",
      homeSlot: { seed: 2 }, awaySlot: { seed: 7 },
      result: {
        homeTeam: "Brewers", homeSeed: 2,
        awayTeam: "Pirates", awaySeed: 7,
        homeScore: 15, awayScore: 5,
        innings: {
          home: [4, 2, 1, 4, 4, 0],
          away: [0, 1, 0, 0, 3, 1]
        },
        pitchers: [
          { name: "Casey Stevenson",  team: "Brewers", pitches: 47, gameDate: "2026-05-06" },
          { name: "Weston Sereni",    team: "Brewers", pitches: 43, gameDate: "2026-05-06" },
          { name: "Jesse Stevenson",  team: "Brewers", pitches: 5,  gameDate: "2026-05-06" },
          { name: "Logan Holt",       team: "Brewers", pitches: 42, gameDate: "2026-05-06" },
          { name: "Caden",  team: "Pirates", pitches: 45, gameDate: "2026-05-06" },
          { name: "Chase",  team: "Pirates", pitches: 23, gameDate: "2026-05-06" },
          { name: "Jaxon",  team: "Pirates", pitches: 40, gameDate: "2026-05-06" },
          { name: "Powell", team: "Pirates", pitches: 15, gameDate: "2026-05-06" }
        ]
      }
    },

    // ── WINNERS BRACKET ROUND 2 ──────────────
    G6: {
      date: "Sat 5/9", time: "9:00 AM", location: "Britton",
      homeSlot: { winnerOf: "G1" }, awaySlot: { winnerOf: "G2" },
      result: {
        homeTeam: "Reds", homeSeed: 1,
        awayTeam: "Mets", awaySeed: 4,
        homeScore: 6, awayScore: 20,
        innings: {
          home: [1, 4, 1, 0, 0, 0],
          away: [1, 4, 2, 4, 3, 6]
        },
        pitchers: [
          { name: "J. Rodriguez", team: "Mets",  pitches: 48, gameDate: "2026-05-09" },
          { name: "L. Delgado",   team: "Mets",  pitches: 5,  gameDate: "2026-05-09" },
          { name: "W. Billman",   team: "Mets",  pitches: 24, gameDate: "2026-05-09" },
          { name: "K. Pacheco",   team: "Mets",  pitches: 46, gameDate: "2026-05-09" },
          { name: "R. Kanney",    team: "Mets",  pitches: 26, gameDate: "2026-05-09" },
          { name: "Jake",         team: "Reds",  pitches: 50, gameDate: "2026-05-09" },
          { name: "AJ",           team: "Reds",  pitches: 49, gameDate: "2026-05-09" },
          { name: "Joey",         team: "Reds",  pitches: 46, gameDate: "2026-05-09" },
          { name: "Cameron",      team: "Reds",  pitches: 35, gameDate: "2026-05-09" },
          { name: "Cruz",         team: "Reds",  pitches: 31, gameDate: "2026-05-09" }
        ]
      }
    },
    G8: {
      date: "Sat 5/9", time: "12:00 PM", location: "Britton",
      homeSlot: { winnerOf: "G3" }, awaySlot: { winnerOf: "G4" },
      result: {
        homeTeam: "Red Sox", homeSeed: 3,
        awayTeam: "Brewers", awaySeed: 2,
        homeScore: 6, awayScore: 7,
        innings: {
          home: [0, 2, 0, 0, 2, 2],
          away: [0, 1, 4, 0, 2, 0]
        },
        pitchers: [
          { name: "Casey Stevenson", team: "Brewers",  pitches: 46, gameDate: "2026-05-09" },
          { name: "Weston Sereni",   team: "Brewers",  pitches: 57, gameDate: "2026-05-09" },
          { name: "Kayson",          team: "Red Sox",  pitches: 51, gameDate: "2026-05-09" },
          { name: "Jon Brassfield",  team: "Red Sox",  pitches: 18, gameDate: "2026-05-09" },
          { name: "Gavin Leimas",    team: "Red Sox",  pitches: 29, gameDate: "2026-05-09" }
        ]
      }
    },

    // ── WINNERS FINAL ─────────────────────────
    G12: {
      date: "Tue 5/12", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G8" }, awaySlot: { winnerOf: "G6" },
      result: {
        homeTeam: "Brewers", homeSeed: 2,
        awayTeam: "Mets", awaySeed: 4,
        homeScore: 12, awayScore: 3,
        innings: {
          home: [2, 1, 3, 4, 2, 0],
          away: [2, 0, 0, 1, 0, 0]
        },
        pitchers: [
          { name: "Casey Stevenson", team: "Brewers", pitches: 62, gameDate: "2026-05-12" },
          { name: "Jesse Stevenson", team: "Brewers", pitches: 34, gameDate: "2026-05-12" },
          { name: "Kai P",           team: "Mets",    pitches: 42, gameDate: "2026-05-12" },
          { name: "Jayce R",         team: "Mets",    pitches: 39, gameDate: "2026-05-12" },
          { name: "Riley K",         team: "Mets",    pitches: 25, gameDate: "2026-05-12" },
          { name: "Wyatt Billman",   team: "Mets",    pitches: 9,  gameDate: "2026-05-12" },
          { name: "Don Hodge",       team: "Mets",    pitches: 8,  gameDate: "2026-05-12" }
        ]
      }
    },

    // ── ELIMINATION BRACKET ROUND 1 ──────────
    G5: {
      date: "Sat 5/9", time: "3:00 PM", location: "Britton",
      homeSlot: { loserOf: "G2" }, awaySlot: { loserOf: "G1" },
      result: {
        homeTeam: "Phillies", homeSeed: 5,
        awayTeam: "Blue Jays", awaySeed: 8,
        homeScore: 18, awayScore: 13,
        innings: {
          home: [4, 1, 4, 4, 5, 0],
          away: [3, 4, 0, 0, 1, 5]
        },
        pitchers: [
          { name: "Andrew",  team: "Phillies",  pitches: 71, gameDate: "2026-05-09" },
          { name: "Lucas V", team: "Phillies",  pitches: 31, gameDate: "2026-05-09" },
          { name: "Lino",    team: "Phillies",  pitches: 34, gameDate: "2026-05-09" },
          { name: "Joey",    team: "Blue Jays", pitches: 37, gameDate: "2026-05-09" },
          { name: "Joe",     team: "Blue Jays", pitches: 46, gameDate: "2026-05-09" },
          { name: "Bryson",  team: "Blue Jays", pitches: 40, gameDate: "2026-05-09" }
        ]
      }
    },
    G7: {
      date: "Sat 5/9", time: "12:00 PM", location: "Central MP",
      homeSlot: { loserOf: "G3" }, awaySlot: { loserOf: "G4" },
      result: {
        homeTeam: "Giants", homeSeed: 6,
        awayTeam: "Pirates", awaySeed: 7,
        homeScore: 12, awayScore: 15,
        innings: {
          home: [4, 1, 4, 2, 1, 0],
          away: [1, 0, 3, 4, 3, 4]
        },
        pitchers: [
          { name: "Caden",   team: "Pirates", pitches: 26, gameDate: "2026-05-09" },
          { name: "Chase",   team: "Pirates", pitches: 35, gameDate: "2026-05-09" },
          { name: "Jaxon",   team: "Pirates", pitches: 28, gameDate: "2026-05-09" },
          { name: "Marco",   team: "Pirates", pitches: 27, gameDate: "2026-05-09" },
          { name: "Powell",  team: "Pirates", pitches: 9,  gameDate: "2026-05-09" },
          { name: "Lorenzo", team: "Giants",  pitches: 11, gameDate: "2026-05-09" },
          { name: "Oliver",  team: "Giants",  pitches: 35, gameDate: "2026-05-09" },
          { name: "Carson",  team: "Giants",  pitches: 35, gameDate: "2026-05-09" },
          { name: "Chase",   team: "Giants",  pitches: 29, gameDate: "2026-05-09" },
          { name: "Owen",    team: "Giants",  pitches: 16, gameDate: "2026-05-09" }
        ]
      }
    },

    // ── ELIMINATION BRACKET ROUND 2 ──────────
    G9: {
      date: "Mon 5/11", time: "5:15 PM", location: "El Toro",
      homeSlot: { winnerOf: "G7" }, awaySlot: { loserOf: "G6" },
      result: {
        homeTeam: "Pirates", homeSeed: 7,
        awayTeam: "Reds", awaySeed: 1,
        homeScore: 21, awayScore: 7,
        innings: {
          home: [3, 1, 4, 4, 9, 0],
          away: [2, 0, 0, 0, 5, 0]
        },
        pitchers: [
          { name: "Caden",   team: "Pirates", pitches: 34, gameDate: "2026-05-11" },
          { name: "Chase",   team: "Pirates", pitches: 20, gameDate: "2026-05-11" },
          { name: "Jaxon",   team: "Pirates", pitches: 35, gameDate: "2026-05-11" },
          { name: "Powell",  team: "Pirates", pitches: 33, gameDate: "2026-05-11" },
          { name: "Cameron", team: "Reds",    pitches: 52, gameDate: "2026-05-11" },
          { name: "Cruz",    team: "Reds",    pitches: 64, gameDate: "2026-05-11" },
          { name: "James",   team: "Reds",    pitches: 22, gameDate: "2026-05-11" }
        ]
      }
    },
    G10: {
      date: "Mon 5/11", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G5" }, awaySlot: { loserOf: "G8" },
      result: {
        homeTeam: "Phillies", homeSeed: 5,
        awayTeam: "Red Sox", awaySeed: 3,
        homeScore: 6, awayScore: 16,
        innings: {
          home: [1, 1, 2, 0, 0, 2],
          away: [4, 3, 0, 1, 4, 4]
        },
        pitchers: [
          { name: "Jon",       team: "Red Sox",  pitches: 32, gameDate: "2026-05-11" },
          { name: "Gavin",     team: "Red Sox",  pitches: 34, gameDate: "2026-05-11" },
          { name: "Nathaniel", team: "Red Sox",  pitches: 5,  gameDate: "2026-05-11" },
          { name: "Kaleb",     team: "Red Sox",  pitches: 33, gameDate: "2026-05-11" },
          { name: "Brantley",  team: "Red Sox",  pitches: 5,  gameDate: "2026-05-11" },
          { name: "Lucas C",   team: "Phillies", pitches: 47, gameDate: "2026-05-11" },
          { name: "Lucas V",   team: "Phillies", pitches: 35, gameDate: "2026-05-11" },
          { name: "Jovan",     team: "Phillies", pitches: 32, gameDate: "2026-05-11" },
          { name: "Benjamin",  team: "Phillies", pitches: 25, gameDate: "2026-05-11" },
          { name: "Lino",      team: "Phillies", pitches: 27, gameDate: "2026-05-11" }
        ]
      }
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
