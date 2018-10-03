"use strict";
exports.__esModule = true;
// Base Endpoint
var COD_API_ENDPOINT = 'https://my.callofduty.com/api/papi-client';
// API Helper
function getDataFromAPI(uri) {
    return fetch(uri)
        .then(function (response) { return response.json(); })
        .then(function (response) {
        var status = response.status, error = response.data;
        if (status !== 'success') {
            throw new Error("cod-api request failed: " + error.message);
        }
        return response;
    });
}
// API Methods
function getLeaderboards(_a) {
    var title = _a.title, platform = _a.platform, time = _a.time, type = _a.type, mode = _a.mode, username = _a.username;
    var leaderboardEndpoint = COD_API_ENDPOINT + '/leaderboards/v2';
    var uri = leaderboardEndpoint +
        ("/title/" + title) +
        ("/platform/" + platform) +
        ("/time/" + time) +
        ("/type/" + type) +
        ("/mode/" + mode) +
        ("/gamer/" + username);
    return getDataFromAPI(uri);
}
exports.getLeaderboards = getLeaderboards;
;
function getProfile(_a) {
    var title = _a.title, platform = _a.platform, username = _a.username;
    var profileEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    var uri = profileEndpoint +
        ("/title/" + title) +
        ("/platform/" + platform) +
        ("/gamer/" + username) +
        "/profile";
    return getDataFromAPI(uri);
}
exports.getProfile = getProfile;
;
function getRecentMatches(_a) {
    var title = _a.title, platform = _a.platform, username = _a.username, days = _a.days;
    var recentMatchesEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    var uri = recentMatchesEndpoint +
        ("/title/" + title) +
        ("/platform/" + platform) +
        ("/gamer/" + username) +
        ("/matches/days/" + days);
    return getDataFromAPI(uri);
}
exports.getRecentMatches = getRecentMatches;
;
function getRecentSummary(_a) {
    var title = _a.title, platform = _a.platform, username = _a.username, days = _a.days;
    var recentSummaryEndpoint = COD_API_ENDPOINT + '/crm/cod/v2';
    var uri = recentSummaryEndpoint +
        ("/title/" + title) +
        ("/platform/" + platform) +
        ("/gamer/" + username) +
        ("/matches/days/" + days);
    return getDataFromAPI(uri);
}
exports.getRecentSummary = getRecentSummary;
;
