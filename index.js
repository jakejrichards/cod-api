"use strict";

var request = require("request");

exports.getProfile = function(options, callback) {
    var uri = "https://my.callofduty.com/api/papi-client/crm/cod/v2/title/"+options.title+"/platform/"+options.platform+"/gamer/"+options.username+"/profile/";
    request.get(uri, function(error, response, body){
        var obj = JSON.parse(body);
        if(!error){
            if(obj.status === "success"){
                callback(obj.data);
            } else {
                console.log("Error: " + obj.data.message);
            }
        } else {
            console.log("Error: " + error);
        }
    });
};

exports.getRecentMatches = function(options, callback) {
    var uri = "https://my.callofduty.com/api/papi-client/crm/cod/v2/title/"+options.title+"/platform/"+options.platform+"/gamer/"+options.username+"/matches/days/"+options.days;
    request.get(uri, function(error, response, body){
        var obj = JSON.parse(body);
        if(!error){
            if(obj.status === "success"){
                callback(obj.data.matches);
            } else {
                console.log("Error: " + obj.data.message);
            }
        } else {
            console.log("Error: " + error);
        }
    });
};

exports.getRecentSummary = function(options, callback) {
    var uri = "https://my.callofduty.com/api/papi-client/crm/cod/v2/title/"+options.title+"/platform/"+options.platform+"/gamer/"+options.username+"/matches/days/"+options.days;
    request.get(uri, function(error, response, body){
        var obj = JSON.parse(body);
        if(!error){
            if(obj.status === "success"){
                callback(obj.data.summary);
            } else {
                console.log("Error: " + obj.data.message);
            }
        } else {
            console.log("Error: " + error);
        }
    });
};

exports.getLeaderboards = function(options, callback) {
    var uri = "https://my.callofduty.com/api/papi-client/leaderboards/v2/title/"+options.title+"/platform/"+options.platform+"/time/"+options.time+"/type/"+options.type+"/mode/"+options.mode+"/gamer/"+options.username;
    request.get(uri, function(error, response, body){
        var obj = JSON.parse(body);
        if(!error){
            if(obj.status === "success"){
                callback(obj.data);
            } else {
                console.log("Error: " + obj.data.message);
            }
        } else {
            console.log("Error: " + error);
        }
    });
};