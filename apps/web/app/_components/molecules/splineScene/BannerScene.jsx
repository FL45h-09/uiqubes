"use client";
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function BannerScene() {
  const canvasRef = useRef();

  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load("/splines/bannerScene.spline");
    // app.load("/splines/bannerQubeScene.spline");

    // 🔥 Ensure canvas resizes on window resize
    // const handleResize = () => {
    //   app.resize();
    // };

    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} style={{width: "100%", height: "100%"}} />;
}
