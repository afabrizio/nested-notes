

function receiveUserInput(e, dispatch) {
  if (e.keyCode === 13) {
    const store = require('./../store.js');
    const state = store.getState();
    const placeInputHere = state.receiveInput.placeInputHere

    if (placeInputHere === 'default') {
      dispatch(
        {
          type: 'UPDATE_CURRENT_INPUT_LOCATION',
          payload: {condition: 'default', location: [state.receiveInput.notes.length + 1, 0, null]}
        }
      )
    }
    if (placeInputHere === 'not-default') {
      dispatch(
        {
          type: 'UPDATE_CURRENT_INPUT_LOCATION',
          payload: {condition: 'not-default', location: []}
        }
      )
    }

    let currentInputLocation = state.receiveInput.currentInputLocation
    //Gather and store the line of text the user just input:
    let inputString = e.target.value;
    var newText = {
      order:
      [
        {
          text: inputString.split(' '),
          location: currentInputLocation
        }
      ]
    }

    dispatch({type: 'UPDATE_PLACE_INPUT_HERE', payload: 'default'});
    let inputMarker = currentInputLocation.concat();
    inputMarker.splice(0,1,currentInputLocation[0]+1);
    dispatch({type: 'UPDATE_INPUT_MARKER', payload: inputMarker});

    return (
      {
        type: 'NEW_ROW_FROM_USER',
        targetLocation: currentInputLocation,
        payload: newText
      }
    )
  } else {
    return {type: "UNHANDLED"};
  }
}

module.exports = receiveUserInput;
