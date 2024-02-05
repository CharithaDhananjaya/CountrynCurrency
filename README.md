# CountrynCurrency

## Setup

- Clone the git repo and add the .env file with KEYs to the server directory.
- Start server and client separatly

## Dependecies

```
# server
$ npm install --save

#client
$ npm install --save

```

## Development Approach

### Server

- A GraphQL backend setup with Apollo Server
- Queries created for Search a Country from [https://restcountries.com/] and Resolvers are chaines to get the currancy convertion data for each country from [https://fixer.io/]
- Use `@apollo/rest-datasources` to use the above REST APIs as data sources for the server
- When Searching for a country using a particular input text it provides all the results matched from API as array, searching through country.name.common, country.name.official and country.cca3 for the matches
- When a country is selected from the UI, it request the aditional data population, currencies from server + courrency convertions are also provided by the chained resolver

- A user is mimiked by user.mimk.js and sperate userSignIn enpoint utilized providing JWT token

### Client

- React + Vite + Tailwind setup used with Apollo Client
- React Router used with Navigate,Outlet for protected Routing
- `useQuery` and `useLazyQuery` used from apollo client
- `useQuery` used to lookup the search country with variables
- `uesLazyQuery` used for user signed-in
- A custom hook "useDebounce" was created for the search input
- used shadcn components as main tempalate but customised them as required in re-useable manner

### Decisions Taken

- Use Apollo Server and Client makes strucure the code with the limited use of different libraries and dependencies, this helps a lot to thik forward and desing uniquly and also they are typed.
- shadcn UI components are customisable REACT components, those are utilized as requred for the project.

### OSS Libraries

- `jsonwebtokens`
- `shadcn`

### References

- REST Countries and Fixer documentations
- Apollo Server : [https://www.apollographql.com/docs/apollo-server/getting-started/]
- Apollo Client : [https://www.apollographql.com/docs/react/]
- Stackoverflow
- Apollo Odyssey Lift-off I, II, III

### Test User Credentials

- email: "test.user@gmail.com",
- password: "abc123",

### What Not Feels Great

- Creating the user sign-up feature
- Should have improve the use to type in TS in both server and client
- Took a little extra than a day as focus this project as a test
- Some silly typos eventually
- Could have hosted
