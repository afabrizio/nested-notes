const React = require('react');
const {connect} = require('react-redux');
const receiveUserInput = require('./actions/receiveUserInput.js');

const mapStateToProps = (state) => {
  return {
    notes: state.receiveInput.notes,
    location: state.receiveInput.currentInputLocation,
    inputMarker: state.receiveInput.inputMarker,
    placeInputHere: state.receiveInput.placeInputHere
  }
}

const newText  = ({notes, location, inputMarker, placeInputHere, dispatch}) => {
  var userInputField = document.getElementById('user-input');
  if (userInputField) {
    userInputField.value='';
  }

  const nestInputField =
    <div className='row'>
      <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
      </div>
      <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
        <input
          id='user-input'
          placeholder={'[ '+location[0]+', '+location[1]+', '+location[2]+' ]'}
          style={{width: '100%'}}
          onKeyUp={(e) => dispatch(receiveUserInput(e, dispatch))}
        />
      </div>
    </div>

  if(placeInputHere === 'default') {
    var defaultInputField =
    <div className='row'>
      <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
      </div>
      <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
        <input
          id='user-input'
          placeholder={'[ '+location[0]+', '+location[1]+', '+location[2]+' ]'}
          style={{width: '100%'}}
          onKeyUp={(e) => dispatch(receiveUserInput(e, dispatch))}
        />
      </div>
    </div>
  }
  function notDefaultInputGenerator(R_key, O_key) {
    var temp = R_key+', '+O_key+', 1';
    var inputMarkerString = inputMarker[0]+', '+inputMarker[1]+', '+inputMarker[2];
    if ((temp === inputMarkerString) && (placeInputHere === 'not-default')) {
      console.log('found nest at: '+R_key+O_key+'1')
      console.log(nestInputField)
    }
    return nestInputField;
  }

  return (
    <div>
      <div>
      {notes.map(
        (row, R_key) =>
          row.order.map(
            (order, O_key) => {notDefaultInputGenerator(R_key, O_key)
              return (
                <div className='row'>
                  <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                    <span key={R_key}>{R_key}</span>
                  </div>
                  <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                    <span key={O_key}>{O_key}</span>
                  </div>
                  <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                    {order.text.map(
                      (word,key) => <span key={key}>{word + ' '}</span>
                    )}
                  </div>
                </div>
              )
            }
          )
        )
      }
      </div>
      {defaultInputField}
    </div>
  )
}

module.exports = connect(mapStateToProps)(newText);
