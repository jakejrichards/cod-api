const { getProfile, getRecentMatches, getRecentSummary, getLeaderboards } = require('../index'); // require('cod-api');

var options = {
    title: "wwii", // bo3, iw, wwii
    platform: "psn", // psn, xbl, steam
    username: "Consisttt", // username
    days: 1, // amount of days (required for recent matches & summary),
    type: "core", // core, hc, arena
    time: "monthly", // alltime, monthly, weekly
    mode: "war" // career, war (Team Deathmatch), dm (Free-For-All), conf (Kill Confirmed), ctf (Capture The Flag), sd (Search & Destroy), dom (Domination), ball (Gridiron), hp (Hardpoint), 1v1, raid (War)
};

getProfile(options, profile => {
    console.log(profile);
});

getRecentMatches(options, matches => {
    console.log(matches);
});

getRecentSummary(options, summary => {
    console.log(summary);
});

getLeaderboards(options, leaderboards => {
    console.log(leaderboards);
});


