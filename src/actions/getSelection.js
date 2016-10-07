const getSelection = (dispatch) => {
  document.getElementById('select-text').classList.add('hidden');
  document.getElementById('nest-direction-div').classList.remove('hidden');
  document.getElementById('add-nest').classList.remove('hidden');

  dispatch(
    {type: 'STORE_NEST_DIRECTION'}
  );
  dispatch(
    {type: 'GET_SELECTED_ELEMENTS'}
  );
  dispatch(
    {type: 'GUIDE_TO_NEST_DIRECTION_BTN'}
  );
  dispatch(
    {type: 'UPDATE_PLACE_INPUT_HERE', payload: 'not-default'}
  )
}

module.exports = getSelection;
