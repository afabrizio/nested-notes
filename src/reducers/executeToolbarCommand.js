const initialState =
  {
    selected: [],
    visibleTool: 'select-text'
  }

const executeToolbarCommand = (state = initialState, action) => {
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

    case 'GUIDE_TO_NEST_DIRECTION_BTN':
      state = Object.assign({}, state, {visibleTool: 'nest-direction'});
      break;

    case 'STORE_NEST_DIRECTION':
      const nestDirectionBtn = document.getElementById('nest-direction');
      if (nestDirectionBtn.className === 'nest-up') {
        state = Object.assign({}, state, {nestDirection: 'up'});
      } else {
        state = Object.assign({}, state, {nestDirection: 'down'});
      }
      break;

    case 'SELECT_TEXT':
      state = Object.assign({}, state, {visibleTool: 'select-text'});
      break;

    default:
  }
  return state;
}

module.exports = executeToolbarCommand;
