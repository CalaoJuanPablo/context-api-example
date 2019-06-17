import React from 'react'

export const PersonContext = React.createContext()

class PersonProvider extends React.Component {
  state = {
    name: 'Juan',
    age: 25
  }
  render() {
    return (
      <PersonContext.Provider value={this.state}>
        {this.props.children}
      </PersonContext.Provider>
    )
  }
}

export default PersonProvider