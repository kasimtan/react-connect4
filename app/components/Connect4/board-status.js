import React from 'react';
import classNames from 'classnames';

export default React.createClass({

  /**
   * Required properties
   * @type {Object}
   */
  propTypes: {
    // Restart function
    restart: React.PropTypes.func.isRequired
  },

  /**
   * Render things
   * @return {JSX}
   */
  render() {

    // Next turn
    let nextTurn;

    if (this.props.board.isActive) {

      let nextPlayerClasses = classNames({
        'connect4-cell': true,
        'connect4-cell--mini': true,
        'connect4-cell--mini': true,
        'connect4-cell--red': (this.props.board.nextPlayer === 'red'),
        'connect4-cell--blue': (this.props.board.nextPlayer === 'blue')
      });

      nextTurn = <div>
        <div className="connect4-label">Next turn:</div>
        <div className={nextPlayerClasses}></div>
      </div>;

    } else {
      nextTurn = <div className="connect4-label connect4-label--failure">Game over!</div>;
    }

    return (
      <div className="connect4-status">

          <div className="connect4-status-nextturn">
            {nextTurn}
          </div>

          <p>
            <button onClick={this.props.restart}>Restart game</button>
          </p>

      </div>
    );

  }

});
