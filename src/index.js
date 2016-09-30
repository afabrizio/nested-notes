var data = {};

document.addEventListener('click', function(event) {
  switch (event.target.className) {
    case 'user-input':
      event.target.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
          //find which unique order value this belongs to:
          let children = event.target.parentNode.parentNode.childNodes;
          let row = parseInt(children[1].textContent);
          //store the user input string:
          let inputString = event.target.value;
          data = {
            id: [row, 'order', 'sequence'],
            string: inputString
          }
        }
      });
      break;
    default:
  }
  console.log(data);
});
