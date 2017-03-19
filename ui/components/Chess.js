import React from 'react'
import {Board} from './Board'
import {connect} from 'react-redux'
import * as actions from '../ducks/chess'


class Chess1 extends React.Component {

    render() {
        const p = this.props
        return (
            <div style={styles.main}>
                <p>
                    <button onClick={p.newGame}>New game</button>
                    <button onClick={p.nextMove}>Next move</button>
                </p>
                <Board board={p.board} />
            </div>
        )
    }
}

export const Chess = connect(
    s => ({board: s.chess.board}),
    actions
)(Chess1)

const styles = {
    main: {
        width: "800px",
        margin: "0 auto"
    }
}