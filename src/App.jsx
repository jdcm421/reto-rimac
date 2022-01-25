import Routes from "../src/routes/Routes";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackBarContext } from "../src/context/snackbar";
import { Snackbar, SnackbarContent } from '@material-ui/core';

const App = () => {
    const [snackBar, setSnackBar] = useState({ open: false, variant: 'default', text: '' });

    return (
        <div id="app">
            <SnackBarContext.Provider>
              <Router>
                <Routes />
              </Router>
            </SnackBarContext.Provider>
        </div>
    )
};

export default App;