# Ping Identity Take Home Coding Exercise #

## Overview ##

Imagine that you are part of a development team who is creating a web-based application
to facilitate door-to-door delivery of delicious meals. 

One of the developers got started on this project but was assigned to another task, so it's
your job to complete the development of the shopping cart.

You'll find that the previous developer didn't get very far, so you have some
work ahead of you.

<a name="contents"></a>

## Contents ##

- [Getting Started](#gettingstarted)
- [Prerequsites](#prerequisites)
- [Startup](#startup)
- [Requirements](#requirements)
- [Deliverable](#deliverable)

<a name="gettingstarted"></a>

### Getting Started ###

The existing code uses React and Material-UI frameworks, in addition to Jest and Enzyme. If you choose
to use an alternative framework from Material-UI, this is acceptable, as long as the UI remains visually 
unchanged. There is a snapshot test included in the project to show you what may have changed.

An API is included here for retrieving the data needed to render the UI. You are only required to 
update the front-end code to meet the requirements of this exercise; however, if you feel a requirement
can be better met by updating the API, this is allowed.

You should handle state management through Redux or React Hooks.

You may add dependencies to the project to help you increase the quality and future maintenance of the code 
and to complete the project. 

You should add tests to maintain code coverage and ensure quality standards.

### What We Are Looking For ###

- Code quality
- Following best practices
- Testing
- Visual accuracy
- Functionality
- Communication

<a name="prerequisites"></a>

### Prerequsites ###

- [Maven](https://maven.apache.org/) - Please note: older versions of maven may have issues with building and
running the API. It has been validated using 3.6.0 and 3.8.1.
- [Node package manager](https://www.npmjs.com/) - Please note: older versions of npm may have issues with
building and running the UI. It has been validated using 6.14.12, as well as newer versions, including 8.1.

<a name="startup"></a>

### Startup ###

##### Running the Spring Boot Application #####

1. From the root of the `api` module: 

    `mvn clean install`

2. If you are running from an IDE, simply locate the `Application` class and run it.

3. To run from the command line, in the root of the `api` module:

    `mvn spring-boot:run`
    
4. If you need to change the port that the application is running on, you may do so via the 
`application.properties` file. 

3. You can access the API by making a `GET` request to the endpoint http://localhost:8085/food.

##### Running the UI #####

1. From the root of the `ui` module:

    `npm install`
    
2. Once the dependencies have been installed:

    `npm start`
    
3. You can access the running application via http://localhost:3000.

<a name="requirements"></a>

### Requirements ###

1. The cart should initially include 7 items.
2. The quantity of the items in the cart can be incremented or decremented by clicking the corresponding - or + button.
3. The quantity of each item will be displayed.

4. The price for each item will be derived from the item's ID in the API response. Use the last 
three digits for the price. 

    For example, given this JSON:
    
       {
            "id": 715699,
            "title": "Berry Banana Breakfast Smoothie",
            "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            "imageType": "jpg"
       }
    
    The price for this item will be $6.99.

5. The price displayed on the item row will be updated when the quantity changes.

    For example:
    - Berry Banana Breakfast Smoothie   0   $0.00
    - Berry Banana Breakfast Smoothie   1   $6.99
    - Berry Banana Breakfast Smoothie   2   $13.98

6. When the quantity of an item is decreased to 0, the item row should not be removed from the cart. 
7. When an X is clicked, the corresponding item should be removed from the cart.
8. The subtotal at the bottom should be updated to reflect the correct total for all items in the cart.
9. The **Credit Card Details** section doesn't have fully implemented card options. Complete the population of the
options as per standard card user interfaces.
10. Optional bonus points for redirecting to a new page when clicking the **Check Out** button or **Continue 
Shopping** link. The design and content are up to you!

<a name="deliverable"></a>

### Deliverable ###

The deliverable will be an updated zip/archive file and clear instructions for any changes in installation.

Please do not share this publicly.

[Top](#contents)
