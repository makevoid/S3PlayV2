# S3Play (v2!)

WIP! react component based ui - (wanted to use riotjs with HAML and coffeescript but meh, I have to stick to react ^^)

--- 

Components: TODO


    // Player (easy to access interface to play stop and skip)

    // <Player>
    //   <TrackPrev>
    //   <PlayPause>
    //   <TrackNext>


    // Track info and play / enqueue

    // Track
    //
    // <Track onclick={play}>
    //   TrackName
    //   TrackArtist
    //   TrackDuration
    //
    //   TrackEnqueueBtn


    // playlist - hash_url based / blockchain hash + ipfs + redis based store
    //
    // <Playlist>
    //   for track in tracks
    //     <Track>


    // settings
    //
    // <Config>
    //   S3Bucket



Restarted, based on `makevoid/react-redux-rollup-boilerplate` - forked from makevoid/bitnfc#e36ca2f - Jul '16

### Install

Instal npm dependencies

    npm i

    npm i -g rollup

Re-compile (babel):

   rollup -c config/rollup.js


Run with your favourite web server:

    python -m SimpleHTTPServer 3000

Then access <http://localhost:3000>

### Automatic re-rollup + livereload

Setup:

    gem i guard

Run:

    guard

Modify a file and then you should have the build compiled and see the browser reloaded.


### Update bitcoin-api-light browserify vendored bundle

If you need to update the `BitcoinLightClient` bundle, build it up via browserify:

   npm i

Or a specific force-update to bitcoin-api-light itself, then:

   browserify vendor/bitcoin_api_light.js -o vendor/bitcoin_api_light_bundle.js
