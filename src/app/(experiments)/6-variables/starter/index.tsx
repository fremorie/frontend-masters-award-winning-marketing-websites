"use client";

import { cn } from "@/lib/utils";
import React from 'react';
import s from "./styles.module.css";
import {useEffect, useState} from "react";
import {distance} from "@/lib/math";

export default function Page() {
    const [distanceValue, setDistanceValue] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
        'mousemove',
        (event) => {
          const mouseX = event.clientX;
          const mouseY = event.clientY;

          const screenW = window.innerWidth;
          const screenH = window.innerHeight;

          const centerX = screenW / 2;
          const centerY = screenH / 2;

          const d = distance(mouseX, mouseY, centerX, centerY)

          const maxDistance = distance(0, 0, centerX, centerY);

            setDistanceValue(d / maxDistance);
        },
        {
          signal: controller.signal,
        }
    )

    return () => controller.abort();
  }, [])

  return (
    <div
      className={cn(
        "w-screen h-screen text-white flex items-center justify-center",
        s.grid
      )}
    >
      <h1
        className={cn(
          "uppercase text-[10vh] leading-none relative",
          s["title"]
        )}
        style={{
            '--distance': distanceValue,
        } as React.CSSProperties}
      >
        Variables
      </h1>
    </div>
  );
}
