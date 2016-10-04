const React = require('react');
const {connect} = require('react-redux');
const receiveUserInput = require('./actions/receiveUserInput.js');

const mapStateToProps = (state) => {
  return {
    notes: state.receiveInput.notes
  }
}

const newText  = ({notes, dispatch}) => {
  var userInputField = document.getElementById('user-input');
  if (userInputField) {
    userInputField.value='';
  }

  return (
    <div>
      <div>
        {notes.map(
          (row, key) =>
            <div className='row'>
              <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                <span key={key}>{row.order[0].location[0]}</span>
              </div>
              <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                <span key={key}>{row.order[0].location[1]}</span>
              </div>
              <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                {row.order[0].text.map(
                  (word, key) => <span key={key}>{word + ' '}</span>
                )}
              </div>
            </div>
        )}
      </div>
      <div className='row'>
        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
        </div>
        <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
          <input id='user-input' style={{width: '100%'}} onKeyUp={(e) => dispatch(receiveUserInput(e))} />
        </div>
      </div>
    </div>
  )
}

module.exports = connect(mapStateToProps)(newText);
