#import "GoogleAnalyticsPlugin.h"
// Dispatch period in seconds
static const NSInteger kGANDispatchPeriodSec = 2;
@implementation GoogleAnalyticsPlugin
- (void) trackerWithTrackingId:(CDVInvokedUrlCommand*)command
{
    NSString* accountId = [command argumentAtIndex:0];

    [GAI sharedInstance].trackUncaughtExceptions = YES;
    [GAI sharedInstance].dispatchInterval = 20;
    [GAI sharedInstance].debug = YES;
    id<GAITracker> tracker = [[GAI sharedInstance] trackerWithTrackingId:accountId];
}

- (void) trackEventWithCategory:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSMutableDictionary* options = (NSMutableDictionary*)[command argumentAtIndex:0];
    NSString* category = [options valueForKey:@"category"];
    NSString* action = [options valueForKey:@"action"];
    NSString* label = [options valueForKey:@"label"];
    NSNumber* value = [options valueForKey:@"value"];
    id<GAITracker> tracker = [[GAI sharedInstance] defaultTracker];
    
    if (![tracker sendEventWithCategory:@"MyFirstScreen"
                        withAction:@"ButtonPress"
                         withLabel:@"ButtonOne"
                         withValue:nil]) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"An error occured."];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    }
    NSLog(@"GoogleAnalyticsPlugin.trackEvent::%@, %@, %@, %@",category,action,label,value);
}

- (void) trackView:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* pageUri = [command argumentAtIndex:0];
    id<GAITracker> tracker = [[GAI sharedInstance] defaultTracker];

    if (![tracker sendView:pageUri]) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"An error occured."];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
@end