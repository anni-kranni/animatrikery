import React from 'react';
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './App.css';
import Animation from './Animation';
import Section1 from 'Section1';
import kissanpaa from './sininenmanuli.png'
import rinkula from './annin_rinkula.png'

gsap.registerPlugin(useGSAP);



function App() {


  return (<>
    <Section1 />
    <Animation />
  </>
  );
}


export default App;
