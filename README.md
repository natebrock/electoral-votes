# electoral-votes

A node.js module for retrieving a state's electoral votes for a given year.


## Installation
```js
npm install election-votes
````

## Usage
```js
const ev = require('ev');
ev();
````
Returns an array of objects for all states and all years.
### API
#### .byYear(year)
`year` integer

```js
const ev = require('ev');
ev.byYear(1788);
```
Returns a an array of objects representing each state with electoral votes for the year specified.

#### .states(state)
`state` string | array of strings
```js
const ev = require('ev');
ev.byState(['Alabama', 'District of Columbia', 'New York']);
```
Returns an object or an array of objects for each state specified.
