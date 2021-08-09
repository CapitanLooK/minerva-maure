import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Page } from '../page/Page'
import { Banner } from '../../components/banner/Banner'
import { NotFound } from "../notfound/NotFound";
import {ItemListContainer } from '../itemlistcontainer/ItemListContainer'
import { ItemDetailContainer } from '../itemdetailcontainer/ItemDetailContainer'
import { Cart } from '../cart/Cart';
import '../../index.css'

export const Home = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/minerva-maure">
            <Page>
              <Banner />
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
