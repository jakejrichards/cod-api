const { getLeaderboards, getProfile, getRecentMatches, getRecentSummary } = require('../index'); // require('cod-api');

const title = "wwii"; // bo3, iw, wwii
const platform = "psn"; // psn, xbl, steam
const username = "Consisttt"; // username
const days = 7; // amount of days (required for recent matches & summary),
const type = "core"; // core, hc, arena
const time = "monthly"; // alltime, monthly, weekly
const mode = "war"; // career, war (Team Deathmatch), dm (Free-For-All), conf (Kill Confirmed), ctf (Capture The Flag), sd (Search & Destroy), dom (Domination), ball (Gridiron), hp (Hardpoint), 1v1, raid (War)

getProfile({ title, platform, username })
    .then(profile => {
        // Do something with the profile object
        console.log(profile);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });

getRecentMatches({ title, platform, username, days })
    .then(profile => {
        // Do something with the recent matches object
        console.log(profile);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });

getRecentSummary({ title, platform, username, days })
    .then(profile => {
        // Do something with the recent summary object
        console.log(profile);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });

getLeaderboards({ title, platform, time, type, mode, username })
    .then(profile => {
        // Do something with the leaderboards object
        console.log(profile);
    })
    .catch(err => {
        // Do something with this error
        console.log(err);
    });
