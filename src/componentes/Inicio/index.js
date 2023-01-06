import React from 'react';
import Portada from "../../img/img/Productos/banner/banner-home/home1.png";
import Milagros from "../../img/QuienSoy/Milicrupi.png";
import { Link }  from "react-router-dom";


export const Inicio = () => {
  return (
    <div className='inicio'>
      <main className="main-home">
        <p>Bienvenido! Llegaste a un sitio lleno de delicias dulces para acompañar tus momentos.</p>
      </main>

      <img src={Portada} alt="inicio"/>

      <section>
        <div className="sobre-me-home">
          <img src={Milagros} alt="Foto de Milagros" />
          <div className="textohome">
            <h2> Detrás de escena</h2>
              <p className="p1-home">Me llamo Milagros Crupi, tengo 23 años y soy la creadora de MiliCru Pastelería. Este emprendimiento surge
              hace 5 años ya, para un día de la madre y con pocas expectativas de futuro. Pero como quien no quiere la cosa, lo unico que hizo en estos años fue crecer y crecer. Con ayuda de mi familia, para hacerme el aguante en grandes maratones, con pocas horas de sueño y mucho esfuerzo, acá estamos. Hoy somos una comunidad de casi 40k de seguidores. ¡Gracias por todo el apoyo! A cada cliente, que confia en mi para sus eventos y momentos importantes.</p>
              <p className="p2-home">
                En cada pedido, se va un pedacito de mi. 
                </p>
                <p className="p2-home">   
                  Amo cocinar y hay MiliCru para rato!
                </p>
                <p className="p2-home">
                  Lxs quiero.
                </p>
            </div>
          </div>
      </section>
    </div>
  )
}
