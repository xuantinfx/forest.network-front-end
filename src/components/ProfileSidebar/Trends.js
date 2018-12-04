import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TrendItem from './TrendItem';

class Trends extends Component {
  render() {
    return (
        <div className="module Trends trends">
            <div className="trends-inner">
                <div className="flex-module trends-container context-trends-container">
                    <div className="flex-module-header">

                        <h3><span className="trend-location js-trend-location">Xu
                                hướng tại Toàn thế giới</span></h3>
                    </div>
                    <div className="flex-module-inner">
                        <ul className="trend-items js-trends">
                            {this.props.trends.map((trend,index)=>{
                                return <TrendItem {...trend} key={index}></TrendItem>  
                            })}
                                                      
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Trends

Trends.propTypes = {
    trends: PropTypes.array,
}