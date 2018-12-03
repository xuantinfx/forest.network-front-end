import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TrendItem extends Component {
  static propTypes = {

  }

  render() {
    return (
        <li className="trend-item js-trend-item  context-trend-item"
            data-trend-name="Funes Mori"
            data-trends-id="-634244863065385003"
            data-trend-token=":location_request:entity_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">

            <a className="pretty-link js-nav js-tooltip u-linkComplex "
                href="https://twitter.com/search?q=%22Funes%20Mori%22&amp;src=tren"
                data-query-source="trend_click">
                <span className="u-linkComplex-target trend-name"
                    >Funes Mori</span>


                <div className="js-nav trend-item-context"></div>
                <div className="js-nav trend-item-stats">
                    15,1&nbsp;N Tweet
                </div>
            </a>

        </li>
    )
  }
}

export default TrendItem
