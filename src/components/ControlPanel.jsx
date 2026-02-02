import { useState, useEffect } from 'react'

export default function ControlPanel() {
  const [player, setPlayer] = useState(() => localStorage.getItem('player') || '')
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('highScore') || 0))
  const [running, setRunning] = useState(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    localStorage.setItem('player', player)
  }, [player])

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem('highScore', String(score))
    }
  }, [score, highScore])

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setScore(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  return (
    <div className="mt-4 p-2 bg-white">
      <div className="mb-2">
        <input
          className="border p-1"
          placeholder="Player name"
          value={player}
          onChange={e => setPlayer(e.target.value)}
        />
      </div>
      <div className="mb-2">Score: {score} | High Score: {highScore}</div>
      <div className="space-x-2">
        <button onClick={() => setRunning(true)} className="px-2 py-1 bg-green-200">Start</button>
        <button onClick={() => setRunning(false)} className="px-2 py-1 bg-red-200">Stop</button>
        <button onClick={() => { setScore(0); setRunning(false); }} className="px-2 py-1 bg-gray-200">Reset</button>
        <button onClick={() => setMuted(m => !m)} className="px-2 py-1 bg-yellow-200">
          {muted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    </div>
  )
}
