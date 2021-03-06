package org.plopl.chess;

import org.jetbrains.annotations.Nullable;
import org.plopl.chess.pieces.Piece;

public class Board {

    private Piece[][] board = new Piece[8][8];

    /**
     * Creates a new board and copies the situation from `previous`.
     */
    static Board copyFrom(Board previous) {
        Board board = new Board();
        Field.allFields().forEach(field -> board.set(field, previous.get(field)));
        return board;
    }

    @Nullable
    public Piece get(int i, int j) {
        return board[i][j];
    }

    @Nullable
    public Piece get(Field field) {
        return get(field.row, field.column);
    }

    public void set(int i, int j, Piece piece) {
        board[i][j] = piece;
    }

    public void set(Field field, Piece piece) {
        set(field.row, field.column, piece);
    }

    Piece[][] getBoard() {
        return board;
    }
}
