import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Search extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div role="search">
                <form className="t1-form form-search js-search-form" action="https://twitter.com/search" id="global-nav-search">
                    <label className="visuallyhidden" htmlFor="search-query">Truy vấn tìm kiếm</label>
                    <input className="search-input" type="text" id="search-query" placeholder="Tìm kiếm Twitter"
                        name="q" autoComplete="off" spellCheck="false" aria-autocomplete="list" />
                    <span className="search-icon js-search-action">
                        <button type="submit" className="Icon Icon--medium Icon--search nav-search"
                            tabIndex="-1">
                            <span className="visuallyhidden">Tìm kiếm Twitter</span>
                        </button>
                    </span>
                    <div role="listbox" className="dropdown-menu typeahead" id="typeahead-dropdown-1">
                        <div aria-hidden="true" className="dropdown-caret">
                            <div className="caret-outer">hjds</div>
                            <div className="caret-inner">asds</div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
