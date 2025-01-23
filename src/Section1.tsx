import React from 'react';
import { useRef } from 'react'
import gsap, { random } from 'gsap'
import { useGSAP } from '@gsap/react';
import './App.css';

gsap.registerPlugin(useGSAP);

const timeline = gsap.timeline({})

function Section1() {

    const Section = useRef<null | HTMLDivElement>(null)
    const tl = useRef(timeline)

    const makeSpots = () => {
        const lkm = 15;
        const askel = (2 * Math.PI) / lkm;
        const korkeus = 150;
        const pilkut = [];

        for (let i = 0; i < lkm; i++) {
            const kulma = i * askel;
            const y = korkeus * Math.sin(kulma);

            pilkut.push(
                <div> <div className="pilkku -la"
                    key={i}
                    style={{
                        // transform: `${y - (lkm / 2)}`,
                        left: `${((100 / lkm) * i) + (100 / lkm) / 2}%`,
                        top: `calc(50% + ${y}px)`,
                        borderRadius: `${gsap.utils.random(45, 75)}% ${gsap.utils.random(55, 70)}% ${gsap.utils.random(65, 79)}% ${gsap.utils.random(50, 90)}% `,
                        opacity: .10
                    }
                    }></div >
                </div>
            )
        }
        return pilkut
    }

    const pilkkuparvi = useGSAP(
        () => {
            tl.current

                .to('.pilkku', {
                    // borerRadius: `random(45, 50)% random(40, 60)% random(40, 50)% random(40, 60)% /random(45, 55)% random(45, 55)% random(40, 50)% random(40, 60)% `,
                    yoyo: true,
                    top: '50vh',
                    duration: 4,
                    repeat: -1,
                    stagger: .2,
                    ease: 'linear'
                })

        }
    )


    return (
        <div className='section' ref={Section}>
            <h1 className='title'>Anni Roihuvuo</h1>
            <div className='siniaalto'>  {makeSpots()}</div>
            <p className='tahti'>*</p>
        </div>
    )
};

export default Section1;