const getSelection = (dispatch) => {
  dispatch(
    {type: 'GET_SELECTED_ELEMENTS'}
  );
  dispatch(
    {type: 'GUIDE_TO_NEST_DIRECTION_BTN'}
  );
  dispatch(
    {type: 'STORE_NEST_DIRECTION'}
  )
}

module.exports = getSelection;
