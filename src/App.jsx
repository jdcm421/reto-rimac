import Routes from "../src/routes/Routes";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {

    return (
        <Router>
            <Routes />
        </Router>
    );
};

export default App;