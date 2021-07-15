import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <p>Hello Next.js + React!</p>
        <p>
          <button className="button" type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
