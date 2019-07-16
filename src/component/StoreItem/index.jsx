import React, { Component } from 'react'
import { ScoreStart } from 'component'
export default class StoreItem extends Component {
  renderBrand = brand_type => {
    if (brand_type) {
      return <div className="brand brand-in">品牌</div>
    } else {
      return <div className="brand brand-new">新到</div>
    }
  }
  render() {
    const { storeList } = this.props

    return (
      <div>
        {storeList &&
          storeList.map(item => {
            return (
              <div key={item.id} className="store-item">
                <img
                  src={item.pic_url}
                  alt="图片"
                  className="store-item-left"
                />
                {this.renderBrand(item.brand_type)}
                <div className="store-item-right">
                  <p className="right-head">{item.name}</p>
                  <div className="right-center">
                    <div className="sell-score">
                      <ScoreStart score={item.wm_poi_score} />
                      <span className="month-sell">月售</span>
                      {item.month_sale_num < 999 ? item.month_sale_num : '999+'}
                    </div>
                    <span>
                      {item.mt_delivery_time} | {item.distance}
                    </span>
                  </div>
                  <div className="right-bottom">
                    <span>起送 ¥{item.min_price}</span>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
