import { useEffect, useState, useRef } from 'react'
import './main.css'

function App() {
  const canv = useRef()

  useEffect(() => {
    const ctx = canv.current.getContext('2d')
    console.dir(window.innerWidth)
    console.dir(window.innerHeight)
    setInterval(() => {
      for (let i = 0;i < window.innerWidth;i+=4){
        for (let j = 0;j < window.innerHeight;j+=4){
          ctx.fillStyle = `rgb(${Math.floor(Math.random(0)*255)},${Math.floor(Math.random(0)*255)},${Math.floor(Math.random(0)*255)})`;
          ctx.fillRect(i,j,4,4)
        }
      }
    }, 10);
  }, [])

  return (
    <>
      <canvas ref={canv} width={window.innerWidth} height={window.innerHeight}></canvas>
    </>
  )
}

export default App
