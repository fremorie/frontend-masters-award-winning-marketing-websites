"use client";

import {useEffect, useRef} from "react";
import gsap from 'gsap'
import {useGSAP} from "@gsap/react";
import { SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText)

export default function Page() {
    const containerRef = useRef(null)

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.to('.title', {
    //             x: 200,
    //             duration: 1,
    //             onUpdate: () => console.log('update')
    //         })
    //     }, containerRef)
    //
    //     return () => {
    //         ctx.revert()
    //     }
    // }, [])

    // useGSAP(() => {
    //     gsap.from('.title', {
    //         y: 200,
    //         opacity: 0,
    //         ease: 'circ.out',
    //         duration: 1,
    //         onUpdate: () => console.log('update')
    //     })
    // }, {
    //     scope: containerRef,
    // })

    useGSAP(() => {
        SplitText.create('.title', {
            type: 'chars, words',
            charsClass: 'letter',
        })

        gsap.from('.title .letter', {
            y: 200,
            opacity: 0,
            ease: 'circ.out',
            stagger: 0.05,
            duration: 1,
            onUpdate: () => console.log('update')
        })
    }, {
        scope: containerRef,
    })

  return (
    <div className="bg-blue-300 text-black">
      <div ref={containerRef} className="flex h-screen items-end justify-left overflow-hidden">
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          GSAP
          <br />
          tweens
        </h1>
      </div>
    </div>
  );
}
