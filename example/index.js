var codAPI = require("../cod.js");

var options = {
    title: "wwii", // bo3, iw, wwii
    platform: "psn", // psn, xbl, steam
    username: "Consisttt", // username
    days: 1, // amount of days (required for recent matches & summary),
    type: "core", // core, hc, arena
    time: "monthly", // alltime, monthly, weekly
    mode: "war" // career, war (Team Deathmatch), dm (Free-For-All), conf (Kill Confirmed), ctf (Capture The Flag), sd (Search & Destroy), dom (Domination), ball (Gridiron), hp (Hardpoint), 1v1, raid (War)
};

codAPI.getProfile(options, function(profile){
    console.log(profile);
});

codAPI.getRecentMatches(options, function(matches){
    console.log(matches);
});

codAPI.getRecentSummary(options, function(summary){
    console.log(summary);
});

codAPI.getLeaderboards(options, function(leaderboards){
    console.log(leaderboards);
});


