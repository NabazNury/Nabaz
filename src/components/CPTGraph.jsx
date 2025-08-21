import { useEffect, useRef, useState } from 'react'
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Legend)

export default function CPTGraph() {
  const chartRef = useRef(null)
  const [data, setData] = useState({
    labels: [],
    datasets: [
      { label: 'qc', data: [], borderColor: 'red' },
      { label: 'fs', data: [], borderColor: 'green' },
      { label: 'u2', data: [], borderColor: 'blue' },
    ],
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const nextLabel = prev.labels.length + 1
        return {
          labels: [...prev.labels, nextLabel],
          datasets: prev.datasets.map(ds => ({
            ...ds,
            data: [...ds.data, Math.random() * 100],
          })),
        }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const exportPNG = () => {
    const url = chartRef.current.toBase64Image()
    const link = document.createElement('a')
    link.download = 'cpt-graph.png'
    link.href = url
    link.click()
  }

  return (
    <div className="bg-white p-2">
      <Line ref={chartRef} data={data} />
      <button onClick={exportPNG} className="mt-2 px-2 py-1 bg-gray-200">Export PNG</button>
    </div>
  )
}
