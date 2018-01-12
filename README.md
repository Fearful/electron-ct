# CT Proof-of-Concept

This project was created as a proof of concept for CT based around electron as the wrapper of a web application.

**Requirements**

- node v6.x
- npm 3.x
- Git Tools (cli tools)

**Features**:

- Electron
- ReactJS
- Typescript
- hot module replacement / Live reload
- server side rendering
- code splitting (with webpack chunks)
- helmet (for dynamically injecting scripts as needed)
- ExpressJS

*1. Download the repository and navigate to it through a terminal window*

*2. Set your enviroment type*
```sh
windows: 'set NODE_ENV=dev' or 'set NODE_ENV=production'
mac: 'export NODE_ENV=dev' or 'export NODE_ENV=production'
```
(Note that only while in production you are able to make builds to mac or windows)

*3. Install dependencies*

```sh
npm install
```
(might take a while)

*4. Run with Electron on the fly:*

```sh
npm run start-electron
```

*5. Build as a macOS application:*

```sh
npm run build:mac
```

*5. Build as a Windows application:*

```sh
npm run build:windows
```

*6. Serve as a web application:*

```sh
npm run build-serve
```

**Views**:

Currently, there's two pages, Home, which is pretty much empty and My Activities. You can go to them through the bottom navigation menu. There are some minor interaction details like expandable cards and buttons effects from mui (material ui for react)

**File Structure**:

Following LIFT, is pretty basic:
```sh
'/build'
Holds the '/web', '/mac' & 'win32' folders
```
These folders will get generated when going through building

```sh
'/config'
```
Has all the webpack configuration files which will compile the web application and bundle it, tree shaking the bits that aren't necessary

```sh
'/src'
```
Contains all source files of the application, it's divided in client and server sides and also in the sharing components between them 

```sh
'/main.js'
This file is the one that initializes the electron application and is call upon executing the app
```

**Notes:**

Everytime theres a production build after building the web application webpack will lunch the bundle analyzer which will promp the developer to a visual display of how the bundle is divided.
Express was incorporated to handle the 'hydration' (in terms of the html) of the views, this will allow us to make views more dynamic and have small processes tasked with decoding json and printing it into the view directly, which will increase performance overall and in the long run of instances of the application.
The source code (mostly React in this case) is using SSR (server side rendering internally, to create chunks of javascript rather than large files which will slow the rendering and paint times of the instance) dividing the chunks by the route, making it more easily to manage renderer instances of the application. 
Typescript brings a layer of complexity but also of control and code quality as the code checking increases development time.

I've left a couple of comments thoughout the code but with the time I coudn't be as descriptive
So I'm available for any questions or more deep explanation on the architecture and how it works, Thanks!
