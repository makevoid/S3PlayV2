const bitcore = require('bitcore-lib')
const c = console

const store = localStorage // just a shorter alias for localStorage
let privateKey = null

// KeyManager  -----------(actual implementation / module)

// TODO: change antani as if it would antani really
//
// TODO: seriously, modularize this part
//
if (store.privateKey) {
  c.log("Private key present in localStorage")
  c.log("Private key:")
  c.log(store.privateKey)
  privateKey = new bitcore.PrivateKey(store.privateKey)
} else {
  privateKey = new bitcore.PrivateKey()
  let privateKeyWif = privateKey.toWIF()
  store.privateKey  = privateKeyWif
  c.log("Private key saved successfully!")
  c.log("Refresh the page or check your 'Resources > Local Storage' from the developer tools")
}

// KeyManager  ----------- (new ES6-ified module, needs testing)

// class KeyManager {
//   constructor(store = localStorage) {
//     this.store = store
//     if (store.privateKey) {
//       logPrivateKey()
//       privateKey = new bitcore.PrivateKey(store.privateKey)
//     } else {
//       privateKey = new bitcore.PrivateKey()
//       let privateKeyWif = privateKey.toWIF()
//       store.privateKey  = privateKeyWif
//       logKeyGeneration()
//     }
//     this.privateKey = privateKey
//     this.privateKeyWif = store.privateKey
//     this.address = privateKey.toAddress()
//     this.addressString = privateKey.toAddress().toString()
//   }
//
//   logPrivateKey() {
//     c.log("Private key present in localStorage")
//     c.log("Private key:")
//     c.log(this.store.privateKey)
//   }
//
//   logKeyGeneration() {
//     c.log("Private key saved successfully!")
//     c.log("Refresh the page or check your 'Resources > Local Storage' from the developer tools")
//   }
//
//  }
//
// keys = new KeyManager()
// //
// // keys.privateKey
// // keys.privateKeyWif
// // keys.address
// // keys.addressString
// //
// // et voila'


const address = privateKey.toAddress().toString()

let tracks = []
let track

// dev seeds
track = {
  name: "Antani 1 - Blue Swings",
  hash: "123456789",
  file: "/tmp/song1.mp3",
}
tracks.push(track)
track = {
  name: "Antani 2 - Yeep yeep",
  hash: "1234567890",
  file: "/tmp/song2.mp3",
}
tracks.push(track)
track = {
  name: "Antani 3 - Gig the Jeep",
  hash: "12345678901",
  file: "/tmp/song3.mp3",
}
tracks.push(track)


// Configs
//
//
const defaultTracks       = tracks

// defaultCurrentTrack - (Track reference/ID via track.hash)
//
// const defaultCurrentTrack = "" // definitive
const defaultCurrentTrack = "1234567890" // seeds

// ---


const defaultState = {
  address:         address,
  privateKey:      privateKey,
  balance:         0, // NOTE: Balance is at 0 confirmations
  tracks:          defaultTracks,
  currentTrack:    defaultCurrentTrack,
  // tracks:       [],
}

export default defaultState
