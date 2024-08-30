# ISITECH-L2-infra-dev-grp-1

## Members

| Full Name      | Student email address             | Role            |
|----------------|-----------------------------------|-----------------|
| Alexis Crozier | <alexis.crozier@ecole-isitech.fr> | Product Owner   |
| Matéo Deport   | <mateo.deport@ecole-isitech.fr>   | Developer       |
| Clément Berard | <clement.berard@ecole-isitech.fr> | Lead Developer  |
| Ruben Crocher  | <ruben.crochet@ecole-isitech.fr>  | Developer       |

Ruben Crochet don't work in the project. Thursday, 29th August 2024, he doesn't answer to our messages, he was absent in the morning and he come back in the afternoon. We don't know why he doesn't answer to our messages and he doesn't work in the project since the beginning. You can see it in 'Contributors'.

## Note of intent

We have to create a movie list with the OMDB API. We have to display the movie list, to search a movie, to add a movie to the favorite list, to sort the movie list and to switch between dark mode and light mode.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## WatchList

### Purpose of the App

We want to provide our client the possibility to get an important movie list and to search them, add to favorite, use a dark mode and a light mode and to have the possibility to sort the movie list.

## Development guide

### Stack

We use react with typescript and Bootstrap as CSS framework.

### Launch server

Run command `npm run start`

## Our features available in our App

- [ ] Movie listing providing by OMDB API
- [ ] Input field to search movie
- [ ] Create a favoris list of movie store in the local storage
- [ ] Switch between dark mode / light mode
- [ ] Filter movie list

### Advices

We use GIT and GITHUB, some advice to use git commands efficiently :

- `git checkout -b <branch-name>` create the branch and switch on
- `git add -p` add interactively modifications to the stage
- `git push --force-with-lease` in case where you used a interactive rebase

### CONTRIBUTING

[Read this doc](./CONTRIBUTING.md)

## Results

We need some difficulties to :

- use correctly the API and his return. At first, we got the idea to display all movies but the API return an error and it wants a search query. So we decided to display only 'heroes' movies and a search bar. After, we got difficulties to got the response of th API. When we display the response in the console, we got an error. We found the solution by using the `then` method.
- We decided, after searching a movie, to press enter when we cancel the search ? Why ? Because if we ask the API for each letter, there were too many requests.
- install vitest with this error :

```shell
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error
npm error While resolving: vitest@2.0.5
npm error Found: @types/node@16.18.106
npm error node_modules/@types/node
npm error   @types/node@"*" from @jest/console@27.5.1
npm error   node_modules/@jest/console
npm error     @jest/console@"^27.5.1" from @jest/core@27.5.1
npm error     node_modules/@jest/core
npm error       @jest/core@"^27.5.1" from jest@27.5.1
npm error       node_modules/jest
npm error         peer jest@"^27.0.0 || ^28.0.0" from jest-watch-typeahead@1.1.0
npm error         node_modules/jest-watch-typeahead
npm error         1 more (react-scripts)
npm error       1 more (jest-cli)
npm error     @jest/console@"^27.5.1" from @jest/reporters@27.5.1
npm error     node_modules/@jest/reporters
npm error       @jest/reporters@"^27.5.1" from @jest/core@27.5.1
npm error       node_modules/@jest/core
npm error         @jest/core@"^27.5.1" from jest@27.5.1
npm error         node_modules/jest
npm error         1 more (jest-cli)
npm error     2 more (@jest/test-result, jest-runner)
npm error   @types/node@"*" from @jest/core@27.5.1
npm error   node_modules/@jest/core
npm error     @jest/core@"^27.5.1" from jest@27.5.1
npm error     node_modules/jest
npm error       peer jest@"^27.0.0 || ^28.0.0" from jest-watch-typeahead@1.1.0
npm error       node_modules/jest-watch-typeahead
npm error         jest-watch-typeahead@"^1.0.0" from react-scripts@5.0.1
npm error         node_modules/react-scripts
npm error       1 more (react-scripts)
npm error     @jest/core@"^27.5.1" from jest-cli@27.5.1
npm error     node_modules/jest-cli
npm error       jest-cli@"^27.5.1" from jest@27.5.1
npm error       node_modules/jest
npm error         peer jest@"^27.0.0 || ^28.0.0" from jest-watch-typeahead@1.1.0
npm error         node_modules/jest-watch-typeahead
npm error         1 more (react-scripts)
npm error   35 more (@jest/environment, @jest/fake-timers, @jest/reporters, ...)
npm error
npm error Could not resolve dependency:
npm error peerOptional @types/node@"^18.0.0 || >=20.0.0" from vitest@2.0.5
npm error node_modules/vitest
npm error   dev vitest@"*" from the root project
npm error
npm error Conflicting peer dependency: @types/node@22.5.1
npm error node_modules/@types/node
npm error   peerOptional @types/node@"^18.0.0 || >=20.0.0" from vitest@2.0.5
npm error   node_modules/vitest
npm error     dev vitest@"*" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error /home/clem/.npm/_logs/2024-08-29T07_33_20_348Z-eresolve-report.txt
npm error A complete log of this run can be found in: /home/clem/.npm/_logs/2024-08-29T07_33_20_348Z-debug-0.log
```

We understand that we don't use the latest version of nodejs. We update nodejs and it works !

### No vite
Unfortunately we have forgotten to use Vite in our project at the initialization of this one. 

So that it's difficult to use vitest to create a test stack, this is why we assume to use Jest as test stack instead. 

We apologize this mistake but as we don't have a lot of time to work on this project we take the decision to not begin from scratch again the project and adapt our stack instead.

We think the most important part of the project is to have the capability to learn of our mistake and adapt the situation to provide a functionnal project and answer to each topic that we have to implement in the project. 

We could run test with Jest as we could do with vitest.