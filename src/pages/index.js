import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
<div>
    <div className="Hero">
        <div className="HeroGroup">
        <h1>回到最初，简单纯粹</h1>
    <p>唤换，一个更快更便捷的二手交易平台，引领二手交易新潮流</p>
    <p>Now Let's go to exchange the world.</p>
    <Link to="/page-2/">Go to page 2</Link>
        </div>
    </div>
</div>

)

export default IndexPage
