import React, {Component} from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" checked />
        <label>Taste JavaScript</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    )
  }
}