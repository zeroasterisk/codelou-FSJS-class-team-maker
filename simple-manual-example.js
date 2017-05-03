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
 * In this variation, I'm not using packages, creating tools myself
 * - shuffle to randomize the array of students
 * - chunk to split the array into chunks/teams (worse than index.js because last team is not even)
 */
var config = require('./config.js');

/**
 * we want to split up the array into groups of size <chunksize>
 * add a new prototype to all arrays in javascript
 */
Array.prototype.chunk = function (groupsize) {
  var sets = [];
  var chunks = this.length / groupsize;
  for (var i = 0, j = 0; i < chunks; i++, j += groupsize) {
    sets[i] = this.slice(j, j + groupsize);
  }
  return sets;
};

/**
 * we want to randomize all parts of an array (shuffle items)
 * add a new prototype to all arrays in javascript
 * MUTATES array & returns it
 */
Array.prototype.shuffle = function(){
  var counter = this.length, temp, index;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = (Math.random() * counter--) | 0;
    // And swap the last element with it
    temp = this[counter];
    this[counter] = this[index];
    this[index] = temp;
  }
  // return this, so we can chain
  return this;
};

// for each class - split students into teams
config.classes.forEach(function(classConfig, classIndex) {
  console.log("------------------------------");
  console.log("class #" + (classIndex + 1) + ' '  + classConfig.name);
  console.log("------------------------------");
  classConfig.students.shuffle().chunk(config.teamSize).forEach(function(team, index) {
    console.log("  team #" + (index + 1));
    team.forEach(function(name) {
      console.log("    " + name);
    });
  });
  console.log("");
});
