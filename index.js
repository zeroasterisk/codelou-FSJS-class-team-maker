/**
 * Build a set of randomized, evenly distrubted teams
 *
 * goal team size = ~ 5 or 6
 *
 * usage:
 * download file and save as make_class_teams.js
 *
 * $ node make_class_teams.js
 *
 * it should output information to the the console...
 * BUT I am going to run and assign teams myself
 * (feel free to run this for fun)
 *
 * ----
 *
 * In this variation, I'm using some packages, to do the work for me (better tools)
 * - lodash shuffle to randomize the array of students
 * - distribute-array to evently distribute (better than my manual example)
 *
 */
var shuffle = require('lodash.shuffle');
var da = require('distribute-array');
var config = require('./config.js');

// for each class - split students into teams
config.classes.forEach(function(classConfig, classIndex) {
  console.log("------------------------------");
  console.log("class #" + (classIndex + 1) + ' '  + classConfig.name);
  console.log("------------------------------");
  var teamsCount = Math.ceil(classConfig.students.length / config.teamSize);
  da(shuffle(classConfig.students), teamsCount).forEach(function(team, index) {
    console.log("  team #" + (index + 1));
    team.forEach(function(name) {
      console.log("    " + name);
    });
  });
  console.log("");
});

