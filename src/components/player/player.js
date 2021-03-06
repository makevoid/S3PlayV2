import React from 'React'
import Comp  from '../comp'
import PlayerComp from './player_comp'
// import Tracks from '../tracks/tracks'
import TrackList from '../tracks/track_list'
import PureProvider from '../example/pure_provider'
import AddressBalance from '../bitcoin/address_balance'
import QRAddress from '../qr/qr_address'

class Player extends Comp {
  render() {
    return (
      <div>
        <PureProvider>
          <PlayerComp />
          {/* <Tracks /> */}
          <TrackList />
          <div className="addressBalance">
            <QRAddress />
            <AddressBalance />
          </div>
        </PureProvider>
      </div>
    )
  }
}

export default Player

// I envision also a full page player, let's mantain the option for that
