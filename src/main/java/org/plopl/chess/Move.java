package org.plopl.chess;

public class Move {

    int pieceId;
    Field from;
    Field to;

    public Move(int pieceId, Field from, Field to) {
        this.pieceId = pieceId;
        this.from = from;
        this.to = to;
    }

    public int getPieceId() {
        return pieceId;
    }

    public Field getFrom() {
        return from;
    }

    public Field getTo() {
        return to;
    }
}
