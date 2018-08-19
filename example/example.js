const { getLeaderboards, getProfile, getRecentMatches, getRecentSummary } = require('../index'); // require('cod-api');

const title = "wwii"; // bo3, iw, wwii
const platform = "psn"; // psn, xbl, steam
const username = "Consisttt"; // username
const days = 7; // amount of days (required for recent matches & summary),
const type = "core"; // core, hc, arena
const time = "monthly"; // alltime, monthly, weekly
const mode = "war"; // career, war (Team Deathmatch), dm (Free-For-All), conf (Kill Confirmed), ctf (Capture The Flag), sd (Search & Destroy), dom (Domination), ball (Gridiron), hp (Hardpoint), 1v1, raid (War)

getProfile({ title, platform, username })
    .then(response => {
        // Do something...
        console.log(response);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });

getRecentMatches({ title, platform, username, days })
    .then(response => {
        // Do something...
        console.log(response);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });

getRecentSummary({ title, platform, username, days })
    .then(response => {
        // Do something...
        console.log(response);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });

getLeaderboards({ title, platform, time, type, mode, username })
    .then(response => {
        // Do something...
        console.log(response);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });
