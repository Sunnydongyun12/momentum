# Momentum

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
