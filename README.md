# managementSystem

This is a simple managment tool system for orgenizing your projects.

## Instructions: 

Insteall the dependencies.
  1. npm i (assuming you're in the root dir)
> cd server && npm i

> Note: This is a MERN application. Which means you need [Mongodb](https://docs.mongodb.com/manual/installation/) installed on your mechine.
  2. Run the server: `node index.js`
  3. Run front-end: *(go to the root dir first: `cd ..`)*: `npm run dev`
  > This will start a server using [NextJS](https://nextjs.org/) framework.
  4. Populate the db with the initial collections:
      
        - Go to http://localhost:4000/graphql and place the following:
            ``` 
                mutation {
                  setCategory(input: {name:"Test" }){
                    id
                    name
                  }
                }
            ```
            > This will create a category called `Test`(name it as you wish)
        - Unzip the ams file and place it in your mongodb directory, then run: `mongorestore`
        
        Now you can start managing your projects :)
    
