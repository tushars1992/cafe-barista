# cafe-barista

Commands to run project
## Project setup
```
npm install
```

### Compiles and hot-reloads for development and run Locally
```
npm run serve
```
### Run Stub server (Host json's locally)
```
npm run start-stub
```
### Run unit tests
```
npm run test:unit
```
### Compiles and minifies for production
```
npm run build
```
## Step to Follow to run app

- Start stub server by running following command
npm run start-stub

- Start app by running following command in another terminal
run npm serve

- Enter http://localhost:8080 in the browser to run the app

## About Application

The App contains 3 Screens in the navigation bar 
Home, Orders and Prices.

1.Home screen contains  mainly 2 things :
- List/tiles of users with total bill, paid and amount user owe's.
Click on the tile to see the orders placed by that user.

- Export button which is placed at the bottom of the list is clickable.
On click of that button textarea is displayed with the JSON string of the result.

2.Order screen contains list of orders with amount combined.

3.Prices screen display's the list of all the drinks with their prices.

## Technologies Used

- VueJs as FrontEnd FrameWork
- Tailwind as CSS Framework
- Jest as unit test Framework
- Axios to make Asynchrous calls
- FontAwesome library for Icons

Note: Vue Observable is used to store and share data between different Components.
Reason behind choosing Vue Observable was Simple data and less variables.

