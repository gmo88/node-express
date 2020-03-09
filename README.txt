This step by stem tutorial to build node project with express.
------------------------------------------------------------------------------------------
- First at all initiate project with npm command: npm init
- npm install and install node-modules and auto created package.json and package.log.json
- install express body parser with npm
- install nodemon for auto rerun server
------------------------------------------------------------------------------------------
1. Added new file server.js and add next code in it.
- "express"
- "port" for listen
2. Create files "pages" and "users" into the "/routers" folder
-routers
--pages.js
--users.js
3. In the "server.js" as a root file add directions to the "pages" and "users"
/pages
/users
4. Into the data folder create file "data.js" and fill it by array objects, example: [{}, {}, [{}, {}]].
5. Implement GET users_router and take all users like array of objects and specific user by name:
 5.1. Create empty array.
 5.2. Loop through "data" use forEach with nested forEach in order to get access to the objects of array of "users" and put results into empty array (5.1).
  5.2.1. Add condition if ...
 5.3. Display results (5.2) with "200" status or if error show empty array with the "404" status.
 5.4. Use request.query it's parameters after "?" in order to get name by user and hold it in variable.
 5.5. Create empty array for holding data about user.
 5.6. Loop through the "data" with nested two forEach's loops which one loop pages and second loop users and get access to the "name" of specific user and hold it into array (5.5).
  5.6.1. Add condition in order to show results if request.query.name is matched with regExp.
 5.7. Return status "200" and array with user data or if error return status "400" with empty array.
