# Museo

Museo is a self hosted web app to list and showcase static html/css/js components. This was built to provide a way for software engineers to quickly use static html components as a reference for porting those componets to various platforms & frameworks.

Screenshot of an example component view page.
![Screenshot](https://raw.githubusercontent.com/ianchouinard/museo/master/ScreenShot.PNG "Screenshot")

Museo Demo
[https://museo-demo.herokuapp.com/](https://museo-demo.herokuapp.com/)


## Usage
The contents of the "/build" directory can be hosted on a server, or run locally, etc. All html, css, and js files to be showcased by Museo should be placed in the "/public" folder. Update the "library-config.json" file as needed. Museo will automatically pull all of the html components and static assets listed in the library-config file at runtime. For convienence, a small sample project is already configred. More documentation to come.

## Development
The Museo app is a ReactJS application created via Create React App. "npm run start" to start the dev server. "npm run build" to build for production. Refer to Create React App for more info.

### Dev Concepts
Museo works via a React app shell that contains the general ui, controls, component info. This wraps a React view with limited styling that is rendered in an iframe. The React view rendered with the iframe fetches and renders the component html, and loads any css & js files configured in the library-config.json. The styling for the Museo app is done with ReactJSS and without normal cascading css to specifcally attach styles to only the Museo app elements to limit/negate any impact the Museo app has on the components it is displaying.