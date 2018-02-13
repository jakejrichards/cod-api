# cod-api
A Call of Duty API written in Node.js
* Get profile information - prestige, rank, xp, and more...
* Get recent matches and stats - map, mode, win/loss, kills, deaths, SPM, K/D Ratio, and more...
* Get leaderboard information - weekly, monthly, alltime, for all game modes
* Not licensed by or affiliated with Activision or Call of Duty

## Requirements

Node.js

### Installing

You can install via the npm package manager

```
npm install cod-api
```

Or clone the repository and install dependencies
```
git clone https://github.com/jakejrichards/cod-api.git
```

## Usage

```
var codAPI = require("../cod.js");

var options = {
    title: "bo3", // bo3, iw, wwii
    platform: "psn", // psn, xbl, steam
    username: "Consisttt", // username
    days: 1, // amount of days (required for recent matches and summary),
    type: "hc", // core, hc, arena
    time: "monthly", // alltime, monthly, weekly
    mode: "war" // career, war (Team Deathmatch), dm (Free-For-All), conf (Kill Confirmed), ctf (Capture The Flag), sd (Search & Destroy), dom (Domination), ball (Gridiron), hp (Hardpoint), 1v1, raid (War)
};
```

## Get Profile

```
codAPI.getProfile(options, function(profile){
    console.log(profile);
});
```
Output:

```
{ title: 'wwii',
  platform: 'psn',
  username: 'Consisttt',
  mp: 
   { lifetime: { all: [Object], mode: [Object] },
     weekly: { all: [Object], mode: [Object] },
     level: 42,
     maxLevel: 0,
     levelXpRemainder: 26990,
     levelXpGained: 13010,
     prestige: 5,
     prestigeId: 0,
     maxPrestige: 0 },
  zombies: 
   { lifetime: { all: {}, mode: {} },
     weekly: { all: {}, mode: {} } },
  engagement: null }
```

## Get Recent Matches

```
codAPI.getRecentMatches(options, function(matches){
    console.log(matches);
});
```
Output:
```
[ { utcStartSeconds: 1518474308,
    utcEndSeconds: 1518474994,
    duration: 685,
    map: 'mp_france_village',
    mode: 'hp',
    result: 'none',
    winningTeam: 'allies',
    privateMatch: false,
    gameBattle: false,
    playlistName: null,
    player: 
     { awards: [Object],
       team: 'axis',
       rank: 41,
       prestige: 5,
       loadouts: [Object] },
    playerStats: 
     { kills: 0,
       shotsMissed: 634,
       kdRatio: 0,
       distanceTravelled: 90335.734375,
       divisionXpMountain: 0,
       accuracy: 0.25323910482921086,
       divisionXpExpeditionary: 0,
       divisionXpInfantry: 0,
       divisionXpArmored: 0,
       shotsLanded: 215,
       divisionXpAirborne: 0,
       avgSpeed: 174.0572967529297,
       avgKillDistance: 465.7652587890625,
       score: 6900,
       totalXp: 4000,
       timePlayed: 685.9,
       headshots: 0,
       divisionXpNone: 0,
       assists: 10,
       divisionXpResistance: 0,
       shotsFired: 849,
       deaths: 0 } },
  { utcStartSeconds: 1518473117,
    utcEndSeconds: 1518473590,
    duration: 472,
    map: 'mp_forest_01',
    mode: 'hp',
    result: 'none',
    winningTeam: 'axis',
    privateMatch: false,
    gameBattle: false,
    playlistName: null,
    player: 
     { awards: [Object],
       team: 'axis',
       rank: 41,
       prestige: 5,
       loadouts: [Object] },
    playerStats: 
     { kills: 0,
       shotsMissed: 366,
       kdRatio: 0,
       distanceTravelled: 58908.19921875,
       divisionXpMountain: 0,
       accuracy: 0.2294736842105263,
       divisionXpExpeditionary: 0,
       divisionXpInfantry: 0,
       divisionXpArmored: 0,
       shotsLanded: 109,
       divisionXpAirborne: 0,
       avgSpeed: 185.8302764892578,
       avgKillDistance: 413.4194641113281,
       score: 3940,
       totalXp: 8000,
       timePlayed: 472.45,
       headshots: 3,
       divisionXpNone: 0,
       assists: 10,
       divisionXpResistance: 0,
       shotsFired: 475,
       deaths: 0 } } ]
```

## Get Summary

```
codAPI.getRecentSummary(options, function(summary){
    console.log(summary);
});
```
Output:
```
{ all: 
   { kills: 88,
     distanceTravelled: 529676.67578125,
     divisionXpMountain: 0,
     accuracy: 0.255205688166582,
     divisionXpExpeditionary: 0,
     losses: 1,
     shotsLanded: 1005,
     score: 30885,
     totalXp: 85200,
     headshots: 5,
     assists: 52,
     divisionXpResistance: 4275,
     scorePerMinute: 194.1486157311611,
     deaths: 50,
     wins: 4,
     shotsMissed: 2933,
     kdRatio: 1.76,
     divisionXpInfantry: 0,
     divisionXpArmored: 0,
     divisionXpAirborne: 0,
     avgSpeed: 1541.1485290527344,
     avgKillDistance: 4201.184417724609,
     timePlayed: 9544.75,
     matchesPlayed: 12,
     divisionXpNone: 0,
     shotsFired: 3938 },
  war: 
   { kills: 88,
     distanceTravelled: 182523.109375,
     divisionXpMountain: 0,
     accuracy: 0.28885832187070154,
     divisionXpExpeditionary: 0,
     losses: 1,
     shotsLanded: 420,
     score: 10245,
     totalXp: 49200,
     headshots: 1,
     assists: 18,
     divisionXpResistance: 4275,
     scorePerMinute: 172.4384599200505,
     deaths: 50,
     wins: 4,
     shotsMissed: 1034,
     kdRatio: 1.76,
     divisionXpInfantry: 0,
     divisionXpArmored: 0,
     divisionXpAirborne: 0,
     avgSpeed: 706.1992034912109,
     avgKillDistance: 1853.9194030761719,
     timePlayed: 3564.75,
     matchesPlayed: 6,
     divisionXpNone: 0,
     shotsFired: 1454 } }
```

## Get Leaderboards

```
codAPI.getLeaderboards(options, function(leaderboards){
    console.log(leaderboards);
});
```
Output:
```
{ title: 'wwii',
  platform: 'psn',
  leaderboardType: 'core',
  gameMode: 'war',
  page: 3969,
  resultsRequested: 20,
  totalPages: 288978,
  sort: null,
  columns: 
   [ 'prestige',
     'totalXp',
     'kills',
     'deaths',
     'assists',
     'score',
     'timePlayed' ],
  entries: 
   [ { rank: 79361,
       username: 'itsESPALDINHO79',
       updateTime: 294760,
       rating: 5972,
       values: [Object] },
     { rank: 79380,
       username: 'Consisttt',
       updateTime: 7900,
       rating: 5972,
       values: [Object] } ] }
```

## License
This project is licensed under the MIT License
