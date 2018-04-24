import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { TablePagination } from 'material-ui/Table';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import getData from '../api/getData';
import store from '../redux/Store';
import TablePaginationActionsWrapped from './TablePaginationAction';
import articlesData from '../api/data';

const styles = theme => ({
  root: {
    width: '50%',
    maxWidth: 600,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class MainComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    getData(articlesData.response.ITEMS);
    this.state = {
      sortBy: '',
      rowsPerPage: 6,
      page: 0,
      rowsPerPageOptions: [6, 12, 24],
      allData: articlesData.response.ITEMS
    };
    this.toDate = this.toDate.bind(this);
  }

  toDate = time => {
    var date = new Date(time);
    return date.toLocaleString();
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChangeSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
    store.dispatch({
      type: 'SORT_DATA',
      sortBy: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { allData, rowsPerPage, page, rowsPerPageOptions } = this.state;

    return (
      <div  className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select">Сортировать по</InputLabel>
          <Select
            value={this.state.sortBy}
            onChange={this.handleChangeSelect}
            inputProps={{
              name: 'sortBy',
              id: 'select',
            }}
          >
            <MenuItem value='NAME'>Названию</MenuItem>
            <MenuItem value='DATE'>Дате добавления</MenuItem>
          </Select>
        </FormControl>
        <List>
          {Object.keys(this.props.allData).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((prop, key) =>{
            return(
              <ListItem key={key}>
                <Avatar>
                  <img src={'https://relefopt.ru' + this.props.allData[prop].PREVIEW_PATH} alt='articleImg' />
                </Avatar>
                <ListItemText primary={this.props.allData[prop].NAME} secondary={this.toDate(this.props.allData[prop].DATE)} />
                <a href={'/' + this.props.allData[prop].ID} >подробнее</a>
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

const mapStateToProps = function (store) {
  return {
    allData: store['articleReducer'].allData
  }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps)(MainComponent)));

