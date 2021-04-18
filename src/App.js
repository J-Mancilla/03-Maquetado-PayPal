import React from 'react';

import Header from './components/App/Header';
import InfoHead from './components/Sections/InfoHead';
import VideoHead from './components/Sections/VideoHead';
import PayPalNegocios from './components/Sections/PayPalNegocios'
import Coronavirus from './components/Sections/Coronavirus';
import InfoSection from './components/Sections/InfoSection'

import imgShop from './img/shopping.png'
import imgFly from './img/fly.gif'
import imgDress from './img/Dress-FreeReturnShipping.gif'
import imgInstall from './img/installments.png'
import imgConfidence from './img/confidence.png'
import Community from './components/Sections/Community';
import Footer from './components/App/Footer'



function App() {
  return (
    <>
      <Header  />
      <InfoHead  />
      <VideoHead  />
      <PayPalNegocios  />
      <Coronavirus  />
      {sections.map(({title, text, buttonText, image, direction}, index)=>(
        <InfoSection title = {title} text ={text} buttonText = {buttonText} image = {image}  direction = {direction} key = {`sectionPayPal${index}`}/>
      ))}
      <Community  />
      <Footer  />
    </>
  );
}


const sections = [
  {
    title:      'El mundo es tu centro comercial',
    text:       'Desde grandes marcas hasta pequeñas boutiques, con PayPal puedes comprar de manera segura en millones de tiendas en línea de México y de todo el mundo.',
    buttonText: 'Comprar ahora',
    image:      imgShop,
    direction:  'left'
  },
  {
    title:      'Pagos rápidos y seguros',
    text:       'Paga en tiendas y aplicaciones en línea en pocos segundos. Ya sea que compres tus artículos básicos en tu tienda habitual o en una tienda nueva, PayPal te ayuda a agilizar el pago y a mantener tus compras protegidas*. También puedes seguir ganando los puntos y recompensas de tus tarjetas preferidas**.',
    buttonText: 'Paga con One Touch™',
    image:      imgFly,
    direction:  'right'
  },
  {
    title:      '¿Vas a devolver una compra? Obtén el reembolso de los gastos de envío.',
    text:       'Si devuelves una compra que realizaste con PayPal, puedes pedir el reembolso de los gastos de envío de la devolución***.',
    buttonText: 'Más información',
    image:      imgDress,
    direction:  'left'
  },
  {
    title:      'Distribuye tus pagos en mensualidades',
    text:       'Paga con PayPal a meses sin intereses en miles de comercios y facilita tu flujo de efectivo mensual, sin importar la tarjeta de crédito que uses.',
    buttonText: 'Agrega una tarjeta',
    image:      imgInstall,
    direction:  'right'
  },
  {
    title:      'Compra en línea con confianza',
    text:       'Mantente seguro al comprar en línea con nuestro monitoreo antifraude 24/7, nuestros 180 días de Protección al Comprador* y nuestro servicio de reembolso de gastos de envío de devolución***. Aplican términos y condiciones.',
    buttonText: 'Conoce más',
    image:      imgConfidence,
    direction:  'left'
  }
]

export default App;
