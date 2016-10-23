const getSelection = (dispatch) => {
  //catch selection errors
  try {
    document.getSelection().anchorNode.parentNode.parentNode.parentNode.children[1].textContent
  } catch (e) {
    console.log('selection error identified')
    return;
  }
  if( isNaN(parseInt(document.getSelection().anchorNode.parentNode.parentNode.parentNode.children[1].textContent)) === true) {
    return;
  }

  //toggle button visibilities
  document.getElementById('select-text').classList.add('hidden');
  document.getElementById('nest-direction-div').classList.remove('hidden');
  document.getElementById('add-nest').classList.remove('hidden');

  //handle nesting from order=0 cases separately:
  let selectedOrder = parseInt(document.getSelection().anchorNode.parentNode.parentNode.parentNode.children[1].textContent);
  if(selectedOrder === 0) {
    if(document.getElementById('nest-direction').classList.contains('nest-up')) {
      dispatch(
        {type: 'STORE_NEST_DIRECTION', payload: 'up'}
      );
    } else {
      dispatch(
        {type: 'STORE_NEST_DIRECTION', payload: 'down'}
      );
    }
    dispatch(
      {type: 'GET_SELECTED_ELEMENTS'}
    );
    dispatch(
      {type: 'UPDATE_PLACE_INPUT_HERE', payload: 'not-default'}
    )
  } else {
    document.getElementById('nest-direction-div').classList.add('hidden');
    if(selectedOrder > 0) {
      dispatch(
        {type: 'STORE_NEST_DIRECTION', payload: 'up'}
      );
    }
    if(selectedOrder < 0) {
      dispatch(
        {type: 'STORE_NEST_DIRECTION', payload: 'down'}
      );
    }
    dispatch(
      {type: 'GET_SELECTED_ELEMENTS'}
    );
    dispatch(
      {type: 'UPDATE_PLACE_INPUT_HERE', payload: 'not-default'}
    )
  }
}

module.exports = getSelection;
