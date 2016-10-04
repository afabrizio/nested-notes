const executeToolbarCommand = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SELECTED_ELEMENTS':
      const selectedRange = document.getSelection();
      const selectedStart = selectedRange.baseNode.parentNode;
      const selectedEnd = selectedRange.focusNode.parentNode;
      console.log(selectedStart)
      console.log(selectedEnd)
      console.log(selectedRange.getRangeAt(0))
      state = Object.assign({}, state, {selected: selectedStart});
      break;
    default:
  }
  return state;
}

module.exports = executeToolbarCommand;
