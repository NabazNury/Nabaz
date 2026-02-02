import { useEffect, useRef } from 'react'

export default function VesselCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.fillStyle = '#555'
    ctx.fillRect(50, 50, 100, 30)
  }, [])

  return <canvas ref={canvasRef} width={200} height={150} className="absolute inset-x-0 top-1/4 mx-auto" />
}
