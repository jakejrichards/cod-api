const { BO4 } = require('../dist/index');

const username = 'Consisttt'; // username
const platform = 'psn'; // psn | xbl | battle

// Retrieve Raw Responses

BO4.getRawMultiplayerStats(username, platform)
    .then(raw => {
        console.log(`${username} (${platform}) is prestige ${raw.data.mp.prestige} level ${raw.data.mp.level} in Black Ops 4 Multiplayer`);
    });

BO4.getRawBlackoutStats(username, platform)
    .then(raw => {
        console.log(`${username} (${platform}) is level ${raw.data.mp.level} in Black Ops 4 Blackout`);
    });

BO4.getRawZombiesStats(username, platform)
    .then(raw => {
        console.log(`${username} (${platform}) is level ${raw.data.mp.level} in Black Ops 4 Zombies`);
    });

// Specific Methods

BO4.getLifetimeMultiplayerStats(username, platform)
    .then(data => {
        console.log(`${username} (${platform}) has ${data.all.kills} total kill(s) in Black Ops 4 Multiplayer`);
    });

BO4.getWeeklyMultiplayerStats(username, platform)
    .then(data => {
        console.log(`${username} (${platform}) has ${data.all.wins} win(s) this week in Black Ops 4 Multiplayer`);
    });

BO4.getOverallZombiesStats(username, platform)
    .then(data => {
        console.log(`${username} (${platform}) has ${data.kills} total kill(s) in Black Ops 4 Zombies`);
    });

BO4.getOverallBlackoutStats(username, platform)
    .then(data => {
        console.log(`${username} (${platform}) has ${data.wins} total win(s) in Black Ops 4 Blackout`);
    });

// Not yet supported methods
// BO4.getSoloBlackoutStats
// BO4.getDuoBlackoutStats
// BO4.getQuadBlackoutStats
