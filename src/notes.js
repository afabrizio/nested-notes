const React = require('react');
const {connect} = require('react-redux');

const Line  = ({isFirstLine, lines, line}) => {
  console.log(lines);
  return (
    <div>
      {for (var i=0; i<lines.length; i++) {
        var stringParts = lines[i].stringParts;
        <div>
          <span>{'ROW '}</span>
          <span>{'ORDER'}</span>
          {stringParts.forEach((word) =>
            <span>{word + ' '}</span>)
          }
        </div>
      }}
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
