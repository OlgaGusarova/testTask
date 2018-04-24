import axios from 'axios';
import store from '../redux/Store';

var getArticles = function(data) {
  store.dispatch({
    type: 'ALL_DATA_GET',
    allData: data
  })
  // axios.get('https://relefopt.ru/v1/content/news/?access_token=a75505308b96b2135d669fb227ef348c04ece879')
  //   .then(response => {
  //     store.dispatch({
  //       type: 'ALL_DATA_GET',
  //       data: response.data.response.ITEMS
  //     })
  //   });
};

export default getArticles;