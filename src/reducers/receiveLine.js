var initialState =
{
  lines: []
}

const receiveLine = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_LINE_FROM_USER':
      state = Object.assign({}, state,
        {
          lines: state.lines.concat(action.payload)
        }
      );
      break;
    default:
  }
  return state;
}

module.exports = receiveLine;
