import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../../../actions'

import '../Custom.css'
const ReactMarkdown = require('react-markdown')

let boxBorder = {
    // border: '1px solid',
    borderRadius: '.25rem',
    boxShadow: '0 0 0 .2rem rgba(0, 123, 255, .25)'
}
let alignCardTitle = {
    textAlign: 'left',
    // color: '#2800d6',
    marginBottom: '30px'
}
let alignCardBrand = {
    cssFloat: 'left',
    fontSize: '12px',
    color: '#fff',
    marginTop: '-25px',
    marginBottom: '5px'
}
let alignBadgePrice = {
    cssFloat: 'left',
    fontSize: '11px',
    color: '#fff',
    marginTop: '-5px',
    marginBottom: '1px'
}
let alignCardPrice = {
    textAlign: 'left',
    marginTop: '-10px',
    marginLeft: '40px',
    color: '#eb4b33'
}
let alignCardDesc = {
    textAlign: 'left',
    marginTop: '20px',
    marginBottom: '20px'
}
let borderImg = {
    // border: '4px solid #18BC9C',
    // borderRadius: '.5rem',
    width: '400px'

}
let imgFit = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}
class Detail extends Component {


    componentDidMount() {
    }

    render() {
        console.log('try front', this.props.counter);
        const { counter } = this.props

        return (
            <div>
                <div class="row mt-5">
                    <div class="col-sm-6">
                        <div className='item-photo' style={borderImg}>
                            <img className='detail-photo' style={imgFit} src={`http://localhost:3001//uploads/${counter.image}`} alt=""></img>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="box" style={boxBorder}>
                            <div class="card-body">
                                <h2 class="card-title" style={alignCardTitle}>{counter.title}</h2>
                                <span class="badge badge-primary" style={alignCardBrand}>Brand {counter.brand}</span>
                                <hr />
                                <span class="badge badge-danger" style={alignBadgePrice}>Price</span>
                                <h3 style={alignCardPrice}>{counter.price.toLocaleString('en-US', { style: 'currency', currency: 'IDR' })}</h3>
                                <p style={alignCardDesc}>{counter.desc}</p>
                                <button class="btn btn-outline-success"><i class="fa fa-fw fa-heart"></i> Vote</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row ml-3'>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <button class="nav-link active">Product Detail</button>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Testimonial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Reviews</a>
                        </li>
                    </ul>
                </div>
                <div className='row ml-3 mt-3'>
                    <p style={{textAlign:'left'}}><ReactMarkdown
                        source={counter.detail}
                        escapeHtml={false}
                        />
                    </p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)