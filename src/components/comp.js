import React from 'React'

// basic component - links the stores from provider to child components
//
class Comp extends React.Component {
  componentDidMount() {
    if (this.props && this.props.children && !this.props.route) {
      // TODO: check one more time maybe
      if (this.props.children.store) {
        this.props.store = this.props.children.store
      }
    }
  }
  // main method / functionality/mount-injection-method via component hierarchy and props

  getStore() {
    if (!this.context.store) {
      throw "No Store, please use a Provider to make the store available to the components. You can use the PureProvider too (wrap your element with it)."
    }
    return this.context.store.getState()
  }
  // useful helper to access the store
}

Comp.contextTypes = { store: React.PropTypes.object }

export default Comp
