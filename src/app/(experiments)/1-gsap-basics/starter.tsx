"use client";

import {useEffect, useRef} from "react";
import gsap from 'gsap'

export default function Page() {
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.title', {
                x: 200,
                duration: 1,
                onUpdate: () => console.log('update')
            })
        }, containerRef)

        return () => {
            ctx.revert()
        }
    }, [])

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
