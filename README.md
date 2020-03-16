# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

Please run `npm i` or `npm install` to install the necessary packages
Afterwards there are 4 commands that can be used:

`npm run build-prod`: creates dist folder for server
`npm run build-dev`: starts a dev server
`npm run test`: runs jest tests
`npm run start`: starts the node server

## To Use

After you build the project by running `npm run build-prod` and server is started by `npm run start` you can access the page using `localhost:8080`
Copy and paste any url of an article and it will produce an analysis report.
