import {AsyncComponentProvider, createAsyncContext} from 'react-async-component'
import * as React from "react";
import {renderToString} from "react-dom/server"
import {StaticRouter as Router} from 'react-router-dom'
import asyncBootstrapper from 'react-async-bootstrapper'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import Routes from '../common/routes'
import Helmet from "react-helmet";
import AppBar from 'material-ui/AppBar';

export default function(url: string) : Promise<string> {

    const asyncContext = createAsyncContext();
    let routerContext = {};

    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: green500,
        primary2Color: green700,
        primary3Color: green100,
      },
    });

    const App = (
        <MuiThemeProvider muiTheme={muiTheme}>
            <AppBar title="CellTrak" />
            <AsyncComponentProvider asyncContext={asyncContext}>
                <Router location={url} context={routerContext}>
                    <Routes/>
                </Router>
            </AsyncComponentProvider>
        </MuiThemeProvider>
    );

    return asyncBootstrapper(App).then(() => {

        const applicationHTML = renderToString(App);
        const asyncState = JSON.stringify(asyncContext.getState());
        const helmet = Helmet.renderStatic();

        return `<!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <link rel="apple-touch-icon" sizes="57x57" href="/icon.png" />
            <style>body {margin:0;}</style>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${applicationHTML}</div>
            <script type="text/javascript">
                window.__ASYNC__ = ${asyncState}
            </script>
            <script type="text/javascript" src="/vendor.js"></script>
            <script type="text/javascript" src="/client.js"></script>
        </body>
        </html>`;

    });
}