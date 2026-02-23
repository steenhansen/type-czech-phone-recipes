<a name="fast-start"></a>
<a name="s"></a>

## Web & Mobile Recipes App

<img src="pages/images/tall-phone-web.gif" width="400">

Phone-Recipes, [https://phone-recipes.herokuapp.com/](https://phone-recipes.herokuapp.com/), exists to help prepare
multiple dishes for a meal using a phone in the kitchen. A list of my online recipes; [https://phone-recipes.herokuapp.com/steenhansen1942/gmail.com](https://phone-recipes.herokuapp.com/steenhansen1942/gmail.com).
Phone-recipes shows mulitple dishes along with timers. Log in with a
Google Account. The React components are [online with Storybook](https://www.chromatic.com/library?appId=6269af43d179dc004af9a1ec&inviteToken=5fd55d68b13f4f51bc57632bcad949ba). Below are screen shots of of my
<a href='https://phone-recipes.herokuapp.com/steenhansen1942/gmail.com/Pork%20Roast/steenhansen1942/gmail.com/Rice'>Pork Roast with rice</a> recipes.

![User to kitchen](pages/images/readme-arrow.png)


## Selenium Test Run

<img src="https://file.garden/aFRi5x2D4TDUTvOr/selenium.webp" width="400">

Rescources

- [vite-plugin-ssr](https://vite-plugin-ssr.com/) for Server-Side-Rending and Hot-Module-Replacement

- [Passport](https://www.passportjs.org/) OAuth 2.0 authentication via Google

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Storybook](https://storybook.js.org/) for React component building

- [Selenuim](https://www.selenium.dev/) UI testing

- [Mongoose](https://mongoosejs.com/) for MongoDB objects

- [Tailwind](https://tailwindcss.com/) CSS

- [Icons](https://flaticon.com/) from flaticon.com

- [Type-Czech](https://github.com/steenhansen/type-czech) run time checking in development

Runs On

- [Heroku](https://www.heroku.com/)
- Locally along with a MongoDB [Compass](https://www.mongodb.com/products/compass) installation

Credentials Needed (examples in /sample-configs/)

- Local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2) MongoDB URI
- Google [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup) credentials

Prepare Node Environment, Sqlite3 issue on Windows issue if try Node 18

- nvm install 16.16.0

- nvm use 16.16.0

- npm install

Run on Heroku

    npm run start, no Proc file needed

Test Heroku environment locally with Atlas DB, local MongoDB Compass must be connected also for some reason

    npm run prod ../heroku-config.js

Local Dev Run

    npm run dev ../dev-config.js

Local Prod Run

    npm run prod ../prod-config.js

<a id="test-section"></a>

### **8 Selenium** Tests

- Close all FireFox windows, tests use a lot of resources. If fail try again.
  If still fail check hard drive free space. Possibly reboot after empty trash.

- terminal 1:

       npm run dev /test-selenium/selenium-config.js

- terminal 2:

       cd test-selenium
       node all-selenium-tests

- NB, close Firefox windows after every test as gigabytes of hard
  drive space are used

### **8 Vitest** JSX tests

    npx vitest /test-jsx-browser

### **12 Mocha** Node.js tests

    npm run test-node

<a id="show-storybook"></a>

Storybook Local

    npm run show-storybook

Upload Storybook to Chromatic.com

    npm run upload-storybook -- --project-token=your-abc123xyz-token

View phone-recipes online storybook on Chromatic.com

    https://www.chromatic.com/library?appId=6269af43d179dc004af9a1ec&inviteToken=5fd55d68b13f4f51bc57632bcad949ba
