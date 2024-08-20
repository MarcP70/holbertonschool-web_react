      Project: React intro

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/79df527164ac54981039.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240820%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240820T074647Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=03aaaca340d1662d79ce2e5a0ad80154eec9e23a967f4492ca470d2ac19cce51)

Resources
---------

**Read or watch**:

*   [React Official Website](/rltoken/0gnWMmEEl3D6hRjYRo8Chg "React Official Website")
*   [Getting started with React](/rltoken/h7pqDBTIkkMhfPnM0usttg "Getting started with React")
*   [React overview](/rltoken/2itpEHU1t42CUNoi6qcDNQ "React overview")
*   [create-react-app](/rltoken/q500Z-pp8hIkjNSAEt_itw "create-react-app")
*   [React Developer Tools](/rltoken/t4jJ1V_b5S8l8qcV808Kog "React Developer Tools")
*   [What is Babel?](/rltoken/b6sMPY8iFU-RrHaN0dVlnA "What is Babel?")
*   [Enzyme](/rltoken/tKW-u0x9XsGI-oomLTMfUg "Enzyme")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/ajL0MshJHRMRNpXl-WPJ3A "explain to anyone"), **without the help of Google**:

*   How to create a basic Javascript application using React
*   How to use the package `create-react-app` to start developing quickly with React
*   What JSX is and how to use it
*   How to use the React Developer Tools to debug your code
*   How to use Enzyme’s Shadow rendering to test your application
*   How to use React with Webpack & Babel

Requirements
------------

*   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node 12.x.x` and `npm 6.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory

Tasks
-----

### 0\. Basic application

mandatory

**Create a basic app named `dashboard` using `create-react-app` in your `task_0` directory**

You will need a favicon and the Holberton logo. Download them and add them to the `src/` directory under `dashboard/`

**Holberton Logo**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240820%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240820T074647Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=492c64a22ad579053fcad3f062640f3c729daf81386913e189b5a71d6ab297a5)

**Favicon**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2019/11/e240f8157634d33a9757.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240820%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240820T074647Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=966aa6b8778b204a39309cf4080d8352e0c6b9e44a92b686745333d3e50b295b)

**Remove the unused files:**

*   `reportWebVitals.js`
*   `index.css`
*   `App.test.js`

**in `task_0/dashboard/src/App.js`, create a function `App` that returns:**

*   a header div with a class named `App-header` containing the Holberton logo and a h1 with the text `School dashboard`
*   a body div with a class named `App-body` containing at least one paragraph with the text `Login to access the full dashboard`
*   a footer div with a class named `App-footer` containing at least one paragraph with the text `Copyright 2024 - holberton School`

**Modify the App.css to make the project looks like the following screenshot:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/7743eba00239687a6fdd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240820%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240820T074647Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=79f1d7ce4d080e127de8318dabab8976c8aa2a5375aa557ae62c1615366db3e7)

**Requirements:**

*   When running, there should not be any lint error in the console

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_0/dashboard/src/, task_0/dashboard/src/App.css, task_0/dashboard/src/App.js`

**0/6** pts

### 1\. Embedding expressions, functions

mandatory

**Using your code from the previous task, in `task_1/dashboard/src/utils.js`:**

*   Create a function named `getFullYear` that will return the current year
*   Create a function named `getFooterCopy`:
    *   It accepts one argument `isIndex`(boolean). When true, the function should return `Holberton School`. When false, the function should return `Holberton School main dashboard`
*   Modify the footer returned in `task_1/dashboard/src/App.js` to use these two functions. `isIndex` should be true

**in `task_1/dashboard/src/Notifications.js`, create a Notifications element:**

*   It should import React
*   It should export a functional component
*   The functional component should return a `div` with the class `Notifications`
*   The div should contain a paragraph with the text `Here is the list of notifications`
*   import the file `Notifications.css`.

**in `task_1/dashboard/src/Notifications.css`, style the Notifications class:**

*   Add a border and some padding around the `div`

**Render the Notifications element:**

*   Modify `task_1/dashboard/src/index.js` to render the new element (`Notifications`) in a `div` with the class name `root-notifications`
*   Check that you can see the two elements on the browser, and using the React browser extension

**Requirements:**

*   When running, **there should not be any lint errors** in the console

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_1/dashboard/src/, task_1/dashboard/src/utils.js, task_1/dashboard/src/App.js, task_1/dashboard/src/Notifications.css, task_1/dashboard/src/Notifications.js, task_1/dashboard/src/index.js`

**0/10** pts

### 2\. Modify the App

mandatory

**using your code from the previous task, in `task_2/dashboard/src/App.js` under the paragraph that says `Login to access the full dashboard`:**

*   add a label and input for email
*   add a label and input for password
*   when the user clicks on a label, it should select the corresponding input
*   add one button element with the text “OK”

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_2/dashboard/src/, task_2/dashboard/src/App.js`

**0/5** pts

### 3\. Modify the Notifications

mandatory

**in `task_2/dashboard/src/utils.js`:**

*   Create a function named `getLatestNotification` that returns the following string: `<strong>Urgent requirement</strong> - complete by EOD`

**in `task_2/dashboard/src/Notifications.js` in the Notifications div:**

*   add a button element with inline styling (without using the CSS file):
    *   show button on right side of notifications box
    *   `aria-label` is `Close`
    *   when user clicks on the button it logs to the console `Close button has been clicked`
*   in the button element there should be an “x”
*   after the paragraph add an unordered list
    *   the list has the following items:
        *   The first one has a default priority and says `New course available`
        *   The second one has a urgent priority and says `New resume available`
        *   The last item has a urgent priority and should correctly displays the content of `getLatestNotification` using `dangerouslySetInnerHTML`
        *   Add the priority to the items of the list using a `data` attribute

**in `task_2/dashboard/src/Notifications.css`:**

*   style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.

**Requirements:**

*   When running, there should not be any lint error in the console
*   Your app should look like the following screenshot:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/8d639e2671ebe15575ad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240820%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240820T074647Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9aaeacf640538dcb7c1d8b853b8aef5cd7915f0d71d12d7b240959f05f7a2208)

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_2/dashboard/src/, task_2/dashboard/src/utils.js, task_2/dashboard/src/Notifications.js, task_2/dashboard/src/Notifications.css`

**0/10** pts

### 4\. Create basic tests with four tests

mandatory

**in `task_3/dashboard/src/utils.test.js`:**

*   Write a test to check that the function `getFullYear` returns the correct year (be careful to not create a time bomb)
*   Write a test to check that `getFooterCopy` returns the correct string when the argument is true or false
*   Write a test checking the returned string for `getLatestNotification`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_3/dashboard/src/utils.test.js`

**0/4** pts

### 5\. Install Enzyme

mandatory

*   Install Enzyme and the enzyme adapter with `npm`
*   Create a file named `setupTests.js` and configure the adapter for Enzyme

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_3/dashboard/src/setupTests.js`

### 6\. Create React tests

mandatory

**in `task_3/dashboard/src/App.test.js` create four tests:**

*   test that App renders without crashing
*   verify that App renders a div with the class `App-header`
*   verify that App renders a div with the class `App-body`
*   verify that App renders a div with the class `App-footer`

**in `task_3/dashboard/src/Notifications.test.js` create three tests**

*   test that Notifications renders without crashing
*   verify that Notifications renders three list items
*   verify that Notifications renders the text `Here is the list of notifications`

**Requirements:**

*   When running the test suites, you should see the following result
*   You must use shallow rendering to write the React tests

    Test Suites: 2 passed, 2 total
    Tests: 7 passed, 7 total


**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_3/dashboard/src/App.test.js, task_3/dashboard/src/Notifications.test.js`

**0/8** pts

### 7\. Deploy to a GitHub page

mandatory

Deploy your application to GitHub Pages using `gh-pages` branch and `create-react-app`

Your application should be working correctly when accessing the GitHub URL.

#### Add URLs here:

 Save

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_4/`

**0/1** pt

### 8\. Create a project using Webpack

mandatory

Without reusing `create-react-app` or the code from the previous exercise, start a brand new npm project

Reusing what you learned during the Webpack module:

*   Set up a system to output a `bundle.js` file in a `dist` folder
*   Set up a dev server with hot reloading
*   Create a `src` folder that will contain your Javascript
*   Set up a simple html file in the `dist` folder that will import the bundle file in the `body` tag.

Install and configure the various plugins to support:

*   inline source map
*   style loader
*   css loader
*   image webpack loader

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_5/dashboard/config/webpack.config.js, task_5/dashboard/dist/index.html, task_5/dashboard/src/index.js`

**0/2** pts

### 9\. Install Babel

mandatory

*   Install Babel, and in `task_5/dashboard/.babelrc`, add the presets for `preset-env` and `preset-react`
*   Add a `babel-loader` to the Webpack configuration so you can support `js` and `jsx` files
*   Import the files that you wrote in the previous task. All the Javascript and React code should be within the `src` folder

At this point, running `webpack-dev-server` should correctly execute your code, and you should be able to see the dashboard like in the last task

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_5/dashboard/.babelrc, task_5/dashboard/config/webpack.config.js`

**0/4** pts

### 10\. Reorganize the files

mandatory

Let’s reorganize the files in our project:

*   Every file related to the App, should be within a `App` folder
*   Every file related to the Notifications, should be within a `Notifications` folder
*   Every file related to the utils functions, should be within a `utils` folder
*   Every asset file should be within the `assets` folder
*   Set up the `favicon.ico` in the `dist` folder
*   Webpack config file should be within a `config` folder if it isn’t already

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_5/dashboard/src/App/App.css, task_5/dashboard/src/App/App.js, task_5/dashboard/src/App/App.test.js, task_5/dashboard/src/Notifications/Notifications.css, task_5/dashboard/src/Notifications/Notifications.js, task_5/dashboard/src/Notifications/Notifications.test.js, task_5/dashboard/src/utils/utils.js, task_5/dashboard/src/utils/utils.test.js, task_5/dashboard/config/webpack.config.js, task_5/dashboard/src/assets/holberton-logo.jpg, task_5/dashboard/dist/favicon.ico`

**0/1** pt

### 11\. Testing

mandatory

Install Jest and Enzyme to run your test suites

move the `setupTests.js` file to `config` folder if you have not already

**Requirements:**

*   Your `package.json` should have the two following scripts:

        "start": "webpack-dev-server --mode development --config config/webpack.config.js",
        "test": "jest"


*   Running the first script should start your dev server and build without any error
*   Running the second script should start your test suites and pass for each test

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_intro`
*   File: `task_5/dashboard/config/setupTests.js, task_5/dashboard/package.json`

Help

**0/4** pts
