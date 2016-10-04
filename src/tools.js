const React = require('react');
const {connect} = require('react-redux');
const getSelection = require('./actions/getSelection.js');

const Tools = ({dispatch}) => {
  return (
    <div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="nesting-options">
        <b>Nesting Options</b>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="select-text" className="visible" onClick={()=>dispatch(getSelection())}>Select Text</button>
      </div>
      <div id="slider" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 grayed">
        <span className="fa fa-angle-up fa-2x"></span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className="fa fa-angle-down fa-2x"></span>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="add-nest" className="grayed">Add Nest</button>
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
  return {

  }
}

module.exports = connect(mapStateToProps)(Tools);
