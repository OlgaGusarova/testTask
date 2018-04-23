const articleReducer = function (state = {}, action) {
  switch (action.type) {
    case 'ALL_DATA_GET':
      return Object.assign({}, state, {
        data: action.data
      });

    default :
      return {
        ...state,
        data: {}
      };
  }
};
export default articleReducer;