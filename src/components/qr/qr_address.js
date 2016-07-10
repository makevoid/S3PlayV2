import React    from 'React'
import ReactDOM from 'ReactDOM'
import Comp     from '../comp'
import QR       from './qr'
import Address  from '../bitcoin/address'

class QRAddress extends Comp {
  constructor(props) {
    super(props)
    this.render = this.render.bind(this)
    this.myHandler = this.myHandler.bind(this)
  }
  componentDidMount() {
    this.qrElem = ReactDOM.findDOMNode(this.refs.qrCont)
    // console.log(this.qrElem)
    // $('#fullscreen-button').on('click', function() {  } });
    this.qrElem.addEventListener('click', this.myHandler);
  }
  myHandler() {
    console.log(">>> TODO: enlarge QR ", this.qrElem)
  }
  render() {
    let address = this.getStore().address
    return (
      <div>
        <div ref="qrCont">
          <QR address={address} onClick={this.qrElem && this.qrElem.requestFullscreen}/>
        </div>
        <Address address={address}/>
      </div>
    )
  }
}

export default QRAddress
