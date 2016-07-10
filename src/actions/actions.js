import store from '../store/store'
import Balance from '../api/balance'

const actions = {

  // Actions

  gotBalance: (balance) => {
    store.dispatch({ type: 'GOT_BALANCE', balance: balance })
  },

  gotTracks: (transactions) => {
    store.dispatch({ type: 'GOT_TRACKS', tracks: tracks })
  },

  getBalance: () => {
    store.dispatch({ type: 'GET_BALANCE' })
  },

  trackSelect: (trackHash) => {
    store.dispatch({ type: 'TRACK_SELECT', track: trackHash })
    actions.playerPlay()
  },

  trackNext: () => {
    store.dispatch({ type: 'TRACK_NEXT' })
  },

  trackPrev: () => {
    store.dispatch({ type: 'TRACK_PREV' })
  },

  playerPlay: () => {
    store.dispatch({ type: 'PLAYER_PLAY' })
  },

  playerPause: () => {
    store.dispatch({ type: 'PLAYER_PAUSE' })
  },

  playerPlayPause: () => {
    store.dispatch({ type: 'PLAYER_PLAY_PAUSE' })
  },

  // ------


  // API actions (side-effects)
  //
  getBalanceCall: (address) => {
    Balance.get(address)
      .then((balance) => {
        actions.gotBalance(balance)
      })
  },
}

export default actions
