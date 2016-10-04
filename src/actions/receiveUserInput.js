

function receiveUserInput(e) {
  if (e.keyCode === 13) {
    const store = require('./../store.js');
    let state = store.getState();
    let row = state.receiveInput.notes.length;
    var targetLocation = [row,0,0]
    //Gather and store the line of text the user just input:
    let inputString = e.target.value;
    var newText = {
      order:
      [
        {
          text: inputString.split(' '),
          location: targetLocation
        }
      ]
    }
    return {type: 'NEW_ROW_FROM_USER', targetLocation: targetLocation, payload: newText};
  } else {
    return {type: "UNHANDLED"};
  }
}

module.exports = receiveUserInput;
