import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import getData from '../api/getData';
import articlesData from '../api/data';

const styles = {
  card: {
    margin: '0 auto',
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

class ArticleDescription extends React.Component {
  constructor(props, context) {
    super(props, context);
    getData(articlesData.response.ITEMS);
    this.state = {
      sortBy: '',
    };
    this.toDate = this.toDate.bind(this);
  }

  toDate = time => {
    var date = new Date(time);
    return date.toLocaleString();
  };

  render() {
    const {classes} = this.props;
    const articleID = this.props.match.params.id;
    return (
      <div>
        {Object.keys(this.props.allData).map((prop, key) => {
          if(this.props.allData[prop].ID === articleID){
            return(
            <Card className={classes.card} key={key}>
              <CardMedia
                className={classes.media}
                image={'https://relefopt.ru' + this.props.allData[prop].PREVIEW_PICTURE_PATH}
                title="Article Image"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {this.props.allData[prop].NAME}
                </Typography>
                <Typography component="p">
                  {this.toDate(this.props.allData[prop].DATE)}
                </Typography>
              </CardContent>
            </Card>
            )
          }
        })}
      </div>
    );
  }
}

ArticleDescription.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = function (store) {
  return {
    allData: store['articleReducer'].allData
  }
};

export default withStyles(styles)(withRouter(connect(mapStateToProps)(ArticleDescription)));