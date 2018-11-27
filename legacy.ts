import { COD_API_ENDPOINT, getDataFromAPI } from './utils';

export type GameMode =
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

export type GameType =
    'arena' | // Ranked Play
    'core' | // Core
    'hc'; // Hardcore

export type LeaderboardDuration =
    'alltime' |
    'monthly' |
    'weekly';

export type Platform =
    'psn' | // Playstation Network
    'steam' | // Steam
    'xbl'; // Xbox Live

export type Title =
    'bo3' | // Black Ops 3
    'iw' | // Infinite Warfare
    'wwii'; // World War II

export interface BaseOptions {
    platform: Platform;
    title: Title;
    username: string;
}

export interface RecentOptions extends BaseOptions {
    days: number;
}

export interface LeaderboardOptions extends BaseOptions {
    mode: GameMode;
    time: LeaderboardDuration;
    type: GameType
}

// Legacy API Methods
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
