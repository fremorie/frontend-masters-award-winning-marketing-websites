"use client";

import {useEffect} from "react";
import gsap from 'gsap'

export default function Page() {
    useEffect(() => {
        const tween = gsap.to('.title', {
            x: -200,
            duration: 10,
            onUpdate: () => {
                console.log('update')
            }
        })

        return () => {
            tween.revert()
        }
    }, [])

  return (
    <div className="bg-blue-300 text-black">
      <div className="flex h-screen items-end justify-left overflow-hidden">
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          GSAP
          <br />
          tweens
        </h1>
      </div>
    </div>
  );
}
