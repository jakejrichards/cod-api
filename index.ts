type GameMode =
    '1v1' | // 1v1 Arena
    'ball' | // Gridiron
    'career' | // Career (all modes)
    'conf' | // Kill Confirmed
    'ctf' | // Capture the Flag
    'dm' | // Free-For-All
    'dom' | // Domination
    'hp' | // Hardpoint
    'sd' | // Search & Destroy
    'raid' | // War
    'war'; // Team Deathmatch

type GameType =
    'arena' | // Ranked Play
    'core' | // Core
    'hc'; // Hardcore

type LeaderboardDuration =
    'alltime' |
    'monthly' |
    'weekly';

type Platform =
    'psn' | // Playstation Network
    'steam' | // Steam
    'xbl' | // Xbox Live
    'battle'; // Battle.net (Black Ops 4)

type Title =
    'bo3' | // Black Ops 3
    'iw' | // Infinite Warfare
    'wwii' | // World War II
    'bo4'; // Black Ops 4

interface BaseOptions {
    platform: Platform;
    title: Title;
    username: string;
}

interface RecentOptions extends BaseOptions {
    days: number;
}

interface LeaderboardOptions extends BaseOptions {
    mode: GameMode;
    time: LeaderboardDuration;
    type: GameType
}

// Base Endpoint
const COD_API_ENDPOINT = 'https://my.callofduty.com/api/papi-client';

// API Helper
function getDataFromAPI(uri: string) {
    return fetch(uri)
        .then(response => response.json())
        .then(response => {
            const { status, data: error } = response;
            if (status !== 'success') {
                throw new Error(`cod-api request failed: ${error.message}`);
            }
            return response;
        });
}

// API Methods
export function getLeaderboards({ title, platform, time, type, mode, username }: LeaderboardOptions) {
    const leaderboardEndpoint = COD_API_ENDPOINT + '/leaderboards/v2';
    const uri = leaderboardEndpoint +
                `/title/${title}` +
                `/platform/${platform}` +
                `/time/${time}` +
                `/type/${type}` +
                `/mode/${mode}` +
                `/gamer/${username}`;
    return getDataFromAPI(uri);
};

export function getProfile({ title, platform, username }: BaseOptions) {
    const profileEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    const uri = profileEndpoint +
                `/title/${title}` +
                `/platform/${platform}` +
                `/gamer/${username}` +
                `/profile`;
    return getDataFromAPI(uri);
};

export function getRecentMatches({ title, platform, username, days }: RecentOptions) {
    const recentMatchesEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    const uri = recentMatchesEndpoint +
                `/title/${title}` +
                `/platform/${platform}` +
                `/gamer/${username}` +
                `/matches/days/${days}`;
    return getDataFromAPI(uri);
};

export function getRecentSummary({ title, platform, username, days }: RecentOptions) {
    const recentSummaryEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    const uri = recentSummaryEndpoint +
                `/title/${title}` +
                `/platform/${platform}` +
                `/gamer/${username}` +
                `/matches/days/${days}`;
    return getDataFromAPI(uri);
};
