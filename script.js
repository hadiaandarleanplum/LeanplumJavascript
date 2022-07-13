// This value should be set to true only if you're developing on your server.
var isDevelopmentMode = true;

// Sample variables. This can be any JSON object.
// var variables = {
//  items: {
//    color: 'red',
//    size: 20,
//    showBadges: true
//  },
//  showAds: true
// };

// Get your App ID and Keys from https://www.leanplum.com/dashboard?#/account/apps
if (isDevelopmentMode) {
 Leanplum.setAppIdForDevelopmentMode("app_xvhLIDh3sIs71lx6yMYEW8LhhodWlFwvAUPeM4JoCSQ", "dev_nUVY7kDD4NFROS0HSBB8c1UDnRwb17tb5d1smWQI93o");
} else {
 Leanplum.setAppIdForProductionMode("app_xvhLIDh3sIs71lx6yMYEW8LhhodWlFwvAUPeM4JoCSQ", "prod_wu6BfCX0f4MY6lRgqDytTUWPxDYZOIEbS0MqZgIFKGk");
}

//Leanplum.setVariables(variables);
Leanplum.start(function(success) {
 console.log('Success: ' + success);
 //console.log('Variables', Leanplum.getVariables());

 //Set user id
 Leanplum.setUserId("hadiaJavascript");

 // Tracks view page event for a user.
Leanplum.track("View index.html page");
});

//IN APP MESSAGES
// 1. Register handler for in-app messages
Leanplum.on('showMessage', function (args) {
  var message = args.message;
  var context = args.context;
  
  // 2. Filter out unsupported message types
  if (message.__name__ !== 'Confirm') {
    return;
  }
  
  // 3. Track impression
  context.track();
  
  // 4. Show message and trigger attached actions
  //    (message needs to be customly rendered in HTML and actions can be called asynchronously)
  if (confirm(message.Message)) {
    context.runTrackedActionNamed('Accept action');
  } else {
    context.runTrackedActionNamed('Cancel action');
  }
});