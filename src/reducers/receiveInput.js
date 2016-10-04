var blankRow =
{
  order:
  [
    {
      text:[],
      location: [0,0,0]
    }
  ]
}

var initialState =
{
  notes:
  [
    blankRow
  ]
}

const receiveInput = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_ROW_FROM_USER':
      var targetRow = action.targetLocation[0]+1;
      var currentNumRows = state.notes.length;

      // //handles the first case:
      // if( (currentNumRows===1) && (state.notes[0].order[0].text[1]=== undefined) ) {
      //   targetRow = action.targetLocation[0];
      // }

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
    default:
  }
  return state;
}

module.exports = receiveInput;
