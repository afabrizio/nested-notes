const React = require('react');
const {connect} = require('react-redux');

const Line  = ({isFirstLine, lines, line}) => {

  function makeReactLine(line) {
    const row = <span>{line.id[0]}</span>;
    const order= <span>{line.id[1]}</span>;
    const words= line.stringParts.map((word) => <span>{word + ' '}</span> );
    return (
      <div>
        {row}
        {order}
        {words}
      </div>
    )
  }

  function makeReactLines(lines) {
    return (
      lines.forEach(
        (line) => ( makeReactLine(line) )
      )
    )
  }

  return (
    <div>
      <div>
        {makeReactLines(lines)}
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
