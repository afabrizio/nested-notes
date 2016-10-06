var blankRow =
{
  order:
  [
    {
      text:[],
      location: [0,0,null]
    }
  ]
}

var initialState =
{
  notes:[blankRow],
  placeInputHere: 'default',
  currentInputLocation: [1,0,null],
  inputMarker: [null,null,null]
}

const receiveInput = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_ROW_FROM_USER':
      var targetRow = action.targetLocation[0]+1;
      var currentNumRows = state.notes.length;

      if (targetRow > currentNumRows) {
        state = Object.assign({}, state, {
          notes: state.notes.concat(action.payload)
        })
      } else {
        var temp = state.notes.concat();
        temp.splice(targetRow-1, 1, action.payload);
        state = Object.assign({}, state, {
          notes: temp
        })
      }
      break;

    case 'UPDATE_PLACE_INPUT_HERE':
      if (action.payload === 'default') {
        state = Object.assign({}, state, {placeInputHere: 'default'});
      }
      if (action.payload === 'not-default') {
        state = Object.assign({}, state, {placeInputHere: 'not-default'});
      }
      break;

    case 'UPDATE_CURRENT_INPUT_LOCATION':
      if (action.payload.condition === 'default') {
        state = Object.assign({}, state, {currentInputLocation: action.payload.location});
      }
      if (action.payload.condition === 'not-default') {
        state = Object.assign({}, state, {currentInputLocation: action.payload.location});
      }
      break;

    case 'UPDATE_INPUT_MARKER':
      state = Object.assign({}, state, {inputMarker: action.payload})
      break;

      case 'NEW_NEST_FROM_USER':
        const targetLocation = action.payload.nestTargetLocation;
        let notesCopy1 = state.notes.concat();
        let orders = notesCopy1[targetLocation[0]].order;
        for (let i=0; i<orders.length; i++) {
          if (orders[i].location[1] - targetLocation[1] === -1) {
            orders.splice(i-1, 0,
              {location: [targetLocation[0], targetLocation[1], null], text: ['*~(#)~*']}
            )
            break;
          }
          if (orders[i].location[1] - targetLocation[1] === 1) {
            orders.splice(i+1, 0,
              {location: [targetLocation[0], targetLocation[1], null], text: ['*~(#)~*']}
            )
            break;
          }
        }
        state = Object.assign({}, state, {notes: notesCopy1})
        break;

      case 'INJECT_NEST_TEXT':
        const theTargetLocation = action.payload.targetLocation;
        const theNestedText = action.payload.text.split(' ');
        let notesCopy2 = state.notes.concat();
        notesCopy2[theTargetLocation[0]].order[theTargetLocation[1]].text = theNestedText;
        state = Object.assign({}, state, {notes: notesCopy2});
        break;

    default:
  }
  return state;
}

module.exports = receiveInput;
