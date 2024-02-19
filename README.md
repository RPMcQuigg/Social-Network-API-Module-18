# Social Network API Module 18

## Description
This the the back half of an Social Network API website. You are able to run and test the function of the website with Insomnia.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation
1. Clone the Repo 
2. Open the Repo in the Terminal 
3. Install the dependencies  
4. run node server.js 
5. Open Insomnia and create a collection 
6. In the collections create 2 folder for users and thoughts routes 
7. In each of the routes folders create a get, put, post, patch, delete request.

## Usage
When using Insomnia you will need to link the the site by http://localhost:3030/api/ and then using one of the tag, product, and category routes

## License
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
This application is covered under the MIT license.

## Questions
For any questions, please contact me via:
- GitHub: [RPMcQuigg](https://github.com/RPMcQuigg)
- Email: _____

## CODE ERROR
I am unable to locally run my code as receive an "MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017" error from my MongoDB when locally hosting. In short its an error with the installation of any version of MongoDB to my system. I worked with my professor on this issue and we were able to come up with a work around by using MongoDB Atlas and Compass which worked for other projects but when I tried to run the application the with the new set up I still received a the "MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017" error. At this point I am unsure of what to do to fix the issue on my end. This error of prevents me from looking at and testing the application in Insomnia. When my code, before the error started I was able to run some simple test in Insomnia and the program seemed to work fine.