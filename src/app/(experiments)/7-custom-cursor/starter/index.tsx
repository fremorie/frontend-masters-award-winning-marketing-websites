"use client";

import s from "./styles.module.css";
import {useEffect, useRef} from "react";
import {lerp} from "@/lib/math";
import gsap from 'gsap';

export default function Page() {
    const mouseRef = useRef<HTMLDivElement>(null);

    const cursorPosRef = useRef({
        x: 0,
        y: 0,
    });

    const cursorTargetRef = useRef({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const callback: gsap.TickerCallback = (time, deltaTime) => {
            cursorPosRef.current.x = lerp(
                cursorPosRef.current.x,
                cursorTargetRef.current.x,
                deltaTime * 0.1
            );

            cursorPosRef.current.y = lerp(
                cursorPosRef.current.y,
                cursorTargetRef.current.y,
                deltaTime * 0.1
            );

            if (mouseRef.current) {
                mouseRef.current.style.setProperty('--x', cursorPosRef.current.x.toString());
                mouseRef.current.style.setProperty('--y', cursorPosRef.current.y.toString());
            }
        }

        const cb = gsap.ticker.add(callback);

        return () => gsap.ticker.remove(cb);
    }, [])

    useEffect(() => {
        const controller = new AbortController();

        window.addEventListener('mousemove', (event) => {
            const x = event.clientX;
            const y = event.clientY;

            if (mouseRef.current) {
                // mouseRef.current.style.setProperty('--x', x.toString());
                // mouseRef.current.style.setProperty('--y', y.toString());

                cursorTargetRef.current.x = x;
                cursorTargetRef.current.y = y;
            }
        });

        return () => controller.abort()
    }, [])

  return (
    <div className="w-screen h-screen bg-black text-green-400 flex items-center justify-center">
      <h1 className="uppercase text-[10vh] leading-none relative cursor-default pl-[0.1em] opacity-60 hover:opacity-100">
        Start
      </h1>
      <div className={s.cursor} ref={mouseRef} />
    </div>
  );
}
