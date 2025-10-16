// import '../App.css'
// import '../index.css'
import { useLocation } from 'wouter'

export default function Main() {
    const [, navigate] = useLocation()

    return (
        <>
            <h1>LET'S GO</h1>
            <div>
                <button onClick={() => navigate('/authentication-characters')}>
                    How I stop caring and started loving my login characters
                </button>
            </div>
            <div className="card">
                <p>select a button and let's see</p>
            </div>
            <p className="read-the-docs">with much love, for you S2</p>
        </>
    )
}
