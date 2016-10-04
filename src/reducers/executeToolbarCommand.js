const executeToolbarCommand = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SELECTED_ELEMENTS':
      function middleElementAccessors(length, selectedRange) {
        const middleElements = [];
        const baseAccessorString = 'selectedRange.anchorNode.parentNode';
        const additionalAccessorString = '.nextSibling';
        const middleElementsAccessors = [];
        for (let i=1; i<=length; i++) {
          let accessor = baseAccessorString;
          for (let j=0; j<i; j++) {
            accessor += additionalAccessorString;
          }
          middleElementsAccessors.push(accessor);
        }
        return middleElementsAccessors;
      }

      const selection = [];
      const selectedRange = document.getSelection();
      const selectedStart = selectedRange.anchorNode.parentNode;
      const selectedEnd = selectedRange.focusNode.parentNode;
      const selectedLength = selectedRange.toString().split(' ').length;
      if(selectedLength === 1) {
        selection.push(selectedStart);
      } else {
        const middleElements = middleElementAccessors(selectedLength - 2, selectedRange)
          .map( (accessor) => eval(accessor) );
        const nextElement = selectedStart.nextSibling;
        selection.push(selectedStart);
        middleElements.forEach( (element) => selection.push(element) );
        selection.push(selectedEnd);
      }

      state = Object.assign({}, state, {selected: selection});
      break;
    default:
  }
  return state;
}

module.exports = executeToolbarCommand;
