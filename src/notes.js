const React = require('react');
const {connect} = require('react-redux');

const Line  = ({lines}) =>
    <div>
      <div>
        {lines.map(
          (line, key) =>
            <div key={key}>
              <span key={key}>row{line.id[0]}</span>
              <span key={key}>order{line.id[1]}</span>
              {line.stringParts.map(
                (word, key) => <span key={key}>{word + ' '}</span>
              )}
            </div>
        )}
      </div>
      <div>
        <input className="user-input"/>
      </div>
    </div>

const mapStateToProps = (state) => {
  return {
    lines: state.receiveLine.lines
  }
}

module.exports = connect(mapStateToProps)(Line);
