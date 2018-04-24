const articleReducer = function (state = {}, action) {
  switch (action.type) {
    case 'ALL_DATA_GET':
      return Object.assign({}, state, {
        allData: action.allData
      });

    case 'SORT_DATA':
      return Object.assign({}, state, {
        allData:
          Object.keys(state.allData).sort((a, b) => {
            return state.allData[a][action.sortBy] - state.allData[b][action.sortBy];
          })
      });

    default :
      return {
        ...state,
        allData: {}
      };
  }
};
export default articleReducer;