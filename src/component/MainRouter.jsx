import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import MainComponent from './MainComponent';
import ArticleDescription from './ArticleDescription';

class MainRouter extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={MainComponent} />
          <Route path='/:id' component={ArticleDescription} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(MainRouter);