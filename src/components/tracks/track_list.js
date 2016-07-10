import React  from 'React'
import Comp  from '../comp'
import Track  from './track'
const c = console

class TrackList extends Comp {
  constructor(props) {
    super(props)
  }

  trackList(tracks) {
    let rows = []
    tracks.forEach((track, _) => {
      if (this.currentTrack == track.hash) track.selected = true
      c.log(this.currentTrack)
      rows.push(
        <Track key={track.hash} track={track} />
      )
    })
    return rows
  }

  render() {
    const store = this.getStore()
    let tracks = store.tracks
    let currentTrack = store.currentTrack
    this.currentTrack = currentTrack
    return (
      <section className="track-list">
        <h1>Tracks ({tracks.length})</h1>
        <div>{this.trackList(tracks)}</div>
      </section>
    )
  }
}

export default TrackList
