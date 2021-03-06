var cordova = window.cordova || window.Cordova;
var exec = require('cordova/exec');

var GoogleAnalytics = function () {}

GoogleAnalytics.trackerWithTrackingId =  function(id, success, error) {
	if (typeof success === "function" && typeof error === "function")
		exec(success, error, "GoogleAnalyticsPlugin", "trackerWithTrackingId", [id]);
	else {
		exec(function() { console.log("trackerWithTrackingId Initialized"); },
			function() { console.log("trackerWithTrackingId isn't Initialized"); }, "GoogleAnalyticsPlugin", "trackerWithTrackingId", [id]);
	}
}

GoogleAnalytics.trackView = function(pageUri, success, error) {
	if (typeof success === "function" && typeof error === "function")
		exec(success, error, "GoogleAnalyticsPlugin", "trackView", [pageUri]);
	else {
		exec(function() { console.log("trackView Initialized"); },
			function() { console.log("trackView isn't Initialized"); }, "GoogleAnalyticsPlugin", "trackView", [pageUri]);
	}
}

/*
	category: string
	action: string
	label: string
	value: integer
*/
GoogleAnalytics.trackEventWithCategory = function(category, action, label, value, success, error) {
	var options = {
		category:category,
		action:action,
		label:label,
		value:value
	};

	if (typeof success === "function" && typeof error === "function")
		exec(success, error, "GoogleAnalyticsPlugin", "trackEventWithCategory", [options]);
	else {
		exec(function() { console.log("trackEventWithCategory Initialized"); },
			function() { console.log("trackEventWithCategory isn't Initialized"); }, "GoogleAnalyticsPlugin", "trackEventWithCategory", [options]);
	}
}

module.exports = GoogleAnalytics;
