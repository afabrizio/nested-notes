const React = require('react');
const {connect} = require('react-redux');
const getSelection = require('./actions/getSelection.js');
const addNest = require('./actions/addNest.js');

const Tools = ({dispatch, lastSelected, nestDirection, nestTargetLocation}) => {
  return (
    <div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="nesting-options">
        <b>Nesting Options</b>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="select-text" onClick={()=>getSelection(dispatch)}>
          Select Text
        </button>
      </div>
      <div id="nest-direction-div" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 hidden">
        <span className="fa fa-angle-up fa-2x"></span>
        <div id="nest-direction" className="nest-up">
          <button onClick={(e)=>{
            var toggler = e.target.parentNode;
            if (toggler.className === 'nest-up') {
              toggler.className = 'nest-down';
            } else {
              toggler.className = 'nest-up';
            }
            dispatch({type: 'STORE_NEST_DIRECTION'});
            dispatch({type: 'UPDATE_LAST_SELECTED'});
            // dispatch({type: 'UPDATE_NEST_SPAWNS'});
          }}>
          </button>
        </div>
        <span className="fa fa-angle-down fa-2x"></span>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="add-nest" className="hidden"
        onClick={()=>addNest(dispatch, lastSelected, nestDirection, nestTargetLocation)}
        >
          Add Nest
        </button>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="order-options">
        <b>Order Options</b>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="select-order" className="grayed">Select Order</button>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="delete-order" className="grayed">Delete Order</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return (
    {
      lastSelected: state.executeToolbarCommand.lastSelected,
      nestDirection: state.executeToolbarCommand.nestDirection
    }
  )
}

module.exports = connect(mapStateToProps)(Tools);
