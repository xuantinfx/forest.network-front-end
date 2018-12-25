import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes = {
        
    }

    state = {
        value: ""
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/profile/${this.state.value}`);
        this.setState({
            value: ""
        })
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div role="search">
                <form className="t1-form form-search js-search-form" id="global-nav-search" onSubmit={this.onSubmit.bind(this)}>
                    <label className="visuallyhidden" htmlFor="search-query">Truy vấn tìm kiếm</label>
                    <input className="search-input" type="text" id="search-query" placeholder="Tìm kiếm Người dùng bằng address"
                        name="q" autoComplete="off" spellCheck="false" aria-autocomplete="list" 
                        value={this.state.value} onChange={this.onChange.bind(this)}/>
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

export default withRouter(Search);