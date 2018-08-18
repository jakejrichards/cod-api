const request = require('request');

const getLeaderboards = (options, callback) => {
    const uri = `https://my.callofduty.com/api/papi-client/leaderboards/v2/title/${options.title}/platform/${options.platform}/time/${options.time}/type/${options.type}/mode/${options.mode}/gamer/${options.username}`;
    request.get(uri, (error, response, body) => {
        const obj = JSON.parse(body);
        if (!error){
            if (obj.status === "success"){
                callback(obj.data);
            } else {
                console.log("Error: " + obj.data.message);
            }
        } else {
            console.log("Error: " + error);
        }
    });
};

const getProfile = (options, callback) => {
    const uri = `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/${options.title}/platform/${options.platform}/gamer/${options.username}/profile/`;
    request.get(uri, (error, response, body) => {
        const obj = JSON.parse(body);
        if (!error){
            if (obj.status === "success"){
                callback(obj.data);
            } else {
                console.log("Error: " + obj.data.message);
            }
        } else {
            console.log("Error: " + error);
        }
    });
};

const getRecentMatches = (options, callback) => {
    const uri = `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/${options.title}/platform/${options.platform}/gamer/${options.username}/matches/days/${options.days}`;
    request.get(uri, (error, response, body) => {
        const obj = JSON.parse(body);
        if (!error){
            if (obj.status === "success"){
                callback(obj.data.matches);
            } else {
                console.log("Error: " + obj.data.message);
            }
        } else {
            console.log("Error: " + error);
        }
    });
};

const getRecentSummary = (options, callback) => {
    const uri = `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/${options.title}/platform/${options.platform}/gamer/${options.username}/matches/days/${options.days}`;
    request.get(uri, (error, response, body) => {
        const obj = JSON.parse(body);
        if (!error){
            if (obj.status === "success"){
                callback(obj.data.summary);
            } else {
                console.log("Error: " + obj.data.message);
            }
        } else {
            console.log("Error: " + error);
        }
    });
};


module.exports = {
    getLeaderboards,
    getProfile,
    getRecentMatches,
    getRecentSummary,
}