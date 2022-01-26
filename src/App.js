import React, { Component } from 'react';
import Directory from './components/MainComponent';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
