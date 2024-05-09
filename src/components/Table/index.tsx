import React from "react";

import './style.scss'

type TableProps = {
  stocks: Stocks;
  setStocks: React.Dispatch<React.SetStateAction<Stocks>>;
};

const Table: React.FC<TableProps> = ({ stocks, setStocks }) => {
  const updateStock = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setStocks((prev) => {
      prev[i] = { ...prev[i], stocks: e.currentTarget.value };
      return [...prev];
    });
  };

  const renderTable = stocks.map((el) => (
    <div className="cell" key={el.index}>
      <span>{new Date(el.timestamp).toLocaleDateString()}</span>
      <span>
        <input
          value={parseFloat(el.stocks)}
          onChange={(e) => updateStock(e, el.index)}
        />
      </span>
    </div>
  ));

  return (
    <div className="table">
      <h4>Stocks</h4>
        <div className="row">
            {renderTable}
        </div>
    </div>
  );
};

export default Table;
