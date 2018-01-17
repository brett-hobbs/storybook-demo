# storybook-demo

Simple demo of Storybook (https://storybook.js.org/) with a few React components as an example for a SoCal React MeetUp (1/17/18).

I forked my https://github.com/brett-hobbs/simple-web-app repository to create this example.

To see this running visit brett-hobbs.github.com/storybook-demo

To try it out locally or fork it to start a new project try:

```
$ git clone https://github.com/brett-hobbs/storybook-demo

$ source setup.sh

$ npm install

$ npm run storybook
> node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --content-base ./
Project is running at http://localhost:8080/
...
```

ESLint and Jest Snapshot tests using Storyshots (https://storybook.js.org/testing/structural-testing/) are also enabled:

```
$ npm run test

> storybook-demo@1.0.0 test /Users/brett/repos/storybook-demo
> jest

 => Loading custom .babelrc
 PASS  src/snapshots.test.js
  Storyshots
    Alignment Toolbar
      ✓ Enabled (17ms)
      ✓ Disabled (3ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   2 passed, 2 total
Time:        4.551s
Ran all test suites.

$ npm run lint
> eslint *.js

```
