const React = require('react');
const {connect} = require('react-redux');

const Line  = ({isFirstLine, lines, line}) => {

  // function reactLine(aLine) {
  //   const row = <span>{aLine.id[0]}</span>;
  //   const order= <span>{aLine.id[1]}</span>;
  //   const words= aLine.stringParts.map((word) => <span>{word + ' '}</span> );
  //   return (
  //     <div>
  //       {row}
  //       {order}
  //       {words}
  //     </div>
  //   )
  // }
  // console.log(reactLine(lines[0]));

  return (
    <div>
      <div>
        <div>
          <span>{'ROW '}</span>
          <span>{'ORDER'}</span>
          <span>{' word' + ' '}</span>
        </div>
      </div>
      <div>
        <input className="user-input"/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isFirstLine: state.receiveLine.isFirstLine,
    lines: state.receiveLine.lines,
    line: state.receiveLine.line
  }
}

module.exports = connect(mapStateToProps)(Line);
