import React from "react";

const Cell = ({ value, onClick }) => {
    const style = value ? `square ${value}` : 'cells'
  return <button className={style} onClick={onClick}>{value}</button>;
};

export default Cell;
