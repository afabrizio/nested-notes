var initialState =
{
  lines: [],
  isFirstLine: true,
  line:
    {
      id: [0,0],
      words: []
    }
}

const receiveLine = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_LINE_FROM_USER':
      state = Object.assign({}, state,
        {
          line: action.payload,
          isFirstLine: false,
          lines: state.lines.concat(action.payload)
        }
      );
      break;
    default:
  }
  return state;
}

module.exports = receiveLine;
