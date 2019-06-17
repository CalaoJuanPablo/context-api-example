import React from 'react'
import { PersonContext } from '../provider/Person'

class Person extends React.Component {
  render() {
    return (
      <PersonContext.Consumer>
        {context => (
          <React.Fragment>
            <p>Name: {context.state.name}</p>
            <p>Age: {context.state.age}</p>
            <button onClick={context.actions.incrementAge}>
              Increment Age
            </button>
          </React.Fragment>
        )}
      </PersonContext.Consumer>
    )
  }
}

export default Person