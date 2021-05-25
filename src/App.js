import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

import store from './store';

import Header from "./components/utils/Header";
import Navigation from "./layouts/Navigation";
import Home from "./pages/Home";
import Technicians from "./pages/Technicians";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="min-h-screen bg-gray-100">
                    <div className="bg-indigo-600 pb-32">
                        <Navigation/>
                        <Header title={'System Logs'}/>
                    </div>

                    <main className="-mt-32">
                        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                            <Switch>
                                <Route path={'/'} exact component={Home}/>
                                <Route path={'/technicians'} exact component={Technicians}/>
                            </Switch>
                        </div>
                    </main>

                </div>
            </Router>
        </Provider>
    );
};

export default App;
