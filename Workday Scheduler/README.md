# Workday Scheduler 

## About the Project
This project is an app that helps you plan your day by allowing you to plan for the hourly blocks of time.  The user can save text. The information typed by the user is stored and displayed when the user visits the webpage again. I developed this application during the third week of the coding bootcamp at Columbia University, NY. Date of publication: 11/01/2020


## Contents

- [User Story](#user-story)
- [Technologies used](#technologies-used)
- [Key files in the repository](#key-files-in-the-repository)
- [Packages used](#packages-used)
- [Programming Competencies](#programming-competencies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Copyright](#copyright)


## User Story

I am an employee at a large firm and every day is busy. I am looking for a new app that can help me organize my day and facilitate keeping track of the various tasks and meetings. I am specifically looking for an app that can enable me to organisze my daily tasks/commitments by hour
 
## Technologies used

![Bootstrap](https://img.shields.io/badge/Bootstrap-blueviolet?style=for-the-badge&logo=bootstrap)

![CSS](https://img.shields.io/badge/css-darkgreen?style=for-the-badge&logo=css3)

![Javascript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

![JQUERY](https://img.shields.io/badge/jquery-purple?style=for-the-badge&logo=jquery)

![HTML](https://img.shields.io/badge/HTML-informational?style=for-the-badge&logo=html5)

![Node](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=Node.js)



## Packages used

There are no required packages for this app


## Applied Programming Skills

By completing this project I was able to master the following programing skills: 

- Using bootstarp flex-box grid system to create units of 1hr blocks consisting of hr tag, text area to store information and a save button

- Using Javascript to obtain current date and displaying information into the jumbotron

- Using JQUERY to change the color of hr block text box dynamically, based on the present hr (green), previous hr(blue) and future hr (pink)

- Saving user text (typed in 1hr block text boxes) into local storage by creating an object

- Note that the save buttons have been assigned a unique id (each) which is specific to the hour blocks and then JQUERY is used to pair the user text in individual hr blocks to the unique id of their corresponding save buttons. In this way each unique text string from an hr block is uniquily identifyable using the ids drived from a corresponding buttons.

- Storing strings of text from hr blocks into an object in which each text string is identifyable by a unique id

- Using JSON Parsing when retrieving data from local storage and using JSON Stringify to store data into local storage

- Linking CDNs for using Google fonts and font Awesome in HTML

- Note how the JQUERY foreach method is used to target each of the 1hr blocks using their id (specified as number), then these ids are converted to an integer value using parsInt. Each of the textareas in the 1hr block component are uniquely id'ed as the hr they represent. For example for the hr block 9am the id is '9' that is converted to an integer using ParsInt. This number can be matched with the current hr infomation (obtained by the javascript date/time function) and then assiging the appropriate color scheme class of present, past and future.

- Note that whenever I want to target multiple textareas for a common task or function I am targeting them by the common class they share e-g ".textarea", and when I want to target each one of them individually I am targeting them using a unique id. 

- Customising bootstrap classes by adding CSS classes under <style> in HTML for color change based on time

- Using bootstrap to generate a mobile responsive webpage

- Adjusting spacing with manipulation of padding, margine, border, radius in bootstrap/ CSS

- Using JQUERY to dynamically manipulate classes for HTML elements

- Using JQUERY to target multiple buttons as event listeners. In particular being able to target each button uniquely as well as all buttons as a group, depending on the task

- Using event.preventdefault(). to prevent loss of user information secondary to default browser functions

- Using Node.JS to generate a high quality readme file. 

## Key files in the repository

index.html <br />
script.js



