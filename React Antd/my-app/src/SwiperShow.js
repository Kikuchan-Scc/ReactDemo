import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { css } from "@emotion/css";
import ShowPages from "./components/Show/ShowPages";

const SwiperShow = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={ShowPages}></Route>
            </Switch>
        </Router>
    )
}

export default SwiperShow