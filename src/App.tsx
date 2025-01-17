import React from 'react';
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './App.css';
import rinkula from './annin_rinkula.png'


gsap.registerPlugin(useGSAP);

const timeline = gsap.timeline()

function App() {

  const tl = useRef(timeline)
  const Container = useRef<null | HTMLDivElement>(null)

  useGSAP(() => {
    tl.current
      // .to(".ring-container", {
      //   transformOrigin: "left -60px",
      //   rotation: 360,
      //   duration: 4,
      //   ease: "none",
      //   repeat: -1
      // })
      .to(".rinkula", {
        transformOrigin: "center 35px",
        rotation: -360,
        duration: 4,
        ease: "none",
        repeat: -1
      })
  }, { scope: Container })

  return (
    <div className="App">
      <header className="App-header">
        <div className="container" ref={Container}>
          <div className="ring-container" >

            <img src={rinkula} alt="rinkula pyörii..." className="rinkula" /></div>
        </div>
      </header>
    </div>
  );
}

export default App;
