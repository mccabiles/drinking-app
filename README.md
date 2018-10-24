# Drinkr App
This is a mobile application created with Nativescript-Vue. The app tracks your alcohol consumption based on [Standard Drinks](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=2ahUKEwjEipy7jJ7eAhUMfXAKHdSfAa0QFjACegQIChAK&url=https%3A%2F%2Fwww.niaaa.nih.gov%2Falcohol-health%2Foverview-alcohol-consumption%2Fwhat-standard-drink&usg=AOvVaw1cCW5bBVp0uzxetP6AaSmp), and shows how much you have consumed through a gauge. Your alcohol level decreases over time at a rate of -1/hour which simulates how fast the average human body can process alcohol.

## Installation
Before development, please make sure your local environment is configured for nativescript development. See [this link](https://docs.nativescript.org/start/introduction).

Once your environment is setup, clone the project files then install dependencies using npm.
```
git clone https://github.com/mccabiles/drinking-app.git
cd drinking-app
npm install
```
Finally, run the app on an emulator or device.
```
tns run android --bundle  //for android
tns run ios --bundle      //for ios
```
## Project Structure
The project was scaffolded using the nativescript-vue template and follows the following structure:
```
/app
  /api              ... contains abstractions for database objects
  /components       ... contains the Vue components for the UI
  /database         ... contains configuration and initialization for the SQLite database
  /store            ... contains Vuex definitions. Vuex is the state-management library used by Vue
  /app.js           ... Entry point of the app
```


# NativeScript Vue Blank Template
App templates help you jump start your native cross-platform apps with built-in UI elements and best practices. Save time writing boilerplate code over and over again when you create new apps.

## Quick Start
Execute the following command to create an app from this template:

```
tns create my-blank-vue --template tns-template-blank-vue
```

> Note: This command will create a new NativeScript app that uses the latest version of this template published to [npm](https://www.npmjs.com/package/tns-template-blank-vue).

If you want to create a new app that uses the source of the template from the `master` branch, you can execute the following:

```
tns create my-blank-vue --template https://github.com/NativeScript/template-blank-vue
```

**NB:** Please, have in mind that the master branch may refer to dependencies that are not on NPM yet!

## Walkthrough

### Architecture
There is a single blank component located in:
- `/components/Home.vue` - sets up an empty page layout.

**Home** page has the following components:
- `ActionBar` - It holds the title of the page.
- `GridLayout` - The main page layout that should contains all the page content.

## Get Help
The NativeScript framework has a vibrant community that can help when you run into problems.

Try [joining the NativeScript community Slack](http://developer.telerik.com/wp-login.php?action=slack-invitation). The Slack channel is a great place to get help troubleshooting problems, as well as connect with other NativeScript developers.

If you have found an issue with this template, please report the problem in the [NativeScript repository](https://github.com/NativeScript/NativeScript/issues).

## Contributing

We love PRs, and accept them gladly. Feel free to propose changes and new ideas. We will review and discuss, so that they can be accepted and better integrated.
