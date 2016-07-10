import React        from 'React'
import { Provider } from 'ReactRedux'
import store        from '../../store/store'
import { Link }     from 'ReactRouter'
import Comp         from '../comp'
import QRAddress    from '../qr/qr_address'
import AddressBalance         from '../bitcoin/address_balance'
import BalanceRefreshButton   from './balance_refresh_button'

class Receive extends Comp {
  render () {
    return (
      <section className="receive">
        <h1>Receive</h1>
        <Provider store={store}>
          <div>
              <AddressBalanceZeroconf />
              <BalanceRefreshButton />
          </div>
        </Provider>
      </section>
    )
  }
}

export default Receive

// TODO

// RE-ADD QR CODE - add qr button that renders <QRAddress /> in modal
//
// component:
//
//   <QRAddress />


// <AddressBalanceFiat />
//
// Integrate it in some way
