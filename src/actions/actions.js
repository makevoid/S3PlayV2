import store from '../store/store'
import Balance from '../api/balance'

const actions = {
  gotBalance: (balance) => {
    store.dispatch({ type: 'GOT_BALANCE', balance: balance })
  },
  gotTracks: (transactions) => {
    store.dispatch({ type: 'GOT_TRACKS', tracks: tracks })
  },
  getBalance: () => {
    store.dispatch({ type: 'GET_BALANCE' })
  },

  // API actions
  getBalanceCall: (address) => {
    Balance.get(address)
      .then((balance) => {
        actions.gotBalance(balance)
      })
  },
}

export default actions
