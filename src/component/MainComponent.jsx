import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { TablePagination } from 'material-ui/Table';

import TablePaginationActionsWrapped from './TablePaginationAction';
import articlesData from '../api/data';

const styles = theme => ({
  root: {
    width: '50%',
    maxWidth: 800,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
});

class MainComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      rowsPerPage: 6,
      page: 0,
      rowsPerPageOptions: [6, 10, 16]
    };
    this.toDate = this.toDate.bind(this);
  }

  toDate = time => {
    var date = new Date(time);
    return date.toLocaleString();
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const allData = articlesData.response.ITEMS;
    const { rowsPerPage, page, rowsPerPageOptions } = this.state;
    return (
      <div  className={classes.root}>
        <List>
            {Object.keys(allData).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((prop, key) =>{
              return(
                <ListItem key={key}>
                  <Avatar>
                    <img src={'https://relefopt.ru' + allData[prop].PREVIEW_PICTURE_PATH} />
                  </Avatar>
                  <ListItemText primary={allData[prop].NAME} secondary={this.toDate(allData[prop].DATE)} />
                </ListItem>
              )
            })}
          <TablePagination
            colSpan={3}
            count={Object.keys(allData).length}
            labelRowsPerPage="Строк на странице:"
            rowsPerPageOptions={rowsPerPageOptions}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            Actions={TablePaginationActionsWrapped}
          />
        </List>
      </div>
    );
  }
}

MainComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainComponent);

