import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index"; 
import { ProductoDetalles } from './Productos/ProductoDetalles';

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route exact path="/" element={< Inicio /> } />
                <Route exact path="/productos" element={ <ProductosLista />} />
                <Route exact path="/producto/:id" element={< ProductoDetalles /> } />
            </Routes>
        </section>
    )
}
