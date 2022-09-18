# Links

- [Installation Guide](#installation-guide)
- [About the app](#about-the-app)
- [About the structure](#about-the-structure)
- [Useful links](#useful-links)
- [Enjoy](#enjoy)

# Installation Guide

- This project was bootstraped with NX, a tool for building monorepos: [NX](https://nx.dev/).

- OPTIONAL: installing nx cli globally: just run
  ```bash
  npm install -g @nrwl/cli
  ```
- Clone the progect: `git@github.com:engeslamadell/robusta.git`.

- go to project folder `cd robusta`

- Install dependencies: yarn install (or npm install).

- Run dev server: `npx nx serve react-todo`.

# About the app

Todo-app is an app requested by **Robusta** during my hiring process there.

also there is an integration with vercel which triggers an external pipeline to build a new preview link with every commit, so feel free to try it.

# About the structure

- You will find a `community best practices` when it comes to structure the files and folders inside the `src` directory, there's nothing new there.
  **But** i think i like separation A LOT, so for example, at the `components folder` you will find 2 `sub-folders` one for any shared component across the entire app, and another for the components specific to a particular screen.
  
- I didn't want to use any third party package `no redux no ui-kit`, everything is a custom css styled-component and for state management i used react built in Context API


# Useful links

- Inspired by this pen to make the **animated checkbox** [here](https://codepen.io/patryklizon/pen/RZPmWK).

# Enjoy

Thanks.
