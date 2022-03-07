# Storefront 

The frontend for this project was developed using Angular. It is a storefront project that simulates a virtual e-commerce website.
It was developed as an assessment for the Fullstack JavaScript Nanodegree Course by Udacity. 

## Getting Started

In order to run the project, you should:

1. Make sure you have node and the Angular CLI installed (if not, download node from nodejs.org and then install the Angular CLI using ```npm install -g @angular/cli``` in your cmd 
2. Open your cmd and navigate to the project's directory
3. Install all the dependencies:
```
npm install .
```
4. Run the App Locally:
```
ng serve
```

## Project structure

This project contains a simple architecture, with the following directories:

#### Services
Containing angular services that simulate API calls.

#### Models
Containing typescript interfaces to model the data used in the application.

#### Inner Components
Containing components that can be used throughout different pages, e.g. (app-product-list component can be used at the home page, or [if implemented] at a category page).

#### Pages
Containing major components that are mapped to routes.

#### Assets
Containing dummy data to be used at API request simulations
