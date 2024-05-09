import { useEffect, useState } from "react";

import Chart from "./components/Chart";
import Table from "./components/Table";
import Container from "./components/Container";

//import { fetchData } from "./utils/api";
import data from "./utils/static-data.json"

import "./App.scss";
import Error from "./components/Error";

const App: React.FC = () => {
  const [stocks, setStocks] = useState<Stocks>([]);
  const [errorState, setErrorState] = useState<AppError>({ isError: false });

  useEffect(() => {
    (async () => {
      try {
        const result = await data?.stocks.slice(0,19)// fetchData();
        if (result) {
          setStocks(result);
        }
      } catch (error: any) {
        setErrorState({
          isError: true,
          msgError: error.msg,
        });
      }
    })();
  }, []);

  return (
    <Container>
      <h1>Chart</h1>
      <Chart stocks={stocks} />
      <Table stocks={stocks} setStocks={setStocks} />
      {errorState.isError && (
        <Error
          messageError={errorState.msgError}
          setErrorState={setErrorState}
        ></Error>
      )}
 
    </Container>
  );
};

export default App;
