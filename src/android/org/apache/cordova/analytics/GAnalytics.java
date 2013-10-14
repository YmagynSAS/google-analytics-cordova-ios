package org.apache.cordova.analytics;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONObject;

import com.google.analytics.tracking.android.GAServiceManager;
import com.google.analytics.tracking.android.GoogleAnalytics;
import com.google.analytics.tracking.android.Tracker;

public class GAnalytics extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callback) {
		GoogleAnalytics ga = GoogleAnalytics.getInstance(cordova.getActivity());
		Tracker tracker = ga.getDefaultTracker(); 

		if (action.equals("trackerWithTrackingId")) {
			try {
				tracker = ga.getTracker(args.getString(0));
				GAServiceManager.getInstance().setDispatchPeriod(20);
				ga.setDefaultTracker(tracker);
				callback.success("trackerWithTrackingId - id = " + args.getString(0) + "; interval = " + "20" + " seconds");
				return true;
			} catch (final Exception e) {
				callback.error(e.getMessage());
			}
		} else if (action.equals("exitGA")) {
			try {
				GAServiceManager.getInstance().dispatch();
				callback.success("exitGA");
				return true;
			} catch (final Exception e) {
				callback.error(e.getMessage());
			}
		} else if (action.equals("trackEventWithCategory")) {
			try {
				JSONObject l = args.getJSONObject(0);
				String gavalue = l.getString("value");
				String gaaction = l.getString("action");
				String galabel = l.getString("label");
				String gacategory = l.getString("category");
				tracker.sendEvent(gacategory, gaaction, galabel, Long.parseLong(gavalue));
				callback.success("trackEventWithCategory - category = " + gacategory + "; action = " + gaaction + "; label = " + galabel + "; value = " + gavalue);
				return true;
			} catch (final Exception e) {
				callback.error(e.getMessage());
			}
		} else if (action.equals("trackView")) {
			try {
				tracker.sendView(args.getString(0));
				callback.success("trackView - url = " + args.getString(0));
				return true;
			} catch (final Exception e) {
				callback.error(e.getMessage());
			}
		}
		return false;
	}
}