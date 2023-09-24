## Food Ordering React Appliction

## About

- A food ordering app built on react using Swiggy's public API to display restaurants based on the location where user can select food items and place an order.

## Features

- User can navigate to each restaurant card based on the availability of location.location.
  - [V2] User will be able to select his/her own location from the search input - anywhere in India
- Once user clicks on a restaurant card - the menu page will be launched with detailed information of the restaurant and food items.
  - Name and address of the restaurant
  - Pure Veg restaurant indicator
  - Ratings of the restaurant
  - Collapsible menu items for each categories
  - Lable for Veg / Non Veg
  - Bestseller food label
- User can add food items to cart
  - User can increase or decrease the quantity of food item while adding it to the cart in restaurant menu
  - Same action can be achieved in the cart page as well
  - [V2] Only able to add food items for one restaurant at a time
- Cart will display all the items added to cart
  - User can remove items and the details will be updated in the cart
  - [V2] to persist items in cart even after user refresh the cart/ close the browser and come back
- [V2] Once authenticated, user will be redirected to Checkout Page
- User should be able to select addresses in the checkout page for order delivery
- User will be able to select different payment methods available
- User will be navigated to order confirmation page with successfull order and order summary will be displayed
