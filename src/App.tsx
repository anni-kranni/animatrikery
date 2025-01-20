import React from 'react';
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './App.css';
import CustomEase from 'gsap/CustomEase';
import kissanpaa from './sininenmanuli.png'
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
      .to(".hand", {
        y: "20px",
        rotate: -20,
        yoyo: true,
        duration: 1,
        ease: "none",
        repeat: -1
      }, 0)
      .fromTo(".rinkula", {
        transformOrigin: "center 20px",
        rotation: 180
      }, {
        transformOrigin: "center 20px",
        rotation: -180,
        duration: 2,
        ease: CustomEase.create("custom", "M0,0 C0.399,0.1 0.413,0.292 0.507,0.512 0.591,0.709 0.624,0.906 1,1 "),
        repeat: -1
      }, 0)
  }, { scope: Container })

  return (
    <div className="App">
      <header className="App-header">

        <div className="container" ref={Container}>
          <img src={kissanpaa} alt='kissan pää' className='katti' />

          <div className='paita-torso'>
            <div className='paita-hiha'></div>
            <div className='paita-hiha'></div>

          </div>

          <img src={rinkula} alt="rinkula pyörii..." className="rinkula" />
          <div className='hand'></div>

        </div>
      </header>
    </div>
  );
}

export default App;
