# Momentum

# Code Practices
## CSS
* use SASS/SCSS, the scss flavor, guide [here](https://sass-lang.com/guide)
* use BEM for CSS classes, more info [here](http://getbem.com/)
* styles for each component should be in their own self-contained styles folder, `Component/styles/Component.scss`
* constants like colors and heights that need to be known elsewhere should be in `src/styles/constants.scss`


UPDATE
* we are used styled components now, more info [here](https://www.styled-components.com/)
* some components / routes still have SCSS, those will be updated later if we have time
* moving forward, used styled components and put them in the same file as the view

## React
https://reactjs.org/docs/hello-world.html
* components live in `src/Components`, create yours in there and follow the examples of the ones already in there 
* components should have their presentational portions in `Component/view/Component.js`
  * `Component/index.js` will act as the container component, more info [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* import components by using `import ComponentName from 'components/ComponentName';` because `index.js` will automatically be resolved as the imported file

### React Router
https://reacttraining.com/react-router/web/guides/quick-start
* `src/routes/index.js` is the entry point of the application, so the routes are defined here as well
* `routes/pages` is where main content pages should go

### Redux
https://redux.js.org/
* look at the `index.js` of the components and the `src/redux` folder to get a grasp
* follow the tutorial anyway, though

# Requirements
Download Homebrew
```bash
brew install node
npm -v # want version 6.4.1
node -v # want version 10.10.0
brew install yarn
yarn -v # want 1.9.4
```

You can also use `nvm`. We should probably use it, but for now I'll keep the instructions as is.

# Getting Started
To install the required node modules, run
```bash
cd momentum
yarn
```

Then run `yarn start` to start the web-app at `localhost:3000`

## Frequently Used Commands
```bash
# equivalent of npm install, installs the packages
yarn
# equivalent of npm install --save <packageName>
yarn add <packageName>
# look at the scripts object in package.json and the keys are the scripts
yarn <scriptName>
# e.g.
yarn start # starts the web-app
yarn lint # runs linter
yarn fix # fixes linter errors
```

Don't add external packages without running them through the team.

## Recommendations
Download Visual Studio Code with these extensions:
* ESLint
* EditorConfig for VSCode
* Babel ES6/ES7
* Material Icon Theme (this is just for aesthetics)

Have the console open on the same screen as the project. `ctrl+backtick` or `View -> Terminal`
