import { createStore, compose } from 'Redux'

import mainStore from './main_store'

// const store = createStore( mainStore ) // prod store

// dev store
const devTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(
  mainStore,
  devTools
)
// TODO: tweak store creation - load devtools only in development (read JS_ENV / NODE_ENV environment variable)

export default store
