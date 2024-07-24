import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
// nós utilizamos o Switch para colocar nossas rotas, o nome dele agora é Routes

import Home from "./Pages/Home"
import Users from './Pages/users'

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} /> {/*o component se chama agora element. E o elemento que fica dentro agora deve ficar dentro das {<Home/>} */}
                <Route exact path="/usuarios" component={Users} /> {/* na nova forma, o Route não precisa mais do exact para saber exatamente o nome da rota */}
            </Switch>
        </Router>
    )

}

export default Routes