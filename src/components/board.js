import React from "react";
import Square from "./square";

const board = ({ squares, onClick }) => (
    <div className="board">
        {squares.map((square, i) =>
            <Square key={i} value={square} onClick={() => onClick(i)} />
        )}
    </div>
);

export default board;