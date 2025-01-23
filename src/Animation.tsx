import React from 'react';
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './App.css';
import CustomEase from 'gsap/CustomEase';
import kissanpaa from './sininenmanuli.png'
import rinkula from './annin_rinkula.png'

gsap.registerPlugin(useGSAP);

const timeline = gsap.timeline()

function Animation() {

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

    const toggleTimeline = () => {
        tl.current.isActive() ? tl.current.pause() : tl.current.play()
    }


    useGSAP(() => {

        // const hoop = hoopRef.current;
        // if (!hoop || ledsRef.current.length !== LED_COUNT) return;

        tl.current
            .to(".led-hoop", {
                transformOrigin: "center 20px",
                rotation: 360,
                ease: "linear",
                duration: 3,
                repeat: -1
            }, 0)
        // .to(".led-hoop", {
        //     transform: "rotate3d(1, 0, 0, 50deg)",
        //     duration: 1.5,
        //     yoyo: true,
        //     ease: "linear",
        //     repeat: -1
        // })


    }, { scope: Container })

    return (
        <div className="App">
            <div className="container" ref={Container}>

                <div className='led-hoop'
                    ref={hoopRef}>
                    {createLEDs()}
                </div>

                <button id='play' onClick={toggleTimeline} >play / pause</button>

            </div>

        </div>
    );
}


export default Animation;
