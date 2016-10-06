

function receiveUserInput(e, dispatch) {
  if (e.keyCode === 13) {
    const store = require('./../store.js');
    const state = store.getState();
    const placeInputHere = state.receiveInput.placeInputHere

    switch (placeInputHere) {
      case 'default':
        dispatch({
            type: 'UPDATE_CURRENT_INPUT_LOCATION',
            payload: {
              condition: 'default',
              location: [state.receiveInput.notes.length + 1, 0, null]
            }
        });
        var currentInputLocation = state.receiveInput.currentInputLocation
        var newText = {
          order:[{text: e.target.value.split(' '), location: currentInputLocation}]
        }
        dispatch({type: 'UPDATE_PLACE_INPUT_HERE', payload: 'default'});
        let inputMarker = currentInputLocation.concat();
        inputMarker.splice(0,1,currentInputLocation[0]+1);
        dispatch({type: 'UPDATE_INPUT_MARKER', payload: inputMarker});
        return {
            type: 'NEW_ROW_FROM_USER',
            targetLocation: currentInputLocation,
            payload: newText
        }
        break;

      case 'not-default':
        dispatch({
            type: 'INJECT_NEST_TEXT',
            payload: {
              targetLocation: state.receiveInput.currentInputLocation,
              text: e.target.value
            }
        })
        dispatch({type: 'UPDATE_PLACE_INPUT_HERE', payload: 'default'});
        dispatch({
            type: 'UPDATE_CURRENT_INPUT_LOCATION',
            payload: {
              condition: 'default',
              location: [state.receiveInput.notes.length, 0, null]
            }
        });
        break;
      default:

    }
  } else {
    return {type: 'UNHANDLED'};
  }
}

module.exports = receiveUserInput;
