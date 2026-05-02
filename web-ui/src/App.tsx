import { useEffect, useState } from 'react'
import init, {hello} from "sim-lib"
import './App.css'

function App() {
    const [ready, setReady] = useState(false)
    const [names, setNames] = useState<string[]>([])
    
    useEffect(() => {
        init().then(() => setReady(true))
    }, [])

    useEffect(() => {
        if (!ready) return
        setNames(hello())
    }, [ready])

    return (
        <div>
            <h1>Hello from {names.join(", ")}</h1>
        </div>
    )
}

export default App
