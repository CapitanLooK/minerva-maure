import React from 'react';
import '../../index.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Page } from '../page/Page'
import { NotFound } from "../notfound/NotFound";
import {ItemListContainer } from '../../pages/itemlistcontainer/ItemListContainer'
import { ItemDetailContainer } from '../../pages/itemdetailcontainer/ItemDetailContainer'
import { Cart } from '../cart/Cart';

export const Home = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Page>
              <ItemListContainer />
            </Page>
          </Route>
          <Route path='/category/:categoryId'>
          <Page>
              <ItemListContainer />
          </Page>
          </Route>
          <Route path='/item/:id'>
          <Page>
            <ItemDetailContainer />
          </Page>
          </Route>
          <Route path='/cart'>
            <Page>
              <Cart />
            </Page>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}
