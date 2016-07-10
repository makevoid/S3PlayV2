import React    from 'React'
import ReactDOM from 'ReactDOM'
import Comp     from '../comp'

class PlayerComp extends Comp {
  componentDidMount() {
    this.player = ReactDOM.findDOMNode(this.refs.player)

    this.player.addEventListener('ended',      this.audioEnded)
    this.player.addEventListener('timeupdate', this.audioUpdate)
  }

  audioEnded() {
    console.log("audioEnded JS EVT")
  }

  audioUpdate() {
    console.log("audioUpdate JS EVT")
  }

  render() {
    return (
      <section className="player" id="s3play">

        {/* TODO move into download <TrackDownload /> button */}
        <a className="download btn sr10" href="javascript:void(0)"> ⇓ </a>

        <div className="sl10">
        <a className="prev sr20" data-ember-action="1" href="javascript:void(0)"> ≪ </a>
        <a className="play_pause sr20" data-ember-action="3" href="javascript:void(0)">
          ▶
        </a>
        <a className="next" data-ember-action="4" href="javascript:void(0)"> ≫ </a>

        {/* audio tag - where all the magic happens */}
        <audio ref="player" className="s3play_audio" mozaudiochannel="content"></audio>

        {/* TODO: <div className="song_name"></div> */}

      </section>
    )
  }
}

export default PlayerComp

// Inputs: Seek - Volume - DL
//
// <div className="inputs">
//   <span>seek:</span>
//   <input className="current_time" data-ember-action="6" value="0" type="range">
//   <span>vol:</span>
//   <input className="volume" data-ember-action="7" value="0.8" max="1" step="0.02" type="range">
// </div>
