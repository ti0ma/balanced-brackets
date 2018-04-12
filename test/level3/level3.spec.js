const fs = require('fs');
const path = require('path');
const test = require('ava');
const checkCode = require('./level3');

test('Simple code is balanced', (t) => {
  const file = fs.readFileSync(path.resolve(__dirname, 'file1'), 'utf8');

  t.true(checkCode(file));
});

test('Simple code is not balanced', (t) => {
  const file = fs.readFileSync(path.resolve(__dirname, 'file2'), 'utf8');

  t.false(checkCode(file));
});

test('Angular code is balanced', (t) => {
  const file = fs.readFileSync(path.resolve(__dirname, 'file3'), 'utf8');

  t.true(checkCode(file));
});

test('Angular code is not balanced', (t) => {
  const file = fs.readFileSync(path.resolve(__dirname, 'file4'), 'utf8');

  t.false(checkCode(file));
});
