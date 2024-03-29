import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import NavBar from './components/NavBar';
import NavBarResp from './components/NavBarResp';

//import logo from './logo.svg';
import './App.css';

// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

//Create apollo client
// const client = new ApolloClient({
//   uri: '/graphql', //url of graphql server 
//   link: authLink.concat(httpLink), //links in the chain between apollo client and graphql server
//   cache: new InMemoryCache(), //cache results of queries
// });

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavBarResp />
      <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
    </h1>
    </div>
  );
}

export default App;
