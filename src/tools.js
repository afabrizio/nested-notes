const React = require('react');
const {connect} = require('react-redux');
const getSelection = require('./actions/getSelection.js');

const Tools = ({dispatch, visibleTool}) => {
  return (
    <div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="nesting-options">
        <b>Nesting Options</b>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="select-text" onClick={()=>getSelection(dispatch)}
        style={{opacity: visibleTool === 'select-text' || false ? '1' : '.3'}}>
          Select Text
        </button>
      </div>
      <div id="slider" className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
      style={{opacity: visibleTool === 'nest-direction' || false ? '1' : '.3'}}>
        <span className="fa fa-angle-up fa-2x"></span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className="fa fa-angle-down fa-2x"></span>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="add-nest"
        style={{opacity: visibleTool === 'nest-direction' || false ? '1' : '.3'}}>
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
      visibleTool: state.executeToolbarCommand.visibleTool
    }
  )
}

module.exports = connect(mapStateToProps)(Tools);
