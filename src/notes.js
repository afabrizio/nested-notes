const React = require('react');
const {connect} = require('react-redux');
const receiveUserInput = require('./actions/receiveUserInput.js');

const mapStateToProps = (state) => {
  return {
    notes: state.receiveInput.notes,
    location: state.receiveInput.currentInputLocation,
    inputMarker: state.receiveInput.inputMarker,
    placeInputHere: state.receiveInput.placeInputHere,
    nestSpawns: state.executeToolbarCommand.nestSpawns
  }
}

const newText  = ({notes, location, inputMarker, placeInputHere, nestSpawns, dispatch}) => {
  //clear any remaining text in the input
  var userInputField = document.getElementById('user-input');
  if (userInputField) {
    userInputField.value='';
  }

  const nestInputField =
    <div className='row'>
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <input
          id='user-input'
          placeholder={'enter text for row '+location[0]+', order '+location[1]}
          style={{width: '100%', fontStyle: 'Italic'}}
          onKeyUp={(e) => dispatch(receiveUserInput(e, dispatch))}
        />
      </div>
    </div>
  let defaultInputField = <div></div>
  if(placeInputHere === 'default') {
    defaultInputField =
    <div className='row'>
      <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
      </div>
      <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
        <input
          id='user-input'
          placeholder={'enter text for row '+location[0]+', order '+location[1]}
          style={{width: '100%'}}
          onKeyUp={(e) => dispatch(receiveUserInput(e, dispatch))}
        />
      </div>
    </div>
  }
  function notDefaultInputGenerator(R_key, O_key, key) {
    var temp = R_key+', '+O_key+', 1';
    var inputMarkerString = inputMarker[0]+', '+inputMarker[1]+', '+inputMarker[2];
    if ((temp === inputMarkerString) && (placeInputHere === 'not-default')) {
    }
    return <div key={key}>{nestInputField}</div>
  }

  function styleNestSpawns(nestSpawns, currentRenderLocation, W_key) {
    var className = '';
    nestSpawns.forEach((spawn) => {
      if(spawn.row === currentRenderLocation[0] && spawn.order === currentRenderLocation[1] && spawn.word === W_key) {
        switch (spawn.direction) {
          case 'up':
            className = 'hasNest blueNest';
            break;
          case 'down':
            className = 'hasNest redNest';
            break;
          default:
        }
      }
    })
    return className;
  }
  var className = null;
  return (
    <div>
      <div>
      {notes.map(
        (row, R_key) =>
          row.order.map(
            (order, O_key) => {
              return(
                <div className='row'>
                  <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                    <span key={R_key}>{R_key}</span>
                  </div>
                  <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                    <span key={O_key}>{order.location[1]}</span>
                  </div>
                  <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                    {order.text.map(
                      (word, W_key) => {
                        if(word === '*~(#)~*'){
                          return notDefaultInputGenerator(R_key, O_key, W_key, order.location);
                        }
                        else {
                          if(order.location[1] > 0) {
                            className = styleNestSpawns(nestSpawns, order.location, W_key);
                            return (
                              <span key={W_key} style={{color: 'rgb(12,83,148)'}} className={className}>
                                {word + ' '}
                              </span>)
                          } else if(order.location[1] < 0) {
                            className = styleNestSpawns(nestSpawns, order.location, W_key);
                            return (
                              <span key={W_key} style={{color: 'rgb(148,0,0)'}} className={className}>
                                {word + ' '}
                              </span>)
                          }
                          else {
                            className = styleNestSpawns(nestSpawns, order.location, W_key);
                            return (
                              <span key={W_key} className={className}>
                                {word + ' '}
                              </span>)
                          }
                        }
                      }
                    )}
                  </div>
                </div>
              )
            }
          )
        )}
      </div>
      {defaultInputField}
    </div>
  )
}

module.exports = connect(mapStateToProps)(newText);
