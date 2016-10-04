const getSelection = (dispatch) => {
  dispatch(
    {type: 'GET_SELECTED_ELEMENTS'}
  );
  dispatch(
    {type: 'GUIDE_TO_NEST_DIRECTION_BTN'}
  );
}

module.exports = getSelection;
