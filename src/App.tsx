import { Route, Switch, useLocation } from 'wouter'
import AuthCharacters from './pages/AuthCharacters'
import Main from './pages/Main'

function App() {
    const [, navigate] = useLocation()

    return (
        <Switch>
            <Route path={'/'} component={Main} />
            <Route
                path={'authentication-characters'}
                component={AuthCharacters}
            />

            <Route>
                <h1>You got it wrong</h1>
                <button onClick={() => navigate('/')}>let's go back</button>
            </Route>
        </Switch>
    )
}

export default App
