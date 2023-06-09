# Plate Planner Frontend
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.8.
This projecy also uses a locally hosted Java Spring Boot API to generate most of the data. The project repo can be found here: [Plate Planner API](https://github.com/rjehrlich/plateplanner-api)

## Table of Contents
* <a href="README.md#project-description"> Project Description</a>
* <a href="README.md#tools--technologies"> Tools & Technologies</a>
* <a href="README.md#project-planning-process"> Project Planning Process</a>
* <a href="README.md#hurdles"> Hurdles</a>
* <a href="README.md#installation-instructions-dependencies"> Installation Instructions/ Dependencies</a>
* <a href="README.md#credits"> Credits</a>

---
## Project Description
Plate Planner API aims to provide data on delicious recipes that are fun and mostly easy to prepare. The idea grew from my love for food and cooking and ultimately wanting to take the guesswork out of creating a grocery list. The aim is to use this as a basis/ plan for future consideration of a full application.

## Tools & Technologies
- ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
- ![VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)
- ![Wireframe Tool](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
- [Branding Colors Generator](https://coolors.co/)
- [Stock Photos](https://unsplash.com/)

## Project Planning Process
Each day I would start by looking at my Kanban board, noting what I completed the day before, review what I have planned for the current day, and then prioritized breaking bigger tasks into smaller pieces.

I planned out the project using the following areas as main focus:

### User Stories
* As a User, I want to be able to see all recipes available.
* As a User, I want to select only certain recipes from a list, so that I can use them in my grocery planning
* As a User, I want to be able to have a grocery list that is based on my recipe selections.

#### Nice to have in the future:
* As a User, I want to be able to store my grocery lists in my account, so I can look at them again later
* As a User, I want to create a profile so that I can save recipes I enjoyed making.
* As a User, I want to be able to add my own recipes and save them to refere to later.

### Wireframes
#### Homepage
![home](/src/assets/images/branding/wireframes/Home.png)

[Other Wireframes](/src/assets/images/branding/wireframes)

--------
### Kanban Project Plan
![kanban board](/images/projectplan.png)

[Project Plan Link](https://github.com/users/rjehrlich/projects/5)

## Hurdles
* One big hurdle I had was when I first set up my entity relationships I was getting several server log errors about overriding hashcode() and equals() methods. This was mostly due to the fact that my relationships between entities is using composite keys as mappings.
  * I found [this article](https://thorben-janssen.com/ultimate-guide-to-implementing-equals-and-hashcode-with-hibernate/) on how to implement these methods which helped with my development process
* Due to my entity relationship setup I also had a REALLY tough time getting my endpoints to display the proper information I wanted. I ended up having to reconfigure them about 2 times

## Installation Instructions/ Dependencies

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Install Bootstrap

Run `ng add @ng-bootstrap/ng-bootstrap` if you need to reinstall upon running the application.

## Credits
* [Angular documentation](https://angular.io/docs)
* [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* **Leo R (GA Instructor)**: https://github.com/LRodriguez92
    * For spending what seemed like hours with me on installation issues in Angular and advice on project logic.
* **Suresh S (GA Instructor)**: https://github.com/sureshmelvinsigera/
    * For also helping throughout our learning journey and being patient debugging issues with us!
* **Dhrubo C (GA Instructor)**: https://git.generalassemb.ly/dhrubo57
  * For helping through some hard Cucumber Test case logic
