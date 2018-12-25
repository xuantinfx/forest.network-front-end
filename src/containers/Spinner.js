import React, { Component } from 'react'
import { connect } from 'react-redux'

class Spinner extends Component {
  render() {
    return (
      this.props.isLoading ?
        <div className="spinner-container d-flex align-items-center justify-content-center">
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        : null
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.spinnerIsLoading
})

export default connect(mapStateToProps, null)(Spinner)
