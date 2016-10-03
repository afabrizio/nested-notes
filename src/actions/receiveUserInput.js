

function receiveUserInput(e) {
  if (e.keyCode === 13) {
    const store = require('./../store.js');
    let state = store.getState();
    let row = state.receiveLine.lines.length + 1;
    //Gather and store the line of text the user just input:
    let inputString = e.target.value;
    var newLine = {
      id: [row, 0, 'instance'],
      stringParts: inputString.split(' ')
    }
    return {type: 'NEW_LINE_FROM_USER', payload: newLine};
  } else {
    return {type: "UNHANDLED"};
  }
}

module.exports = receiveUserInput;
