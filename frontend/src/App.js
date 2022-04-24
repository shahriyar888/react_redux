import React, {Component} from 'react';
import {render} from 'react-dom'
import Headers from "./components/layaout/headers";
import {Dashboard} from "@material-ui/icons";
import Dashboardd from "./components/lead/Dashboardd";
import { Provider } from 'react-redux';
import store from "./store";
export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <React.Fragment>

                    <Headers/>
                    <div className="container">
                        <Dashboardd/>
                    </div>
                </React.Fragment>
             </Provider>
        )
    }
}

const appDiv = document.getElementById('app')
render(<App/>, appDiv)