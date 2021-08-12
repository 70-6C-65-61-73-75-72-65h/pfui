import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "@src/components/Main";
import Blog from "@src/components/Blog";
import Work from "./Work";
import Works from "./Works";
import React, { ReactElement } from "react";

BrowserRouter;
export default function Page() {
  return (
    <main className="page">
      <Switch>
        <Route exact path={["/", "/main", "/contact"]} component={Main} />
        <Route exact path={"/blog"} component={Blog} />
        <Route exact path={"/works/:id"} component={Work} />
        <Route exact path={"/works"} component={Works} />
      </Switch>
    </main>
  );
}
