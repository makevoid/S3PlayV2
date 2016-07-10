import React  from 'React'
import Comp  from '../comp'
import { Provider } from 'ReactRedux'
import store        from '../../store/store'
import TrackList    from './track_list'

class Tracks extends Comp {
  render() {
    return (
      <section className="tracks">
        <Provider store={store}>
          <TrackList />
        </Provider>
      </section>
    )
  }
}

export default Tracks
