## Summary>>>>
<!-- In this tutorial, you learned how to build a fully-feature Hackernews clone with React and Apollo Client. You implemented several features, such as displaying a list of links, signup and authentication, creating new links, voting on links, pagination as well as realtime updates with GraphQL subscriptions. For a longer tutorial that covers more advanced features of Apollo Client, check out the GraphQL Guide.

To learn how to build the backend that you used for this tutorial, check out the Node.JS tutorial.

The backend was powered by graphql-yoga, a fast and simple GraphQL server library built on top of Express.js. It comes with several features, such as out-of-the-box support for GraphQL Playground and realtime GraphQL subscriptions.

The resolvers of your GraphQL server are implemented using the Prisma client that’s responsible for database access.

If you want to dive deeper and become part of the awesome GraphQL community, here are a few resource and community recommendations for you:

Prisma Blog: The blog regularly features new and interesting content about GraphQL, from community news to technical deep dives and various tutorials.
GraphQL Weekly: A weekly GraphQL newsletter with news from the GraphQL ecosystem
GraphQL Conf: The world’s biggest gathering of GraphQL enthusiasts happening in the heart of Berlin
Prisma Slack: A Slack team with vivid discussions around everything GraphQL & Prisma -->



## Front End With GraphQL and Apollo!

## Note: 
 - The project that was generated by create-react-app uses semicolons and double quotes for strings.   All the code that you’re going to add will use no semicolons and mostly single quotes. You’re       also free to delete any existing semicolons and replace double with single quotes 🔥

## Before we start the server, let’s quickly understand the main components:
 - prisma: This directory holds all the files that relate to your Prisma setup. The Prisma client is used to access the database in your GraphQL resolvers (similar to an ORM).

 - prisma.yml is the root configuration file for your Prisma project.
datamodel.prisma defines your data model in the GraphQL Schema Definition Language (SDL). When using Prisma, the datamodel is used to describe the database schema.
src: This directory holds the source files for your GraphQL server.

 - schema.graphql contains your application schema. The application schema defines the GraphQL operations you can send from the frontend. We’ll take a closer look at this file in just a bit.
generated/prisma-client contains the auto-generated Prisma client, a type-safe database access  library (similar to an ORM).
resolvers contains the resolver functions for the operations defined in the application schema.
index.js is the entry point for your GraphQL server.