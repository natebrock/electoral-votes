'use strict'
const fs = require('fs');
const evdata = require('./evdata.json');
let states = [];

 let ev = function () {};

 function toArray(testVar) {
  if (Array.isArray(testVar)) {
    return testVar;
  } else if (typeof testVar === 'undefined') {
    return [];
  } else {
    return testVar.split();
  }
}

ev.prototype.byYear = function (year, data = evdata) {
  data.map(function (state) {
    let period = state.votes.filter(p => p.year === year )

    if(period.length > 0) {
      states.push({name: state.name, code: state.code, votes: [{year: period[0].year, votes: period[0].votes}]})
    }

  });
    return states
}

ev.prototype.byState = function (state, data = evdata) {
  state = toArray(state);
  let result = data.filter(s => state.indexOf(s.name) != -1);
  return result;
}

module.exports = new ev();
