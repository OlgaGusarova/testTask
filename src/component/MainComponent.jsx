import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Card, CardHeader} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Pagination from 'pagination-material-ui';

import articlesData from '../api/data';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();


class MainComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      rowsPerPage: [6,12,24],
      rows: [],
      numberOfRows: 6,
      page: 1,
      total: undefined
    };
    this.toDate = this.toDate.bind(this);
    this.updateRows = this.updateRows.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toDate = time => {
    var date = new Date(time);
    return date.toLocaleString();
  }

  // componentWillMount() {
  //     articlesData.getRows(this.state)
  //       .then((updatedState) => {
  //             this.setState(updatedState);
  //         });
  // }
  //
  updateRows(state){
      articlesData.getRows(state)
          .then((updatedState) => {
              this.setState(updatedState);
          });
  }

  onChange(currentPage, perPage) {
      // Do some pagination thing here
  }

  render() {
    var allData = articlesData.response.ITEMS;
    return (
      <div className="App">
        <MuiThemeProvider>
        <Card>
            {Object.keys(allData).map((prop, key) =>{
              return(
                <div key={key}>
                  <CardHeader
                      title={allData[prop].NAME}
                      subtitle={this.toDate(allData[prop].DATE)}
                      avatar={'https://relefopt.ru' + allData[prop].PREVIEW_PICTURE_PATH}
                  />
                </div>
              )
            })}
            <Pagination total={100} perPage={10} onChange={this.onChange}/>
            {/*<Pagination*/}
                {/*total={this.state.total}*/}
                {/*rowsPerPage={this.state.rowsPerPage}*/}
                {/*page={this.state.page}*/}
                {/*numberOfRows={this.state.numberOfRows}*/}
                {/*updateRows={this.updateRows}*/}
            {/*/>*/}
        </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default MainComponent;

