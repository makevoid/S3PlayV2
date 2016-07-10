import React  from 'React'
import Comp  from '../comp'

class Track extends Comp {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const track = this.props.track
    const id    = track.hash
    const hash  = track.hash
    const name  = track.name
    let classesSel = ""
    if (track.selected) classesSel = " selected"
    let classes = `track${classesSel}`
    return (
      <div className={classes}>
        Track: {name} -
        <span className="hash">{id}</span>
      </div>
    )
  }
}

export default Track
