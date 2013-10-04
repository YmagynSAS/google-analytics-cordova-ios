var cordova = window.cordova || window.Cordova;
var exec = require('cordova/exec');

if (!window.GA) {
	window.GA = {
		trackerWithTrackingId: function(id) {
			exec(null, null, "GoogleAnalyticsPlugin", "trackerWithTrackingId", [id]);
			console.log("trackerWithTrackingId Initialized");
		},
		trackView: function(pageUri) {
			exec(null, null, "GoogleAnalyticsPlugin", "trackView", [pageUri]);
			console.log("trackView Initialized");
		},
		trackEventWithCategory: function(category,action,label,value) {
			var options = {
				category:category,
				action:action,
				label:label,
				value:value
			};
			exec(null, null, "GoogleAnalyticsPlugin", "trackEventWithCategory", [options]);
		},
		hitDispatched: function(hitString) {
			//console.log("hitDispatched :: " + hitString);
			//exec(null, null, "GoogleAnalyticsPlugin", "hitString", [hitString]);
		},
		trackerDispatchDidComplete: function(count) {
			//console.log("trackerDispatchDidComplete :: " + count);
		}
	};
}
