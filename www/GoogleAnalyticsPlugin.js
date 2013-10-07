var cordova = window.cordova || window.Cordova;
var exec = require('cordova/exec');

var GoogleAnalytics = function () {}

GoogleAnalytics.trackerWithTrackingId =  function(id) {
	exec(null, null, "GoogleAnalyticsPlugin", "trackerWithTrackingId", [id]);
	console.log("trackerWithTrackingId Initialized");
}

GoogleAnalytics.trackView = function(pageUri) {
	exec(null, null, "GoogleAnalyticsPlugin", "trackView", [pageUri]);
	console.log("trackView Initialized");
}

GoogleAnalytics.trackEventWithCategory = function(category,action,label,value) {
	var options = {
		category:category,
		action:action,
		label:label,
		value:value
	};
	exec(null, null, "GoogleAnalyticsPlugin", "trackEventWithCategory", [options]);
}

GoogleAnalytics.hitDispatched = function(hitString) {
	//console.log("hitDispatched :: " + hitString);
	//exec(null, null, "GoogleAnalyticsPlugin", "hitString", [hitString]);
}

GoogleAnalytics.trackerDispatchDidComplete = function(count) {
	//console.log("trackerDispatchDidComplete :: " + count);
}

module.exports = GoogleAnalytics;
