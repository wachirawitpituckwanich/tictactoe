import React from "react";
import Cell from "./cell";

const Board = ({cell, onClick, scale}) => (
    <div className="xoboard" style={{gridTemplate: `repeat(${scale}, 1fr) / repeat(${scale}, 1fr)` }}>
        {cell.map((cell, i) => (
            <Cell key={i} value={cell} onClick={() => onClick(i)}/>
        ))}
    </div>
)

export default Board;