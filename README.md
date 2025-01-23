# Type Mismatch Error in TypeScript

This repository demonstrates a common type mismatch error in TypeScript and shows how to fix it.

## Bug Description
The `greeter` function in `bug.ts` is expecting a single string argument, but it is called with an array of strings in the example. This causes a compilation error. 

## Bug Solution
The `bugSolution.ts` file shows two ways to resolve this error:

1.  Modify the function signature to accept an array of strings.
2. Modify the way the function is called so that it is passed the correct argument.