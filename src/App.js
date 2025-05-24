import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render () {
    return (
      <div>
        <ErrorBoundary>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
