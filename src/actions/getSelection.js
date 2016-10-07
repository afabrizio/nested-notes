const getSelection = (dispatch) => {
  document.getElementById('select-text').classList.add('hidden');
  document.getElementById('nest-direction-div').classList.remove('hidden');
  document.getElementById('add-nest').classList.remove('hidden');

  //depending on which order is being nested:
  if(parseInt(document.getSelection().anchorNode.parentNode.parentNode.parentNode.children[1].textContent) === 0) {
    dispatch(
      {type: 'STORE_NEST_DIRECTION'}
    );
    dispatch(
      {type: 'GET_SELECTED_ELEMENTS'}
    );
    dispatch(
      {type: 'UPDATE_PLACE_INPUT_HERE', payload: 'not-default'}
    )
  } else {
    document.getElementById('nest-direction-div').classList.add('hidden');
    dispatch(
      {type: 'GET_SELECTED_ELEMENTS'}
    );
    dispatch(
      {type: 'UPDATE_PLACE_INPUT_HERE', payload: 'not-default'}
    )
  }
}

module.exports = getSelection;
