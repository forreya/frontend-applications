# Javascript Web Frontend Applications

This repository contains mini-projects and challenges that taught me how to use Javascript & HTML to build interactive web pages and web applications.

## Learning Objectives

From these exercises & challenges, I achieved the following learning objectives:

- Test-drove simple Javascript programs that ran on web browsers, using modern JS build tools.
- Used the DOM API to manipulate the web page structure and content.
- Used fetch to send HTTP requests to remote servers.
- Wrote unit tests for JavaScript code.

## Navigation

Here are some applications that are part of this repository:

1. Counter Web Application 
2. Github Repo Finder
3. Notes App _(Note: You will need to run both the client side (notes-client) and the server side (notes-server) for the application to work fully)_

## Usage

_Each application can be run individually with these steps._

First, clone the entire module repository, then navigate to your desired application directory:

```
$ git clone https://github.com/forreya/frontend-applications
$ cd frontend-applications/{choose_an_app}
```

Make sure that esbuild and jest are installed globally, as well as the project dependencies:

```
$ nvm use node
$ npm install -g esbuild jest
$ npm install
```

To bundle the different JS files into a single bundled file, which the browser loads, run the following command:

```
$ npm run build
```

To run tests, use the following command:

```
$ jest
```

To use the app, open index.html in your browser:

```
$ open index.html
```