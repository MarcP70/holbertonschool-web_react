      Project: React inline styling | Holberton Laval, France Intranet

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/a34a82f55aae6efeeb53.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240903%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240903T113947Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8a5c48337bbd05fa7ff601f4eebe3fd7694720313f2c44dfd5df2d7a85b8560d)

Resources
---------

**Read or watch**:

*   [Aphrodite](/rltoken/GMElkZaDK8tzwoUykjg5bQ "Aphrodite")
*   [Inline styling](/rltoken/w9ITJkQfkw49KVHVTO8yVQ "Inline styling")
*   [Enzyme Render](/rltoken/A2NYzdlFL4inQcZ9uaqhLg "Enzyme Render")
*   [Enzyme Prop](/rltoken/WqwKL394cqRMkfVoZgUb9Q "Enzyme Prop")
*   [CSS Viewport](/rltoken/pL4JqOcX8EPwPYEAXcajUw "CSS Viewport")
*   [CSS Media queries](/rltoken/gMcsR1Rm-u_RjP6ryboULQ "CSS Media queries")
*   [CSS Animations](/rltoken/96dW_2_R4zRDGC8nuSc26Q "CSS Animations")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/NGC3nKSLn6Ma0YNceXxKTA "explain to anyone"), **without the help of Google**:

*   the differences between using a CSS file and inline styling
*   how to use a CSS-in-JS tool like Aphrodite
*   how to use conditions within JS to apply different styles
*   how to use responsive design and make the application show a different UI according to the screen size
*   how to create small animations within the app

Requirements
------------

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 9.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory

Tasks
-----

### 0\. Inline styling

mandatory

*   Copy over the `task_5` directory from the `0x04. React components` project (We’ll be using it as the base for this project)
*   Rename the `task_5` directory to `task_0`

**Modify the `CourseListRow` component in `task_0/dashboard/src/CourseList/CourseListRow.js`:**

*   Using inline styling, change the background color of a row to `#f5f5f5ab`
*   Using inline styling, change the background color of a header row to `#deb5b545`
*   If needed, modify the test file so every test pass

**Tips:**

*   For better performances, never create and pass an object to an element directly. Use a constant instead
*   Use the `isHeader` prop to easily pick the style you want to apply to the `tr` tag

**Requirement:**

*   Even if the modification is small, make sure that your test suites are still passing. Especially the file `CourseListRow.test.js`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_inline_styling`
*   File: `task_0/dashboard/src/CourseList/CourseListRow.js, task_0/dashboard/src/CourseList/CourseListRow.test.js`

**0/1** pt

### 1\. install Aphrodite

mandatory

Install Aphrodite using npm with:

`npm install --save aphrodite`

**Modify the `App` component in `task_1/dashboard/src/App/App.js`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the body and the footer within the file
*   Delete the file `App.css` and the import

**Modify the `BodySectionWithMarginBottom` component in `task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the margin within the file
*   Delete the file `BodySection.css` and the import

**Modify the `CourseList` component in `task_1/dashboard/src/CourseList/CourseList.js`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the list within the file
*   Remove the styling for the list within the `CourseList.css` file

**Modify the `Header` component in `task_1/dashboard/src/Header/Header.js`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the logo and the header within the file
*   Delete the file `Header.css` and the import

**Modify the `Login` component in `task_1/dashboard/src/Login/Login.js`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the margin within the file
*   Delete the file `Login.css` and the import

**Modify the `Notifications` component in `task_1/dashboard/src/Notifications/Notifications.js`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the notifications panel within the file
*   Remove the styling for the notifications panel from the `Notifications.css`

**Make sure the test suites are still passing!**

**Tips:**

*   Look into using `StyleSheetTestUtils.suppressStyleInjection` at the top of your test file, to prevent issues with style injections

**Requirements:**

*   At this point, the UI should look exactly the same with the inline styling as it was with the CSS files

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_inline_styling`
*   File: `task_1/dashboard/src/App/App.js, task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js, task_1/dashboard/src/CourseList/CourseList.js, task_1/dashboard/src/Header/Header.js, task_1/dashboard/src/Login/Login.js, task_1/dashboard/src/Notifications/Notifications.js, task_1/dashboard/src/App/App.test.js,task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js, task_1/dashboard/src/CourseList/CourseList.test.js, task_1/dashboard/src/Header/Header.test.js, task_1/dashboard/src/Login/Login.test.js, task_1/dashboard/src/Notifications/Notifications.test.js`

**0/11** pts

### 2\. Conditionally applying style

mandatory

**Modify the `NotificationItem` component in `task_2/dashboard/src/Notifications/NotificationItem.js`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the urgent and default items
*   Using condition, apply the styling to the `li` element
*   Delete the `Notifications.css` file and remove any import

**Modify the `NotificationItem.test` suite in `task_2/dashboard/src/Notifications/NotificationItem.test.js`:**

*   Make sure that tests are still passing

**Modify the `CourseListRow` component in `task_2/dashboard/src/CourseList/CourseListRow.js`:**

*   Modify the component to use Aphrodite within the js file
*   Define the styling for the different type of rows (default rows, header rows)
*   Define the styling for the different type of `th` elements
*   Delete the `CourseList.css` file and remove any import

**Modify the `CourseListRow.test` suite in `task_2/dashboard/src/CourseList/CourseListRow.test.js`:**

*   Make sure that tests are still passing
*   Test properties one by one if easier

**Requirements:**

*   Use conditions as much as you can, do not repeat elements
*   At this point, the UI should look exactly the same with the inline styling as it was with the CSS files

**Tips:**

*   You can either use conditions or use an array to apply the different styling. Conditions are usually more robust
*   Testing might become difficult with the different variations. Look into the Enzyme documentation for `render`, `contains`, `prop`, and `html`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_inline_styling`
*   File: `task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/CourseList/CourseListRow.js, task_2/dashboard/src/CourseList/CourseListRow.test.js`

**0/4** pts

### 3\. Responsive design

mandatory

Let’s make the application responsive to the screen size using media queries. We are going to only focus on large screen and screens with a width under 900px

**Modify the component `Login` in `task_3/dashboard/src/Login/Login.js`:**

*   Make sure that a label and an input are on each line
*   Make sure that the button is on a new line
*   The screen should look like the image below:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/c3ed54e1dba4b232adc1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240903%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240903T113947Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=eb1026013268a477fa2d8477497fa4d32dfa7ddcd9915bd0be833a128730508e)

**Modify the component `Notifications` in `task_3/dashboard/src/Notifications/Notifications.js`:**

*   When the panel is open, it should take over the entire screen
*   There should be no padding because of the `ul` element
*   The font size of the text should be 20px

**Modify the component `NotificationItem` in `task_3/dashboard/src/Notifications/NotificationItem.js`:**

*   The item should take the entire screen width
*   A black border should be displayed at the bottom
*   The font size of the text should be 20px
*   The padding for the item should be `10px 8px`

**Requirements:**

*   When the notifications panel is open, the screen should look like the image below:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/e0d15ee8d2e28be1e130.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240903%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240903T113947Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d97010efaceab9c25b010d1b452212dbe7cb3c385dd52624f347de245834142c)

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_inline_styling`
*   File: `task_3/dashboard/src/Login/Login.js, task_3/dashboard/src/Notifications/Notifications.js, task_3/dashboard/src/Notifications/NotificationItem.js`

**0/9** pts

### 4\. Animation

mandatory

Let’s create an animation that we can display when the user hovers on the `Notifications` menu or when there is a new notification. In `task_4/dashboard/Notifications/Notifications.js`:

*   Create one object containing the CSS frames to make the opacity change from `0.5` to `1`
*   Create one object containing the CSS frames to make the element bounce. You can play with translateY and alternate from 0px to -5px and 5px

Modify the styling for the menu item to:

*   Float on the right of the screen over every element
*   The background color should be `#fff8f8`
*   Show the pointer cursor when hovering the element
*   On hover, animate the element with the two new animations. The duration for the opacity change should be 1s, and the duration for the bouncing effect should be 0.5s. The animation should repeat 3 times only
*   When the list of notifications is visible, hide the menu item

**Requirements:**

*   When the notifications panel is hovered or opened, the UI should look like the image below:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/8d302a65b1be36662c54.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240903%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240903T113947Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1d5caade330ea0f0928c0266510ccd4049951e9a37041a76b1dd48faa4449514)

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_inline_styling`
*   File: `task_4/dashboard/src/Notifications/Notifications.js`

**0/8** pts
