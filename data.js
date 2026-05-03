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

    G1: {
      date: "Tue 5/5", time: "5:15 PM", location: "Britton",
      homeSlot: { seed: 1 }, awaySlot: { seed: 8 },
      result: null
    },
    G2: {
      date: "Tue 5/5", time: "5:15 PM", location: "Central MP",
      homeSlot: { seed: 4 }, awaySlot: { seed: 5 },
      result: null
    },
    G3: {
      date: "Wed 5/6", time: "5:15 PM", location: "Britton",
      homeSlot: { seed: 2 }, awaySlot: { seed: 7 },
      result: null
    },
    G4: {
      date: "Wed 5/6", time: "5:15 PM", location: "Central MP",
      homeSlot: { seed: 3 }, awaySlot: { seed: 6 },
      result: null
    },

    G5: {
      date: "Sat 5/9", time: "3:00 PM", location: "Britton",
      homeSlot: { winnerOf: "G1" }, awaySlot: { winnerOf: "G2" },
      result: null
    },
    G6: {
      date: "Sat 5/9", time: "9:00 AM", location: "Britton",
      homeSlot: { winnerOf: "G3" }, awaySlot: { winnerOf: "G4" },
      result: null
    },

    G7: {
      date: "Sat 5/9", time: "12:00 PM", location: "Central MP",
      homeSlot: { loserOf: "G1" }, awaySlot: { loserOf: "G2" },
      result: null
    },
    G8: {
      date: "Sat 5/9", time: "12:00 PM", location: "Britton",
      homeSlot: { loserOf: "G3" }, awaySlot: { loserOf: "G4" },
      result: null
    },

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

    G11: {
      date: "Wed 5/13", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G5" }, awaySlot: { winnerOf: "G6" },
      result: null
    },

    G12: {
      date: "Tue 5/12", time: "5:15 PM", location: "Britton",
      homeSlot: { winnerOf: "G9" }, awaySlot: { winnerOf: "G10" },
      result: null
    },

    G13: {
      date: "Thu 5/14", time: "5:15 PM", location: "Britton",
      homeSlot: { loserOf: "G11" }, awaySlot: { winnerOf: "G12" },
      result: null
    },

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
