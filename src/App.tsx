import React from 'react';
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './App.css';
import CustomEase from 'gsap/CustomEase';
import Animation from './Animation';
import kissanpaa from './sininenmanuli.png'
import rinkula from './annin_rinkula.png'

gsap.registerPlugin(useGSAP);

const timeline = gsap.timeline()


function App() {


  return (
    <Animation />
  );
}


export default App;
