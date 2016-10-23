const initialState =
  {
    lastSelected: {},
    nestSpawns: []
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
      //identify the selected elements:
      const selection = {};
      selection.selected = [];
      const selectedRange = document.getSelection();
      const selectedStart = selectedRange.anchorNode.parentNode;
      Array.from(selectedStart.parentNode.children).forEach( (span, key) => {
        if(span === selectedStart) {
          console.log('offset is ' + key)
          selection.offset = key;
        }
      })
      const selectedEnd = selectedRange.focusNode.parentNode;
      const selectedLength = selectedRange.toString().split(' ').length;
      if(selectedLength === 1) {
        selection.selected.push(selectedStart);
      } else {
        const middleElements = middleElementAccessors(selectedLength - 2, selectedRange)
          .map( (accessor) => eval(accessor) );
        const nextElement = selectedStart.nextSibling;
        selection.selected.push(selectedStart);
        middleElements.forEach( element => selection.selected.push(element) );
        selection.selected.push(selectedEnd);
      }
      selection.selected.forEach( word => {
        if(state.nestDirection === 'up') {
          word.classList.add('blueNest');
        }
        if(state.nestDirection === 'down') {
          word.classList.add('redNest');
        }
      });
      state = Object.assign({}, state,
        {
          lastSelected: selection
        }
      );
      break;

    case 'UPDATE_NEST_SPAWNS_ARRAY':
      //store all nestSpawn data (location & direction) in the nestSpawns property of the state object:
      let nestSpawnsCopy = state.nestSpawns.concat();
      let locationInfo = state.lastSelected.selected[0].parentNode.parentNode.children;
      state.lastSelected.selected.forEach((word, key) =>
        nestSpawnsCopy.push(
          {
            row: parseInt(locationInfo[0].textContent),
            order: parseInt(locationInfo[1].textContent),
            sequence: 1,
            word: key + state.lastSelected.offset,
            direction: state.nestDirection
          }
        )
      )
      state = Object.assign({}, state, {nestSpawns: nestSpawnsCopy});
      break;

    case 'STORE_NEST_DIRECTION':
      switch (action.payload) {
        case 'up':
          state = Object.assign({}, state, {nestDirection: 'up'});
          break;
        case 'down':
          state = Object.assign({}, state, {nestDirection: 'down'});
          break;
        default:
          state = Object.assign({}, state);
      }
      break;

    case 'UPDATE_LAST_SELECTED':
      let lastSelectedCopy = Object.assign({}, state.lastSelected);
      if(lastSelectedCopy.selected) {
        lastSelectedCopy.selected.forEach((element) => {
          if (state.nestDirection === 'up') {
            element.className = 'blueNest';
          } else {
            element.className = 'redNest';
          }
        });
      }
      state = Object.assign({}, state, {lastSelected: lastSelectedCopy});
      break;

    default:
  }
  return state;
}

module.exports = executeToolbarCommand;
