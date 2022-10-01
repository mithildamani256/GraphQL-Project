const express = require('express');
const { json } =  require('micro');
const { ApolloServer } = require('apollo-server-express');
// const {bodyparser} = require('body-parser');
const { typeDefs } = require('./schema.js');
const {resolvers } = require('./resolver.js');
// const {fakedata} = require('./Fakedata.js')

async function f(){
    var body =  await server.start();
    // $.response.setBody(body);
};

const app = express();
const server = new ApolloServer({typeDefs, resolvers});

f();

server.applyMiddleware({ app });



app.listen({port: 3000}, () =>
{
  const callbackfuncy = value=>console.log(value+50);

  function myfunc(callbackfunc)
  {
    let value = 50;
    callbackfunc(50);
  };

  // myfunc((val)=>console.log(3+val));
  myfunc(callbackfuncy );

})  ;
