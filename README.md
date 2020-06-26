# solstice-assessment-api

> Note: this API is meant to work in parallel with [solstice-assessment](https://github.com/jillburg7/solstice-assessment)

## Running the app locally

1. In your terminal navigate to the `solstice-assessment-api` directory and run:
```
node index.js
```
2. Once the server is running, clone [solstice-assessment](https://github.com/jillburg7/solstice-assessment) and follow the setup instructions included.


## Assessment Directions
Given this JSON file, you are asked to build a web app that should meet these requirements:
- a backend api: preferably using Nodejs, but you can use any other backend language.
- a client server: using React.

### Backend API (this repo)
1. should contain the json file with the customers and accounts information and should serve the data contained within the file when requested.

### Client Server (see [solstice-assessment](https://github.com/jillburg7/solstice-assessment))
1. In the main view/component: display in a table a list of all the customers provided in the file.
2. In a separate component: display in a table a list of all the accounts provided in the file.

When a user clicks on a single customer on the table. the user is taken to a profile view containing information about that specific customer + a table with a list of all the accounts associated with the customer.

Please send back your completed assessment by 6pm on Friday 6/26. You may send us a link to a zip containing your project or send it back to us by email.  A link to a GitHub repository would be preferred, as well as a live link to view the finished product.