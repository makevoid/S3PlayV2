import React from 'React'
import { Provider } from 'ReactRedux'
import { render } from 'ReactDOM'

import store from './store/store'
import startup from './startup'
import catchErrors from './errors'
// import mainRender from './main_render'
import Comp from './components/comp'
import Main from './components/main'
import NotFound from './components/main/not_found'


window.storeDebug = store.getState() // FIXME: disable in production




// Main Components

import {  Route, IndexRoute } from 'ReactRouter'
import Player from './components/player/player'
import Tracks from './components/tracks/tracks'


// Routes

const routes =
  <Route path="/" component={Main}>
    <Route path="/player" component={Player} />
    <Route path="/tracks" component={Tracks} />

    <Route path="*"       component={NotFound}/>
  </Route>

  // import React from 'React'
  // import { render } from 'ReactDOM'
  import { Router, hashHistory } from 'ReactRouter'

  // main component, calls the global re-render
  //
  const mainRender = () => {
    render(
      <div className="app main_render">
        <h1>S3Play</h1>
        <Router history={hashHistory}>
          {routes}
        </Router>
      </div>,
      document.querySelector('.container')
    )
  }


// Main render (execution)

try {
  mainRender(routes)
} catch (err) {
  catchErrors(err)
  throw(err)
}

store.subscribe((evt) =>
  mainRender()
)



// startup has the task of filling in the stores with startup data
startup()
