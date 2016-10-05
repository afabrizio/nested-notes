

function receiveUserInput(e, dispatch) {
  if (e.keyCode === 13) {
    const store = require('./../store.js');
    const state = store.getState();
    const placeInputWhere = state.receiveInput.placeInputWhere

    if (placeInputWhere === 'default') {
      dispatch(
        {
          type: 'UPDATE_CURRENT_INPUT_LOCATION',
          payload: {condition: 'default', location: [state.receiveInput.notes.length + 1, 0, null]}
        }
      )
    }
    if (placeInputWhere === 'not-default') {
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
    return {type: 'NEW_ROW_FROM_USER', targetLocation: currentInputLocation, payload: newText};
  } else {
    return {type: "UNHANDLED"};
  }
}

module.exports = receiveUserInput;
