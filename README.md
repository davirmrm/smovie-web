# React Project Structure

Search movies, series, games. so that you can find out more information about

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [redux](https://redux.js.org/) for state management.

## Usage
You can start by cloning this repository and using (`git clone https://github.com/davirmrm/smovie-web.git`) .

After that you should proceed as in any javascript project:

- Go to the root folder of your project and run `npm install`.
- Run `npm run start` to launch your app!

(Using yarn: `yarn start`)

## Folder structure

This template follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common component that you use through your app
  - `redux`: This folder should call all your reducers
  - `views`: Folder that contains all your application screens/features.
    - `nls`: nls is the folder where we have the possible internationalizations.
    - `redux`: contains the redux and actions of this screens module.
  - `helper`: Common api controller.
  - `utils`: Folder to store any common function such as calcutate radius, different date formatting functions
  - `layout`: Contains the entire base of the application, such as header, footer, screen structure, colors, etc.
  - `routes`: To store the navigators.
  - `redux`: Should call all your reducers
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React standards.

Modify the environment variables files in root folder (`.env`)

## Components

Components are the basic blocks of a react application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too.

### API connection handler

To keep the networking layer simple, the template uses a single Axios instance in the `api.js`. It uses interceptors to define common side effects for the responses.

## Views

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each module you have in your app, call all the static components and resources needed to render the scene, and finally use the corresponding hooks to interact with redux and actions, and create behaviors depending on the store.