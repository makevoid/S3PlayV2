import React from 'React'
import Comp       from '../comp'
import { Provider } from 'ReactRedux'
import store        from '../../store/store'

class PureProvider extends Comp {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            {this.props.children}
          </div>
        </Provider>
      </div>
    )
  }
}

export default PureProvider
