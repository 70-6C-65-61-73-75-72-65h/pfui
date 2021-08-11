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
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/main"]} component={Main} />
          <Route exact path={"/blog"} component={Blog} />
          <Route exact path={"/work"} component={Works} />
          <Route exact path={"/work/:id"} component={Work} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}
