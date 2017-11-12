'use strict'
const fs = require('fs');
const evdata = require('./evdata.json');
let states = [];



 function toArray(testVar) {
  if (Array.isArray(testVar)) {
    return testVar;
  } else if (typeof testVar === 'undefined') {
    return [];
  } else {
    return testVar.split();
  }
}

let byYear = function (year, data = evdata) {
  data.map(function (state) {
    let period = state.votes.filter(p => p.year === year )

    if(period.length > 0) {
      states.push({name: state.name, code: state.code, votes: [{year: period[0].year, votes: period[0].votes}]})
    }
  });
    return states
};

let byState = function (state, data = evdata) {
  state = toArray(state);
  let result = data.filter(s => state.indexOf(s.name) != -1);
  if(result.length === 1) {
    return result[0]
  } else {
  return result;
  }
};


module.exports = function () {
  return evdata;
}
module.exports.byYear =  byYear;
module.exports.byState = byState;
