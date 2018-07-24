var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personalityInsights = new PersonalityInsightsV3({
  version_date: '2017-10-13',
  username: '97c7abc5-a460-463e-97bf-ee2beb4bfb0e',
  password: 'nDa5kv6VmMnI'
});

var profileParams = {
  // Get the content from the JSON file.
  content: require('./input.json'),
  content_type: 'application/json',
  consumption_preferences: true,
  raw_scores: true
};

personalityInsights.profile(profileParams, function(error, profile) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(profile, null, 2));
  }
});