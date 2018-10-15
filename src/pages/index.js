import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';

const IndexPage = () => (
<div>
    <div className="Hero">
        <div className="HeroGroup">
        <h1>回到最初，简单纯粹</h1>
    <p>唤换，一个更快更便捷的二手交易平台，引领二手交易新潮流</p>
    <p>Now Let's go to exchange the world.</p>
    <Link to="/page-2/">开始交易NOW</Link>
        </div>
    </div>
    <div className="CardGroup">
    <Card 
      title="智能手机"
      text="便宜大甩卖"
      image={require('../images/wallpaper.jpg')} />
    <Card 
      title="平板电脑"
      text="便宜大甩卖"
      image={require('../images/wallpaper2.jpg')} />
    <Card 
      title="台式电脑"
      text="便宜大甩卖"
      image={require('../images/wallpaper3.jpg')} />
    <Card 
      title="笔记本1"
      text="便宜大甩卖"
      image={require('../images/wallpaper4.jpg')} />
     <Card 
      title="游戏主机"
      text="便宜大甩卖"
      image={require('../images/wallpaper.jpg')} />
     <Card 
      title="其他商品"
      text="便宜大甩卖"
      image={require('../images/wallpaper2.jpg')} />
</div>
</div>

)
export default IndexPage
