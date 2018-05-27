import * as React from 'react'
import Link from 'gatsby-link'

const RandomPage = () => (
  <div style={{ color: `tomato` }}>
    <h1>Look at this random image. Look at it!</h1>
    <img src="https://source.unsplash.com/random/400x200" alt="a random image" />
    <br />
    <div>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div>
      <Link to="/counter/">Check out the counter</Link>
    </div>
  </div>
)

export default RandomPage
