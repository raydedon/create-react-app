import React from 'react'
import classes from './app.scss';
import logo from './logo.svg';

function App() {
    return (
        <div className={classes.app}>
            <header className={classes.appHeader}>
                <img src={logo} className={classes.appLogo} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={classes.appLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
