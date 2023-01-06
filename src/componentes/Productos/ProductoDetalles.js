import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductoDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const params = useParams();
  let item = 0;

  useEffect(() => {
    productos.forEach((producto) => {
      item = 0;
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
      }
    });
  }, [params.id, productos]);

  return (
    <>
      <div className="detalles">
        <h2>{detalle.title}</h2>
        <p className="price">${detalle.price}</p>
        <div className="grid">
          <p className="nuevo">Nuevo</p>
          <div className="size">
            <select placeholder="Tamaño">
              <option value="1">Small</option>
              <option value="1">Medium</option>
              <option value="1">3</option>
            </select>
            <p>Tamaño</p>
          </div>
        </div>
        <button onClick={() => addCarrito(detalle.id)}>
          Añadir al carrito
        </button>
        <img src={detalle.image} alt={detalle.title} />
        <div className="description">
          <p>
            <b>Friendly reminder: </b> Nuestras delicias son 100% caseras con mucho amor, no te cuelgues! Hace tu pedido con 5 días hábiles de anticipación
          </p>
        </div>
      </div>
      <h2 className="relacionados">Productos relacionados</h2>
      <div className="productos">
        {productos.map((producto) => {
          if (item < 6 && detalle.category === producto.category) {
            item++;
            return (
              <ProductoItem
                key={producto.id}
                title={producto.title}
                image={producto.image}
                category={producto.category}
                price={producto.price}
                id={producto.id}
              />
            );
          }
        })}
      </div>
    </>
  );
};
