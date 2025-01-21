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

  const hoopRef = useRef<HTMLDivElement>(null);
  const ledsRef = useRef<HTMLDivElement[]>([]);

  const tl = useRef(timeline)
  const Container = useRef<null | HTMLDivElement>(null)

  // Hoop Constants
  const LED_COUNT: number = 160;
  const HOOP_RADIUS: number = 150;

  // Create LEDs  
  const createLEDs = () => {
    const askel = (2 * Math.PI) / LED_COUNT;

    return Array.from({ length: LED_COUNT }, (_, i) => {
      const angle = i * askel; // Angle for this LED
      const x = HOOP_RADIUS * Math.cos(angle); // X position
      const y = HOOP_RADIUS * Math.sin(angle); // Y position

      return (
        <div
          key={i}
          ref={(el) => {
            if (el) ledsRef.current[i] = el;
          }}
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "white",
            position: "absolute",
            left: `calc(50% + ${x}px)`, // Centered at (50%, 50%) of the hoop
            top: `calc(50% + ${y}px)`,
          }}
        />
      );
    });
  };


  useGSAP(() => {

    const hoop = hoopRef.current;
    if (!hoop || ledsRef.current.length !== LED_COUNT) return;

    tl.current
      .to(".led-hoop", {
        transformOrigin: "center 20px",
        rotation: 360,
        ease: "linear",
        duration: 3,
        repeat: -1
      }, 0)
      .to(".hand", {
        y: "20px",
        rotate: -20,
        yoyo: true,
        duration: 1,
        ease: "none",
        repeat: -1
      })
      .fromTo(".rinkula", {
        transformOrigin: "center 20px",
        rotation: 180
      }, {
        transformOrigin: "center 20px",
        rotation: -180,
        duration: 2,
        ease: "linear",// CustomEase.create("custom", "M0,0 C0.399,0.1 0.413,0.292 0.507,0.512 0.591,0.709 0.624,0.906 1,1 "),
        repeat: -1
      })
  }, { scope: Container })

  return (
    <div className="App">
      <header className="App-header">
        <div className="container" ref={Container}>

          <div className='led-hoop'
            ref={hoopRef}>
            {createLEDs()}
          </div>
          <img src={kissanpaa} alt='kissan pää' className='katti' />


          <img src={rinkula} alt="rinkula pyörii..." className="rinkula" />

        </div>
      </header>
    </div>
  );
}


export default App;
