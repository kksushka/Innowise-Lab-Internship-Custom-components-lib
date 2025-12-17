# Task

[Innowise Lab Internship: Custom-components-lib](https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view)

The essence of the project is to develop a custom React component library and publish it as an NPM package that can be installed and used in other React applications.

## Technologies used

- webpack
- react
- typescript
- eslint, prettier, husky
- jest, react testing library
- storybook


## How to run the app

# Clone this repository
git clone https://github.com/kksushka/Innowise-Lab-Internship-Custom-components-lib.git

# Install dependencies
npm install

## How to use the library

1. Create a react app (18+ version)

2. Install the library

npm i @kksushka/custom-lib-innowise

## Example of using a component from the library

```tsx
import React from "react";
import { Button } from "@kksushka/custom-lib-innowise";

export const App = () => {
  return (
    <Button variant="contained" size="small">
      Click me
    </Button>
  );
};

