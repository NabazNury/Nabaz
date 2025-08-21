import SeaBackground from './components/SeaBackground'
import VesselCanvas from './components/VesselCanvas'
import CPTGraph from './components/CPTGraph'
import ControlPanel from './components/ControlPanel'

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <SeaBackground />
      <VesselCanvas />
      <div className="absolute top-0 right-0 p-4 space-y-4">
        <CPTGraph />
        <ControlPanel />
      </div>
    </div>
  )
}
