const axios = require('axios');

const COD_API_ENDPOINT = 'https://my.callofduty.com/api/papi-client';

// API Helper
const getDataFromAPI = uri =>
    axios.get(uri)
    .then(({ data }) => {
        const { status, data: error } = data;
        if (status !== 'success') {
            throw new Error(`cod-api request failed: ${error.message}`);
        }
        return data;
    });

// API Methods
const getLeaderboards = ({ title, platform, time, type, mode, username }) => {
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

const getProfile = ({ title, platform, username }) => {
    const profileEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    const uri = profileEndpoint +
                `/title/${title}` +
                `/platform/${platform}` +
                `/gamer/${username}` +
                `/profile`;
    return getDataFromAPI(uri);
};

const getRecentMatches = ({ title, platform, username, days }) => {
    const recentMatchesEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    const uri = recentMatchesEndpoint +
                `/title/${title}` +
                `/platform/${platform}` +
                `/gamer/${username}` +
                `/matches/days/${days}`;
    return getDataFromAPI(uri);
};

const getRecentSummary = ({ title, platform, username, days }) => {
    const recentSummaryEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    const uri = recentSummaryEndpoint +
                `/title/${title}` +
                `/platform/${platform}` +
                `/gamer/${username}` +
                `/matches/days/${days}`;
    return getDataFromAPI(uri);
};


module.exports = {
    getLeaderboards,
    getProfile,
    getRecentMatches,
    getRecentSummary,
}