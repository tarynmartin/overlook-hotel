# Hotel Overlook Project
## Mod 2 Final Solo Project

### Abstract
We had to create a website that has both customer and manager view, collects and posts data to a server through the fetch API, and allows the customer to find and make new bookings. It also allows the manager to see the hotel's current occupancy and revenue.

### GIF's of Application

![manager dashboard view with demonstrated responsiveness](assets/manager-responsiveness.gif)

![customer dashboard view with demonstrated responsiveness](assets/customer-responsiveness.gif)

### SetUp
To view this application at [github project](https://github.com/bjjdestroyer/overlook-hotel).
1) Click the green code button on the screen and clone/copy the repository link
2) In terminal, navigate to where you would like this project to live.
3) In terminal, type `git clone [copied link from Github]`
4) Move into the project file and run `npm install`
5) If there are vulnerabilities, run `npm audit fix`
6) Run `npm test` to see tests pass. If there are some tests not passing, run `npm install chai-spies`
7) If you are having issues with moment, used for the current date run `npm install moment.js`
8) To see the application in action, in terminal run 'npm start' and look for  "Project is running at http://localhost:8080/". Copy the url into your browser.

### Wins
* Accessibility: There was minimal changes needed to be made to make the site fully accessible.
* It was really interesting building CSS from scratch with SASS and I really enjoy it
* Figuring out what the issue was with my previous breakpoints and creating a nice, responsive website!
* Chai-spies to test the fetch functionality
* I think tests are well thought out and cover many possibilities

### Challenges
* Chai-spies to test the fetch functionality
* Figuring out how to create the functionality to find all available rooms - I hit kind of a mental block on that, but was able to get it done.

### Next plan
* Add an option to allow customers to filter available rooms based on room type
* Add additional filters for bed size and number of beds
* Expand manager functionality to allow them to search for customers and delete bookings.

## Authors
- :bust_in_silhouette: **Taryn Martin** Github: [bjjdestroyer](https://github.com/bjjdestroyer)

## Resources
View the Turing schools, [Project Spec](https://frontend.turing.io/projects/overlook.html)
GitHub [Project Board](https://github.com/bjjdestroyer/overlook-hotel/projects/1)
### Acknowledgements
Heather Faerber mentored and provided feedback for the project.


## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory. 

_If you are finished with the functionality and testing of your project_, then you can consider deploying your project to the web! This way anyone can play it without cloning down your repo.

[GitHub Pages](https://pages.github.com/) is a great way to deploy your project to the web. Don't worry about this until your project is free of bugs and well tested!

If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages.
