# cod-api
## A thin Call of Duty API wrapper written in TypeScript
_Not licensed by or affiliated with Activision or Call of Duty_

* Full Black Ops 4 Support - blackout, mp, zombies
* Get profile information - prestige, rank, xp, and more...
* Get recent matches and stats - map, mode, win/loss, kills, deaths, SPM, K/D Ratio, and more...
* Get leaderboard information - weekly, monthly, alltime, for all game modes

### Installing

You can install via the npm package manager

```
npm i cod-api
```

Or clone the repository and install dependencies
```
git clone https://github.com/jakejrichards/cod-api.git
```

# Black Ops 4

```
import { BO4 } from 'cod-api'

const username = 'Consisttt'; // username
const platform = 'psn'; // psn | xbl | battle

// Retrieve Raw Responses

BO4.getRawMultiplayerStats(username, platform)
    .then(multiplayerStats => {
        
    });

BO4.getRawBlackoutStats(username, platform)
    .then(blackoutStats => {
    
    });

BO4.getRawZombiesStats(username, platform)
    .then(zombiesStats => {
       
    });

const start = new Date(/*start time*/);
const end = new Date(/*end time*/);

BO4.getRawMultiplayerMatchesStats({ username, platform, start, end })
    .then(matchesStats => {
        
    });

BO4.getRawZombiesMatchesStats({ username, platform, start, end })
    .then(matchesStats => {
        
    });

BO4.getRawBlackoutMatchesStats({ username, platform, start, end })
    .then(matchesStats => {
        
    });

// Specific Methods

BO4.getLifetimeMultiplayerStats(username, platform)
    .then(lifetime => {
        const totalKills = data.all.kills;
    });

BO4.getWeeklyMultiplayerStats(username, platform)
    .then(weekly => {
        const weeklyWins = data.all.wins;
    });

BO4.getOverallZombiesStats(username, platform)
    .then(data => {
        const totalKills = data.kills;
    });

BO4.getOverallBlackoutStats(username, platform)
    .then(data => {
        const blackoutWins = data.wins;
    });

BO4.getMultiplayerMatchesStats({ username, platform, start, end })
    .then(matches => {
        const [ match ] = matches;
    })

BO4.getBlackoutMatchesStats({ username, platform, start, end })
    .then(matches => {
        const [ match ] = matches;
    })

BO4.getZombiesMatchesStats({ username, platform, start, end })
    .then(matches => {
        const [ match ] = matches;
    })

```

_These endpoints are not yet populated with data on the official call of duty api:_
* getSoloBlackoutStats
* getDuoBlackoutStats
* getQuadBlackoutStats

# Legacy COD Titles
### Methods for titles released before Black Ops 4
## Get Profile

```
import { LegacyCOD } from 'cod-api';

LegacyCOD.getProfile({ title, platform, username })
    .then(response => {
        // Do something...
        console.log(response);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });
```
Sample Output:

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
import { LegacyCOD } from 'cod-api';

LegacyCOD.getRecentMatches({ title, platform, username, days })
    .then(response => {
        // Do something...
        console.log(response);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });
```
Sample Output:
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
    loadouts: [Object]
    },
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
    deaths: 0
    }
}
]
```

## Get Summary

```
import { LegacyCOD } from 'cod-api';

LegacyCOD.getRecentSummary({ title, platform, username, days })
    .then(response => {
        // Do something...
        console.log(response);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });
```
Sample Output:
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
    shotsFired: 3938
}
}
```

## Get Leaderboards

```
import { LegacyCOD } from 'cod-api';

LegacyCOD.getLeaderboards({ title, platform, time, type, mode, username })
    .then(response => {
        // Do something...
        console.log(response);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });
```
Sample Output:
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
