export function coorEquals(c1: Coor, c2: Coor): boolean {
    return c1 && c2 && c1[0] === c2[0] && c1[1] === c2[1]
}


export function isMove(coor: Coor, moves: Coor[]): boolean {
    return moves.some(m => coorEquals(coor, m));
}