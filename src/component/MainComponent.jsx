import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getData from '../api/getData';
import data from '../api/data';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    getData();
    this.state = {
      rowsPerPage: [5,10,15],
      rows: [],
      numberOfRows: 5,
      page: 1,
      total: undefined,
      data: data.response.ITEMS
    };
    this.toDate = this.toDate.bind(this);
  }

  toDate = time => {
    var date = new Date();
    date.setTime(time);
    return date;
  }

  render() {
    console.log(this.toDate(1482181200))
    console.log(this.state.data);
    var url = 'https://relefopt.ru';
    return (
      <div className="App">

        {Object.keys(this.state.data).map((prop, key) =>{
          return(
            <div key={key}>
              <img src={url + this.state.data[prop].PREVIEW_PICTURE_PATH} />
              {this.state.data[prop].NAME}
              {
                this.state.data[prop].DATE
              }
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    articleReducer: store['articleReducer'].data
  }
};
export default withRouter(connect(mapStateToProps)(App));

