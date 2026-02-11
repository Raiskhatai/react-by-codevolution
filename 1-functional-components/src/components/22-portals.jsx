import React from 'react'
import ReactDOM from "react-dom"

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <h1>portals demo</h1>,
    document.getElementById("Portal-root")
  )
}

export default PortalDemo

// A React Portal provides a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component, while preserving React’s event bubbling and component tree.

// <body>
//   <div id="root"></div>
//   <div id="modal-root"></div>
// </body>

