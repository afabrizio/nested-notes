const React = require('react');
const {connect} = require('react-redux');
const receiveUserInput = require('./actions/receiveUserInput.js');

const mapStateToProps = (state) => {
  return {
    notes: state.receiveInput.notes,
    location: state.receiveInput.currentInputLocation
  }
}

const newText  = ({notes, location, dispatch}) => {
  var userInputField = document.getElementById('user-input');
  if (userInputField) {
    userInputField.value='';
  }
  const theInputField =
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

  return (
    <div>
      <div>
        {notes.map(
          (row, key) =>
            <div className='row'>
              <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                <span key={key}>{key}</span>
              </div>
              <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                <span key={key}>{location[1]}</span>
              </div>
              <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                {row.order[0].text.map(
                  (word,key) => <span key={key}>{word + ' '}</span>
                )}
              </div>
            </div>
        )}
      </div>
      {theInputField}
    </div>
  )
}

module.exports = connect(mapStateToProps)(newText);
