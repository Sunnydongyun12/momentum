# Momentum

# Code Practices
### CSS
* we use SASS/SCSS 
  * the scss flavor.
* we use BEM for our CSS classes
* styles for each component should be in their own self-contained styles folder
* constants like colors and heights that need to be known elsewhere should be in `./src/styles/constants.scss`

### React
* components will have a `view` for their presentational part.
  * their `index.js` will be the "Container" component, which will wrap it in a router or redux HOC
* the main content pages will be in `./routes/pages`
* import components by using `import componentName from 'components/{componentName}';` because the `index.js` will automatically be used as the imported file

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
