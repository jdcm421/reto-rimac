import React from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import HomeComponent from "../components/views/HomeComponent"
export default class Routes extends React.PureComponent {

    render() {
        return (
            <Switch>
                <PublicRoute path="/" component={HomeComponent} />
            </Switch>
        );
    }
}