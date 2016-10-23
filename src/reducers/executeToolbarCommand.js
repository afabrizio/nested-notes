const initialState =
  {
    lastSelected: [],
    nestSpawns: []
  }

const executeToolbarCommand = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SELECTED_ELEMENTS':
      //identify the selected elements:
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
      selection.forEach((word) => {
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
      //store all nestSpawn data (location & direction) in the nestSpawns prop of the state object:
      let nestSpawnsCopy = state.nestSpawns.concat();
      let locationInfo = state.lastSelected[0].parentNode.parentNode.children;
      state.lastSelected.forEach((word, key) =>
        nestSpawnsCopy.push(
          {
            row: parseInt(locationInfo[0].textContent),
            order: parseInt(locationInfo[1].textContent),
            sequence: 1,
            word: key,
            direction: state.nestDirection
          }
        )
      )
      state = Object.assign({}, state, {nestSpawns: nestSpawnsCopy});

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

    case 'UPDATE_LAST_SELECTED':
      let lastSelectedCopy = state.lastSelected.concat();
      lastSelectedCopy.forEach((element) => {
        if (state.nestDirection === 'up') {
          element.className = 'blueNest';
        } else {
          element.className = 'redNest';
        }
      });
      state = Object.assign({}, state, {lastSelected: lastSelectedCopy});

    default:
  }
  return state;
}

module.exports = executeToolbarCommand;
