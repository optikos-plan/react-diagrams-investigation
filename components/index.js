// import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import simpleExampleRender from './SimpleExample'

ReactDOM.render(
  <div id='demo' className='bg-blue column center-xy fill-xy'>
    <h1>Simple Example</h1>
    {simpleExampleRender()}
  </div>,
  document.getElementById('app')
)
