import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TrendItem extends Component {
  render() {
    return (
        <li className="trend-item js-trend-item  context-trend-item">
            <a className="pretty-link js-nav js-tooltip u-linkComplex "
                href={this.props.trendLink}>
                <span className="u-linkComplex-target trend-name">
                    {this.props.trendName}                
                </span>

                <div className="js-nav trend-item-context"></div>
                <div className="js-nav trend-item-stats">
                    {this.props.trendStats}&nbsp;N Tweet
                </div>
            </a>

        </li>
    )
  }
}

export default TrendItem

TrendItem.propTypes = {
    trendLink: PropTypes.string,
    trendName: PropTypes.string,
    trendStats: PropTypes.number,
}


