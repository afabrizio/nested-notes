

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
        //figures out where to inject the text, since orders can be negative values but array indicies cannot be negative.
        var targetLocation = state.receiveInput.currentInputLocation;
        var orders = state.receiveInput.notes[targetLocation[0]].order;
        var targetOrder = null;
        orders.forEach((order, key) => {
          if (order.location[1] === targetLocation[1]) {
            targetOrder = key;
          }
        })
        var injectLocation = [
          targetLocation[0],
          targetOrder,
          targetLocation[2]
        ];
        dispatch({
            type: 'INJECT_NEST_TEXT',
            payload: {
              targetLocation: injectLocation,
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
