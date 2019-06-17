import React from 'react'
import { PersonContext } from '../provider/Person'

class Person extends React.Component {
  render() {
    return (
      <PersonContext.Consumer>
        {context => (
          <React.Fragment>
            <p>Name: {context.name}</p>
            <p>Age: {context.age}</p>
          </React.Fragment>
        )}
      </PersonContext.Consumer>
    )
  }
}

export default Person