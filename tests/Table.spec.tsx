import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "../src/components/Table";

describe("Table Component", () => {
  const stockExemple = [
    { index: 0, timestamp: "2024-01-20T21:36:01.824Z", stocks: "100" },
    { index: 1, timestamp: "2024-01-21T21:36:01.824Z", stocks: "150" },
  ];

  it("renders the table with stocks data", () => {
    const setStocksMock = jest.fn();
    const { getByText, getAllByRole } = render(
      <Table stocks={stockExemple} setStocks={setStocksMock} />
    );

    // check if the header is rendered
    expect(getByText("Stocks")).toBeInTheDocument();

    // check if the rows are rendered
    stockExemple.forEach((stock) => {
      expect(
        getByText(new Date(stock.timestamp).toLocaleDateString())
      ).toBeInTheDocument();
      expect(getAllByRole("textbox")).toHaveLength(stockExemple.length);
    });
  });
});
