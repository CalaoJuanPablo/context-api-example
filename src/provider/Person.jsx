import React from 'react'

export const PersonContext = React.createContext()

class PersonProvider extends React.Component {
  state = {
    name: 'Juan',
    age: 25
  }
  actions = {
    incrementAge: () => {
      this.setState({ age: this.state.age + 1})
    }
  }
  render() {
    return (
      <PersonContext.Provider value={{
        state: this.state,
        actions: this.actions
      }}>
        {this.props.children}
      </PersonContext.Provider>
    )
  }
}

export default PersonProvider