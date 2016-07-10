import React from 'React'
import Comp       from './comp'
import { Provider } from 'ReactRedux'
import store        from '../../store/store' # todo requireable

class BaseProvider extends Comp {
  render() {
    let collection = "bases"
    return (
      <section className={collection}>
        <Provider store={store}>
          <!-- <ElementList /> -->
        </Provider>
      </section>
    )
  }
}

export default BaseProvider
