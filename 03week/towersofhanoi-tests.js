'use strict'

//Must have 3 towers, each tower will be a separate object
//each object can have a maximum of four values in an array
//the values must be largest to smallest
//each move must maintain the largest to smallest value in each array

if (typeof describe === 'function') {

//TEST 1
//it should be able to move a block, if I ran towersOfHanoi('a', 'c'), the stacks would look like
  //{a: [4,3], b: [1], c:[2]}

  describe('#towersOfHanoi()', () => {
    it('should move a block', () => {
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, {a: [4,3, 2], b: [0], c:[1]});
    });

//TEST 2
//it should be able to move a block, if I ran towersOfHanoi('a', 'b', 'c'), the stacks would look like
  //{a: [4,3], b: [], c:[2, 1]}

  describe('#towersOfHanoi()', () => {
    it('should move a block', () => {
      towersOfHanoi('a', 'b', 'c');
      assert.deepEqual(stacks, {a: [4,3], b: [], c:[2, 1]});
    });


//TEST 3
//it should detect a win, if I ran towersOfHanoi('a', 'b', 'c'), the stacks would look like
  //{a: [], b: [], c:[4, 3, 2, 1]}

  describe('#towersOfHanoi()', () => {
    it('should detect a win', () => {
      stacks = {a: [], b: [], c:[4, 3, 2, 1]};
    }
  });

//First Setting - {a: [4,3, 2, 1], b: [], c:[]},
//Move 1.1 -  {a: [4,3, 2], b: [1], c:[]},
//Move 1.2 -  {a: [4,3, 2], b: [], c:[1]},
//Move 2.1 -  {a: [4,3, 2], b: [1], c:[2]},
//Move 2.2 -  {a: [4,3], b: [2], c:[1]},
//Move 3.1 -  {a: [4,3], b: [], c:[2, 1]},
//Move 3.2 -  {a: [4,3], b: [2, 1], c:[]},
//Move 4.1 -  {a: [4], b: [3], c:[2, 1]},
//Move 4.2 -  {a: [4], b: [2, 1], c:[3]},
//Move 5.1 -  {a: [4, 1], b: [3], c:[2]},
//Move 5.2 -  {a: [4, 1], b: [2], c:[3]},
//Move 6.1 -  {a: [4, 1], b: [3, 2], c:[]},
//Move 6.2 -  {a: [4, 1], b: [], c:[3, 2]},
//Move 7.1 -  {a: [4], b: [3, 2, 1], c:[]},
//Move 7.2 -  {a: [4], b: [], c:[3, 2, 1]},
