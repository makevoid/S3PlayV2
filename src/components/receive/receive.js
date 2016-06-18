import React        from 'React'
import { Provider } from 'ReactRedux'
import store        from '../../store/store'
import { Link }     from 'ReactRouter'
import Comp         from '../comp'
import QRAddress    from '../qr/qr_address'
import AddressBalance  from '../bitcoin/address_balance'
import AddressBalanceZeroconf  from '../bitcoin/address_balance_zeroconf'
import AddressBalanceFiat  from '../bitcoin/address_balance_fiat'

export default class Receive extends Comp {
  render () {
    return (
      <section className="receive">
        <h1>Receive</h1>
        <Provider store={store}>
          <div>
            <QRAddress />
            <div className="s20"></div>
            <AddressBalance />
            <AddressBalanceFiat />
            <AddressBalanceZeroconf />
          </div>
        </Provider>
      </section>
    )
  }
}
