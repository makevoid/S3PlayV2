import React from 'React'
import Comp       from './comp'

import { Link } from 'ReactRouter'
import Player   from './player/player'
import Tracks   from './tracks/tracks'
// import Nav   from './main/nav'

class Main extends Comp {
  render() {
    return (
      <div className="main">
        {this.props.children || (<Player />)}
      </div>
    )
  }
}

export default Main

// removed elements
//
// <Nav />
