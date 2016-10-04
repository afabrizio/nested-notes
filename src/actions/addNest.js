const addNest = (dispatch, selected, nestDirection, nestTargetLocation) => {
  //Toogle the available tool buttons:
  dispatch({type: 'SELECT_TEXT'});

  //Change text color of elements with a nest:
  var textColor = '';
  if (nestDirection === 'up') {
    textColor = 'blueNest'
  }
  if (nestDirection === 'down') {
    textColor = 'redNest'
  }
  selected.forEach((element) => element.classList.add(textColor))


  return (
    {
      type: 'ADD_NEST',
      payload:
        {
          selected: selected,
          nestDirection: nestDirection,
          nestTargetLocation: nestTargetLocation
        }
    }
  )
}

module.exports = addNest;
