import React, {useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductosLista = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos
    

    return (
        <>
            <div className="header-productos">
                <h1 className="title">Delicias ideales para vos</h1>
                <h2 className="subtitle">cakes handcrafted with love.</h2>
            </div>
            
            <div className="productos">
                {
                    productos.map(producto => (
                        <ProductoItem 
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        category={producto.category}
                        cantidad={producto.cantidad}
                        />
                    ))
                }
            </div>
        </>
    );
};
