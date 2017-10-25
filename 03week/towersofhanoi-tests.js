'use strict'

//Must have 3 towers, each tower will be a separate object
//each object can have a maximum of four values in an array
//the values must be largest to smallest
//each move must maintain the largest to smallest value in each array

if (typeof describe === 'function') {

//TEST 1
//it should be able to move a block, if I ran towersOfHanoi('a', 'b', 'c'), the stacks would look like
  //{a: [4,3], b: [1], c:[2]}

  describe('#towersOfHanoi()', () => {
    it('should move a block', () => {
      assert.deepEqual(stacks, {a: [4,3], b: [1], c:[2]});
    });

//TEST 2
//it should be able to move a block, if I ran towersOfHanoi('a', 'b', 'c'), the stacks would look like
  //{a: [4,3], b: [], c:[2, 1]}

  describe('#towersOfHanoi()', () => {
    it('should move a block', () => {
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
