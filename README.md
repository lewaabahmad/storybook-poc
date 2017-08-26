# Developing React Components in Isolation

## Introduction

"React Storybook is a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively. [It] runs outside of your app. So you can develop UI components in isolation without worrying about app specific dependencies and requirements."
- https://storybook.js.org/basics/introduction/

React Storybook should be a proper solution to the problem of developing React components in isolation and passing props based on ENV. Components created in this development environment can be bundled as modules and linked after completion.

## How to set up a Storybook

1 - Intall React and Storybook:

```
npm i -g @storybook/cli
npm i --save react react-dom
npm i --save-dev @storybook/react
getstorybook
```

2 - Add Script in package.json:

```
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
```

3 - Create the config file in .storybook/config.js (to match the script in Step 2) - see the file in this repo for an example. The linked file should refer to proper React components or you can just use static jsx to start.

4 - Run the Storybook (the hot-reloading dev server will run on port 9001 by default)

```
npm run storybook
```

Notes: 

The official guide for using Storybook with React can be found here (this requires customization):
```
https://storybook.js.org/basics/guide-react/ 
```

"Storybook has its own Webpack setup and a dev server. Webpack setup is very similar to Create React App, but allows you to configure as you want."

## How to use this Storybook for creating isolate React Components

1 - Create a Story in ./stories/

2 - Link the story in ./.storybook/config.js

3 - Create a Component in ./components/ and import it into the story

3 - Run storybook

4 - visit http://localhost:9001/ to see the interface for component dev.

## Potential Questions:

- Can we import a pattern library like Pure.css? 

Yes. In fact, it's already linked in .storybook/preview-headers.html as [per the docs](https://storybook.js.org/configurations/add-custom-head-tags/)

- Does Storybook package components into modules? 

No. It only facilatates their rendering in a way that makes it very easy to isolate their different state permutations in a very easy to grasp UI.

## Pending Questions

- Does this address the needs of MailCharts? If not, what is missing?

- Does this shed light on the question of development process?
