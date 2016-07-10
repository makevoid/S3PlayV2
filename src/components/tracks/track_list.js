import React  from 'React'
import Comp  from '../comp'
import Track  from './track'
import actions  from '../../actions/index'
const c = console

class TrackList extends Comp {
  constructor(props) {
    super(props)
  }

  render() {
    const store = this.getStore()
    let tracks = store.tracks
    let currentTrack = store.currentTrack
    this.currentTrack = currentTrack
    return (
      <section className="track-list">
        <h1>Tracks ({tracks.length})</h1>
        <div>{this._trackList(tracks)}</div>
      </section>
    )
  }

  _selectTrack(track) {
    return () => {
      actions.trackSelect(track.hash)
    }
  }

  _trackList(tracks) {
    let rows = []
    tracks.forEach((track, _) => {
      let selected = null
      if (this.currentTrack == track.hash) selected = true
      rows.push(
        <div key={track.hash} onClick={this._selectTrack(track)}>
          <Track track={track} selected={selected} />
        </div>
      )
    })
    return rows
  }
}

export default TrackList
