# Balanced Brackets [HackerRank](https://www.hackerrank.com/challenges/balanced-brackets/problem)

## Problem

A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:

- It contains no unmatched brackets.

- The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return `true`; otherwise, return `false`.

## Level 1

In this level, you will only need check the strings that have only one root element for each pair; you will not have more than two pairs inside the same pair (e.g. `({}[])`).

Examples of strings you will recieve:
- Valid: `{{}}` and `(([{[[{}]]}]))`
- Not valid: `{{[}}` and `(([{[[{)}]]}]))`

Run `npm run level1` to check this level

## Level 2

In this level you will have any kind of bracket combination could be passed.

Examples of strings you will recieve:
- Valid: `{{}[]}` and `(([{[[{}]][{}{[]}()]}]))`
- Not valid: `{{[}][]}` and `(([{[[{)}][{]({)}]}]))`

Run `npm run level2` to check this level

## Level 3 (Bonus Track)

In this level, you will need to create a prepocessor to validate any javascript code's brackets parity and, as same as the previous levels, return `true` when the brackets are balanced and `false` otherwise.
Note: The code provided in the level check will not have any comments.

Valid code:
```
(function test(valid) {
  if(valid) {
    return ((1 + 2) > (true || false));
  }
  return [1, 2, 3].filter((i) => {return (i > 1);});
})(true);
```

Not valid code:
```
(function test(valid) {
  if(valid) {
    return ((1 + 2)) > (true || false));
  return [1, 2, 3].filter((i) => {return (i > 1)];});
}){(true);
```

Run `npm run level3` to check this level
