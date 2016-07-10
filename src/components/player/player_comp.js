import React    from 'React'
import ReactDOM from 'ReactDOM'
import Comp     from '../comp'
import actions  from '../../actions/index'

let replaceNbsp = function() {
  return this.replace(/ /g, "\u00a0")
}
String.prototype.replaceNbsp = replaceNbsp;


class PlayerComp extends Comp {
  componentDidMount() {
    this.player = ReactDOM.findDOMNode(this.refs.player)

    this.player.addEventListener('ended',      this._audioEnded)
    this.player.addEventListener('timeupdate', this._audioUpdate)

    this._playPause = this._playPause.bind(this)
  }

  _audioEnded() {
    console.log("audioEnded JS EVT")
  }

  _audioUpdate() {
    console.log("audioUpdate JS EVT")
  }

  render() {
    // let debugControls = true
    let debugControls = false

    let store = this.getStore()
    let playing = store.playing
    this.playing = playing

    let playingIndicator = "  ".replaceNbsp()
    if (playing) playingIndicator = "♪"

    // Action
    if (this.player) this._playerPlayPause()

    return (
      <section className="player" id="s3play">
        <span className="left sl20"> {playingIndicator} </span>

        {/* TODO move into download <TrackDownload /> button */}
        <a className="download btn sr10" href="javascript:void(0)"> ⇓ </a>

        <div className="sl10" />
        <a className="prev sr30" onClick={this._prev}> ≪ </a>
        <a className="play_pause sr15" data-playing={playing ? "1" : ""} onClick={this._playPause} href="javascript:void(0)">
          {playing ? "▍▍" : "▶   ".replaceNbsp() }
        </a>
        <a className="next" onClick={this._next} href="javascript:void(0)"> ≫ </a>

        {/* audio tag - where all the magic happens */}
        <div>
          <audio ref="player" className="s3play_audio" mozaudiochannel="content" src="/tmp/song1.mp3" autoPlay={playing ? "autoPlay" : ""}  controls={debugControls ? "controls" : ""}></audio>
        </div>
        {/* TODO: <div className="song_name"></div> */}

      </section>
    )
  }

  _prev() {
    actions.trackPrev()
  }

  _next() {
    actions.trackNext()
  }

  _playerPlay() {
    this.player.play()
  }

  _playerPause() {
    this.player.pause()
  }

  _playerPlayPause() {
    if (this.playing) {
      this._playerPlay()
    } else {
      this._playerPause()
    }
  }

  _playPause() {
    actions.playerPlayPause()
  }

}

export default PlayerComp

// Inputs: Seek - Volume - DL
//
// <div className="inputs">
//   <span>seek:</span>
//   <input className="current_time" value="0" type="range">
//   <span>vol:</span>
//   <input className="volume" value="0.8" max="1" step="0.02" type="range">
// </div>
