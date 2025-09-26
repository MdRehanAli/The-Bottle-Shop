
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch('../public/bottles.json')
  .then(res => res.json())

function App() {

  return (
    <>

      <h1>Bottles Shop</h1>

      <Suspense fallback={<p>Loading....</p>}>
        <Bottles bottlesPromise={bottlesPromise}>

        </Bottles>
      </Suspense>

    </>
  )
}

export default App
