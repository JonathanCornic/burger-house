import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
