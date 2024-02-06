# CountrynCurrency

## Setup

- Clone the git repo and add the .env file with KEYs to the server directory. [Rename the sampleenv.txt file to .env]
- Start server and client separatly

## Dependecies

```
# server
$ npm install --save

#client
$ npm install --save

####

```
## Check the Video
- `Youtube Link` : [https://youtu.be/DbuSdYIR5h4]

## Development Approach

### Server

- A GraphQL backend setup with `Apollo Server`
- Queries created for Search a Country from [https://restcountries.com/] and Resolvers are chained to get the currancy convertion data for each country from [https://fixer.io/]
- 
#### ! Important !  - Free subscription of the fixer api used which has a limitation of 100 API calls, if not worked as expected, contact me for new key or replace your own key in the .env file's FIXER_API_KEY .

- Used `@apollo/rest-datasources` to use the above REST APIs as data sources for the server, so no database used at this stage.
- When Searching for a country using a particular input it provides all the results matched from API as array, searching through country.name.common, country.name.official and country.cca3 for the matches
- When a country is selected from the UI, it request the aditional data population, currencies from server + courrency convertions are also provided by the chained resolver
- Apollo Server `InMemoryCache` used for caching which does the heavy lifting for cache but it provided with a intuitive API to configure it through `apollo context` in the server. 
- A user is mimiked by user.mimk.js and sperate userSignIn enpoint utilized providing `JWT` token

### Client

- React + Vite + Tailwind setup used with `Apollo Client`
- HOC and React Router used with Navigate,Outlet for protected Routing
- `useQuery` and `useLazyQuery` used from apollo client
- `useQuery` used to lookup the search country with variables
- `uesLazyQuery` used for user signed-in
-  Apollo Client's `State Management` used through it's `InMemoryCache`, `makeVar` and `useReactiveVar` for reactivity.
- Since backend provide chained resolvers currency convertion data are received when only country added to the list. This saves number of API calls to the Fixer API which is limited and costly if used paid subscription.
- A custom hook `useDebounce` was created for the search input, so it was not trigger each key press of input change. This reduce and controll the number of request sending to the server while searching. And user will have the search suggestions as well
- used shadcn components as main tempalate but customised them as required in re-useable manner
- SignIn page and Signup pages forms are validate. Used a pre-build template for my other project and customised for this project. 

### Decisions Taken

- Use Apollo Server and Client makes strucure the code, this reduced the use of different type libraries and dependencies, this helps a lot to thik forward and code readability.
- Using the Apollo Client's state management for the app. 
- Utilize the Apollo server and client cache provided accordingly. 
- shadcn UI components are customisable REACT components, those are utilized as requred for the project.

### OSS Libraries

- `tailwindcss`
- `jsonwebtokens`
- `shadcn`
- `zod`
- `clx`

### References

- REST Countries and Fixer documentations
- Apollo Server : [https://www.apollographql.com/docs/apollo-server/getting-started/]
- Apollo Client : [https://www.apollographql.com/docs/react/]
- Stackoverflow
- Apollo Odyssey Lift-off I, II, III

### Test User Credentials

- email: "test.user@gmail.com",
- password: "abc123",

### What if(moreTime)

- More Error handeling, Error pop-up etc. instead of `alert` in the browser.
- Adding `context` and finetune the auth and protected routes. 
- Improving the responsive behaviour for mobiles.
- Making the list unique in the web app when adding the same country. 
- localstorage provide some troubles, fixes are coming in the next steps. 
- Creating the user sign-up feature
- Should have improve the use of `type` in TS in both server and client
- Could have hosted
