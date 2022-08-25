import React from 'react'
import Body from './Body'
import Header from './Header';
function MainComponent() {
  return (
  <>
  <Header />
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <Body />
      </div>
    </div>
  </>
  )
}

export default MainComponent