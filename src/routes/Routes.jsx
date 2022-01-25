import React from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";

export default class Routes extends React.PureComponent {

    render() {
        return (
            <Switch>
                <PublicRoute></PublicRoute>
            </Switch>
        );
    }
}