# My-Favourites
A simple favourite landing page and a fouristes listing page app. This app lets you favourite list from a landing page and then the favourite page will show you the list of items you have favourited. 

# Execution Instructions
Download the zip folder 
Go to the project folder on your terminal and run  : npm install.
cd server 
To start the server : PORT=8000 node bin/www and leave server on this terminal tab running
Open new terminal tab and go to the project folder and run npm run start. Running this command loads the app in : (http://localhost:3000/)

# Assumptions:
The data is stored in a local data json file(server/landingData.json, server/favouritesData.json).
Products/homepage data is available in server/landingData.json 
Favourites page data is available in server/favouritesData.json
The data json file gets updated as and when the user adds or deletes the favourites from the favourites page.
On clicking the product list image on the homepage, the product is added to favourites and the heart icon turns black to indicate its favourite item.
On clicking the description below the image, loads the full description of the product.
You can hide/view comments on click of the comments
