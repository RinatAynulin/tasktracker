import express from 'express';
import React from 'react';

import { renderToString } from 'react-dom/server';
import App from '../static_src/components/App';
import template from './templates';
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux';
import { createElement } from 'react';
import initStore from '../static_src/utils/store'
import { headerMiddleware } from '../static_src/middlewares/headerMiddleware';
import 'isomorphic-fetch';
const expressproxy = require('express-http-proxy');
const cookieParser = require('cookie-parser');

const app = express();

const apiURL = 'http://138.197.187.175/';

app.use(cookieParser());

app.post('/api/token-auth/', expressproxy (apiURL, {
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
        console.log('token-auth');
        if (proxyRes.statusCode >= 200 && proxyRes.statusCode < 300){
            const data = JSON.parse(proxyResData.toString('utf8'));
            console.log(data.token);
            userRes.cookie('token', data.token, {httpOnly: true});
            return JSON.stringify({status: 'ok'});
        }
        return proxyResData 
      }
}));

app.get('/api/logout', (req, res, next) => {
    const key = req.cookies.token;
    if (key) {
        res.clearCookie("token");
    }
    res.redirect('/login');
});

app.all('/api/*' ,(req, res, next) => {
    const key = req.cookies.token;
    if(key){
        req.headers['Authorization'] = `token ${key}`;
    } 
    next();
})

app.all('/api/*', expressproxy(apiURL))

app.get('*', (req, res) => {
    const store = initStore([headerMiddleware(req.cookies.token)]);
    const context = {};
    const resultServer = (value) => {
        for (const item of value) {
            console.log(item);
            if (!item.payload || item.error){
                if (item.type && item.type == 'ERROR_CURRENT_USER_LOADING') {
                    continue;
                }
                res.redirect('/login/')
                return;
            }
        }
        const resultText = renderToString(
        createElement(Provider, { store },
            createElement(StaticRouter, { location: req.url, context },
                <App />)
            )
        );
        const storeString = JSON.stringify(store.getState());

        res.send(template({
            body: resultText,
            title: 'FROM THE SERVER',
            store: storeString
        }));
    };
    const promises = [];
    const addToPromises = (promise) => {
        promises.push(promise)
    };
    renderToString(
    createElement(Provider, { store },
        createElement(StaticRouter, { location: req.url, context },
            <App server={ true } addToPromises={ addToPromises }/>)
        )
    );
    return Promise.all(promises).then(value => resultServer(value));
});

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);