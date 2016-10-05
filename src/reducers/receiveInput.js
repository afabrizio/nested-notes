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
  placeInputWhere: 'default',
  currentInputLocation: [1,0,null]
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

    case 'NEW_ORDER_FROM_USER':

      break;

    case 'NEW_SEQUENCE_FROM_USER':

      break;

    case 'UPDATE_CURRENT_INPUT_LOCATION':
      if (action.payload.condition === 'default') {
        state = Object.assign({}, state, {currentInputLocation: action.payload.location})
      }
      break;

    default:
  }
  return state;
}

module.exports = receiveInput;
