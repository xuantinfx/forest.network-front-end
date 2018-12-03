import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Footer extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="Footer module roaming-module Footer--slim Footer--blankBackground">
        <div className="flex-module">
            <div className="flex-module-inner js-items-container">
                <ul className="u-cf">
                    <li className="Footer-item Footer-copyright copyright">©
                        2018 Twitter</li>
                    <li className="Footer-item"><a className="Footer-link"
                            href="https://twitter.com/about"
                            rel="noopener">Giới thiệu</a></li>
                    <li className="Footer-item"><a className="Footer-link"
                            href="https://support.twitter.com/"
                            rel="noopener">Trung tâm trợ giúp</a></li>
                    <li className="Footer-item"><a className="Footer-link"
                            href="https://twitter.com/tos" rel="noopener">Điều
                            khoản</a></li>
                    <li className="Footer-item"><a className="Footer-link"
                            href="https://twitter.com/privacy"
                            rel="noopener">Chính sách riêng tư</a></li>
                    <li className="Footer-item"><a className="Footer-link"
                            href="https://support.twitter.com/articles/20170514"
                            rel="noopener">Cookie</a></li>
                    <li className="Footer-item"><a className="Footer-link"
                            href="https://support.twitter.com/articles/20170451"
                            rel="noopener">Thông tin quảng cáo</a></li>
                </ul>
            </div>
        </div>

    </div>

    )
  }
}

export default Footer
