import actions from '../actions/actions'
import defaultState from '../store/default_state'
import Underscore from 'Underscore'
const findWhere = Underscore.findWhere
const defer = Underscore.defer
const c = console

let init = false


//
// utils -- (TODO: move)
//
// these utils help re-creating the state object without ever modifying it, a new js object is created at every step so that redux history and upadtes can work properly

// applystate - applies the state by cloning the state object - accepts property name, the value (the part of the state that will need to change) and the old state of course
//
// usage:
//
// return applyState("foo", action.foo, state)
//

const applyState = (property, state, toState) => {
  return Object.assign({}, toState, {
    [property]: state
  })
}

// mergeState - applies the state by cloning the state object - simpler implementation, merges them, the newer state, passed first, will be merged on the old one (passed as the second argument)
//
// usage:
//
// return mergeState(state, {
//   foo: action.foo
// })

const mergeState = (newState, oldState) => {
  return Object.assign({}, oldState, newState)
}


// Tracks logic
//
const trackLastIndex = (tracks, currentTrack) => {
  let curr = findWhere(tracks, { hash: currentTrack })
  return tracks.indexOf(curr)
}

const trackNext = (tracks, currentTrack) => {
  let index = trackLastIndex(tracks, currentTrack)
  return tracks[index + 1]
}

const trackPrev = (tracks, currentTrack) => {
  let index = trackLastIndex(tracks, currentTrack)
  return tracks[index - 1]
}


//
// main store
//
//
const rootReducer = (state = defaultState, action) => {
  // TODO: reducer composition (action can be handled by 0,1 or more reducers)
  //
  // at 10+ actions, modularize in multiple reducers without thinking too much about it :D

  // DEBUG:
  console.log("ACTION:", action.type)
  console.log("VALUE:", action)


  switch (action.type) {

    case "GOT_BALANCE":
      return applyState("balance", action.balance, state)

    case "GOT_TRACKS":
      return applyState("tracks", action.tracks, state)

    case "PING":
      return applyState("ping", "pong", state)

    case "GET_BALANCE":
      actions.getBalanceCall(state.address)
      return state

    case "TRACK_SELECT":
      return applyState("currentTrack", action.track, state)

    case "TRACK_NEXT":
      let next = trackNext(state.tracks, state.currentTrack)
      defer(() => {
        if (next) actions.trackSelect(next.hash)
        actions.playerPlay()
      })
      return state

    case "TRACK_PREV":
      let prev = trackPrev(state.tracks, state.currentTrack)
      defer(() => {
        if (prev) actions.trackSelect(prev.hash)
        actions.playerPlay()
      })
      return state

    case "PLAYER_PLAY_PAUSE":
      defer(() => {
        if (state.playing)
          actions.playerPause()
        else // !state.playing
          actions.playerPlay()
      })
      return state

    case "PLAYER_PLAY":
      return applyState("playing", true, state)

    case "PLAYER_PAUSE":
      return applyState("playing", false, state)

    default:
      if (init)
        console.log(`action: ${action.type} - no state change`)
      init = true
      return state
  }
}

export default rootReducer

//// stricter, legacy version
//
// import { createStore } from 'Redux'
//
// const reducer = null
//
// const defaultReducer = () => { }
//
// const antaniStore = (state, _reducer) =>  {
//   if (!reducer)  reducer = _reducer
//   if (!reducer)  reducer = defaultReducer
//
//   const devToolsAntani = window.devToolsExtension && window.devToolsExtension()
//   const store = createStore(
//     reducer,
//     state,
//     devToolsAntani
//   )
//   return store
// }


// TODO: export antaniStore
