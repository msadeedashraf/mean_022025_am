### Node Reference
[Node](https://www.w3schools.com/nodejs/default.asp)

### Download Node
[Download](https://nodejs.org/en/download)

### Node Documentation
[Doc](https://nodejs.org/docs/latest/api/)

### NPM 
[Node Package Manager](https://www.npmjs.com/)

>axios
>nodemon
>dateformat
>twilio
>bcrypt




### Package Managers NPM, Yarn, PNPM, and Bun
[The Evolution of Package Managers: NPM, Yarn, PNPM, and Bun](https://medium.com/@ankitacode11/the-evolution-of-package-managers-npm-yarn-pnpm-and-bun-cf16906ef37e)


### Creating a Node Project

Create a project/app folder
> mkdir app-name
> cd app-name   
> create a root file(index.js)
> npm init
> npm install package-name (npm install nodemon)
> create the .gitignore file and add node_modules
> npm i date-fns
> npm i uuid

### Express 4.21.2
[Express](https://expressjs.com/)

> npm install express --save
> npm i cors

### To [Hash](https://www.geeksforgeeks.org/what-is-hashing/) your Passwords 
[bcrypt](https://www.npmjs.com/package/bcrypt)
>npm install bcrypt

### API testing clients

[POSTMAN](https://www.postman.com)

[Thunder Client](https://www.thunderclient.com/)

[SWAGGER](https://swagger.io/)


### Model View Controller
[MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

### Design Patterns 
[GoF](https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns)


### JSON Web Tokens  
[Intro to JSON Web Tokens: ](https://jwt.io/introduction)
[All You Need to Know About Storing JWT in the Frontend:](https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id)
[NPM jsonwebtoken package:](https://www.npmjs.com/package/jsonwebtoken)
[NPM cookie-parser package:](https://www.npmjs.com/package/cookie-parser)
[Deleting Cookies:](https://expressjs.com/en/api.html#res.clearCookie)
[Cross-Site Scripting (XSS):](https://owasp.org/www-community/attacks/xss/)
[Cross-Site Request Forgery (CSRF):](https://owasp.org/www-community/attacks/csrf)
[REST Security Cheat Sheet: ](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)


>npm i jsonwebtoken cookie-parser dotenv
To Create a Token key using CLI
>node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

To Create a Token key using Node
![Key Gen](/Assets/generating-key.png)
