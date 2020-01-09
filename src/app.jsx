{{#if_eq dva true}}
import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import React from 'react';
import { BrowserRouter, Switch } from 'dva/router';
import RouteGlobal from '@/route'
import RouteWithSubRoutes from '@/route/RouteWithSubRoutes'

const app = dva({
    history: createHistory()
});


app.model(require('./models/app').default);

app.router(RouteConfig);

app.start('#root');

function RouteConfig () {
    return (
        <BrowserRouter>
            <Switch>
                {RouteGlobal.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </BrowserRouter>

    );
}

{{/if_eq}}
{{#if_eq dva false}}
import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
const App = () => {
    console.log(11153)
    return <Button>133发3</Button>
}

ReactDom.render(<App />, document.querySelector('#root'))

{{/if_eq}}