import React, { Component } from 'React'
import { Link } from 'ReactRouter'

import Comp from '../comp'
class Nav extends Comp {
  render () {
    return (
      <nav ref="nav">
        <ul>
          <li><Link to='/player'>▶</Link></li>
          <li><Link to='/track'>Track</Link></li>
          <li><Link to='/playlist'>Playlist</Link></li>
          <li><Link to='/settings'>Settings</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
