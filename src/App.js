import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import {BrowserRouter, RouterProps, Route} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import { DataProvider }from "./context/DataProvider";
import { Carrito } from "./componentes/Carrito";

function App() {
  return (
    <DataProvider >
    <div className="App">
      <BrowserRouter>
      <Header />
      <Carrito />
      <Paginas />
      </BrowserRouter>
    </div>
    </DataProvider>
  );
}

export default App;
