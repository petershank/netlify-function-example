---
runme:
  id: 01HMMCC7GN0PB2H6QPXADB406P
  version: v2.2
---

# netlify-function-example

This is a simple example of a netlify function with `netlify-lambda`.
At netlify, the 'shank-api' site is connected to a github repository:
github.com/petershank/netlify-function-example
The 'shank-api' site on Netlify is configured to look for functions in the path:
.netlify/functions
In the github repository, there's a folder named 'functions'.  In the 'functions' folder, there's a 'hello.js' file.
Therefore, when a POST request is sent to 'https://shank-api.netlify.com/.netlify/functions/hello' the hello.js script will execute, and it will have access to properties of querystring.parse(event.body).
