# Capstone-L2-T21
In this project I created an Itunes search bar.

## Table of Contents
`This will link you to certain parts of the read me file`

- [Available Scripts](#Available-Scripts)
    - [npm start](#npm-start)
- [Folder Structure](#Folder-Structure)
- [Supported Browsers](#Supported-Browsers)
- [How to use the app](#How-to-use-the-app)
- [Deployment to Heroku](#Deployment-to-Heroku)

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

When a user entered something in the search bar and chose a genre, then clicked the search button it will display the results.

## Folder Structure

After creation, your project should look like this:

```
Capstone-L2-T21/
    frontend/
        node_modules/
        public/
        src/
            Components
            test
            App.css
            App.js
            App.test.js
            favourite.css
            index.css
            index.js
            logo.svg
            reportWebVitals.js
            search.css
            setupTest.js
        .gitignore
        package-lock
        package
        README.md 
    node_modules/
    test/
    .gitignore
    package-lock
    package
    README.md
    Server.js 
        
```
## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## How to use the app

This app was created to be *easily used*. Simply enter something you want to search in the search bar, choose a genre in the dropdown list next to the search bar and then click the search button. in a few seconds the results will display and you can look through it. if you see something you like, then simply click the add to favourite button underneath the item and it will be saved to the favourite list at the bottom of the page. If the item saved has a preview, then simply click on the url next to the item picture to see the preview. 

## Deployment to Heroku

I followed the steps given in task 19 on how to deploy Heroku, but my build folder still did not want to activate. So I searched for another tutorial on deployment to Heroku and followed their steps, but still nothing happened. My app runs perfectly fine on my local computer, it did deploy to Heroku but still nothing displays and it gives me an application error.

**Here is my link to visit the deployed application** : https://capstone-l2-t21.herokuapp.com/