import React from 'react'
import Sidebar from './Sidebar'

export default (props) => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-9">
          {props.children}
        </div>
        <div className="column is-3">
          <Sidebar />
        </div>
      </div>
    </div>
  </section>
)