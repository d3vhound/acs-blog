import React, { Component } from 'react'

class IgSection extends React.Component {

  componentDidMount() {
    (function () {
      var i, e, d = document, s = "script"; i = d.createElement("script"); i.async = 1;
      i.src = "https://cdn.curator.io/published/a6665118-aa94-463f-b28d-cf805add8e2a.js";
      e = d.getElementsByTagName(s)[0]; e.parentNode.insertBefore(i, e);
    })();
  }

  render() {
    return (
      <section className="section">
        <div className="container has-text-centered">
          <h1 className="ig-section">Instagram</h1>
          <div id="curator-feed"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
        </div>
      </section>
    )
  }
}

export default IgSection