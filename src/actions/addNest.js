const addNest = (dispatch, lastSelected, nestDirection) => {
  //toggle button visibilities:
  document.getElementById('select-text').classList.remove('hidden');
  document.getElementById('nest-direction-div').classList.add('hidden');
  document.getElementById('add-nest').classList.add('hidden');

  //Derive nestTargetLocation:
  const parentDiv = lastSelected.selected[0].parentNode.parentNode.children;
  const spawnLocation = [
    parseInt(parentDiv[0].firstChild.textContent),
    parseInt(parentDiv[1].firstChild.textContent),
    1
  ];
  var nestTargetLocation = [];
  switch (nestDirection) {
    case 'up':
      nestTargetLocation = [spawnLocation[0], spawnLocation[1]+1, spawnLocation[2]];
      break;
    case 'down':
      nestTargetLocation = [spawnLocation[0], spawnLocation[1]-1, spawnLocation[2]];
      break;
    default:
  }

  dispatch ({type: 'UPDATE_NEST_SPAWNS_ARRAY'})

  //Toogles the available tool buttons:
  dispatch({type: 'SELECT_TEXT'});

  dispatch({type: 'UPDATE_PLACE_INPUT_HERE', payload: 'not-default'});

  //change the marker in the state object that indicates where the input field should be:
  dispatch({type: 'UPDATE_INPUT_MARKER', payload: nestTargetLocation});

  //add nest to the notes property of the state object:
  dispatch(
    {
      type: 'NEW_NEST_FROM_USER',
      payload: {
        nestTargetLocation: nestTargetLocation
      }
    }
  )

  dispatch(
    {
      type: 'UPDATE_CURRENT_INPUT_LOCATION',
      payload:
      {
        condition: 'not-default',
        location: nestTargetLocation
      }
    }
  )

}

module.exports = addNest;
