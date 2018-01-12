import * as React from "react";
import {hydrate} from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import asyncBootstrapper from 'react-async-bootstrapper'
import _Routes from "../common/routes"
import AppBar from 'material-ui/AppBar';

declare let window: {
    __ASYNC__: any
};

declare let System: any;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
});

const asyncState = window.__ASYNC__;

const render = (Routes: React.ComponentClass) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="CellTrak" />
        <AsyncComponentProvider rehydrateState={asyncState}>
            <Router>
                <Routes/>
            </Router>
        </AsyncComponentProvider>
    </MuiThemeProvider>
);

const App = render(_Routes);

asyncBootstrapper(App).then(()=>{
    console.log('client bootstrapped');
    hydrate(App, document.getElementById("root"));
    console.log('App rendered');
});

if (module.hot) {
    console.log('hot reload active');
    module.hot.accept('../common/routes', () => {
        System.import('../common/routes').then((module: any) => {
            console.log('hot system import',module);
            hydrate(render(module.default), document.getElementById("root"));
        });
    });
}

/*
if(navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .catch(function(err) {
            console.error('Unable to register service worker.', err);
        })
        .then(()=>{
            console.log('sw injected');
        });
} else {
    console.log('!navigator.serviceWorker');
}*/
