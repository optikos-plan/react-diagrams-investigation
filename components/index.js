// import '@tmkelly28/tk-css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Custom from './DemoCustomExample'

ReactDOM.render(
  <div className='bg-blue column'>
    <h1>Custom Example</h1>
    <Custom />
  </div>,
  document.getElementById('app')
)
