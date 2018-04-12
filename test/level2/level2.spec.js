const fs = require('fs');
const path = require('path');
const test = require('ava');
const isBalanced = require('../../is-balanced');

const fileInput = fs.readFileSync(path.resolve(__dirname, 'input'), 'utf8');
const linesInput = fileInput.split('\n');
const fileExpected = fs.readFileSync(path.resolve(__dirname, 'expected'), 'utf8');
const linesExpected = fileExpected.split('\n').map((str) => str === 'true');

linesInput.forEach((line, i) => {
  if (line.length > 0) {
    test(`Test ${i + 1}`, (t) => {
      t.is(isBalanced(line), linesExpected[i]);
    });
  }
});
