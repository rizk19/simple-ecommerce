import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../Custom.css'

let cardFixHeight = {
    height: '500px',
    width: '250px'
}
let borderImg = {
    border: '4px solid rgba(165, 165, 165, 0.3)',
    borderRadius: '.5rem',
    // width: '100%',
    height: '245px',

}
let imgFit = {
    objectFit: 'cover',
    width: '85%',
    height: 'auto'
}
let contentFit = {
    textAlign: 'left',
    padding: '8px'
}
let descStyle = {
    marginTop: '7px',
    marginBottom: '7px',
    fontSize: 'small'
}
let marginContent = {
    marginTop: '3px',
    marginBottom: '7px'
}
let priceStyle = {
    // textAlign: 'right',
    color: '#18BC9C',
    marginTop: '7px',
    marginBottom: '7px'
}
let buttonDetail = {
    position: 'absolute',
    right: '8px',
    bottom: '8px',
    cssFloat: 'right'
}



class Card extends Component {
    state = {
        redirect: true
    }
    detailHandle = (id, title, rate, desc, price, brand, detail, image) => {
        // alert(this.props.actions)

        this.props.actions.detailData(id, title, rate, desc, price, brand, detail, image)
    }
    render() {
        const { data } = this.props
        console.log('card', data.image);
        // let imgD = data.image

        let price = data.price
        return (
            <div className='col ml-0 mt-3 mb-0 mr-0' style={{ width: '300px' }}>
                <div className='card' style={cardFixHeight}>
                    <div className='card-header'>
                        <div className="card-img" style={borderImg}>
                            <img style={imgFit} src={`http://localhost:3001//uploads/${data.image}`} alt=""></img>
                        </div>
                    </div>
                    <div className='card-content' style={contentFit}>
                        <div className="card-desc mt-2">
                            <h5 className="card-title" style={marginContent}>{data.title}</h5>
                            <span className={(data.rate >= 1) ? "fa fa-star checked mr-1" : "fa fa-star-o mr-1"} style={{ color: 'gold', fontSize: '17px' }} data-index="0" data-html="true" data-toggle="popover" data-placement="top" title="Very bad"></span>
                            <span className={(data.rate >= 2) ? "fa fa-star checked mr-1" : "fa fa-star-o mr-1"} style={{ color: 'gold', fontSize: '17px' }} data-index="1" data-html="true" data-toggle="popover" data-placement="top" title="Poor"></span>
                            <span className={(data.rate >= 3) ? "fa fa-star checked mr-1" : "fa fa-star-o mr-1"} style={{ color: 'gold', fontSize: '17px' }} data-index="2" data-html="true" data-toggle="popover" data-placement="top" title="OK"></span>
                            <span className={(data.rate >= 4) ? "fa fa-star checked mr-1" : "fa fa-star-o mr-1"} style={{ color: 'gold', fontSize: '17px' }} data-index="3" data-html="true" data-toggle="popover" data-placement="top" title="Good"></span>
                            <span className={(data.rate === 5) ? "fa fa-star checked mr-1" : "fa fa-star-o mr-1"} style={{ color: 'gold', fontSize: '17px' }} data-index="4" data-html="true" data-toggle="popover" data-placement="top" title="Excellent"></span>
                            <p className="card-text" style={descStyle}>{data.desc}</p>
                            <h4 style={priceStyle}>{price.toLocaleString('en-US', { style: 'currency', currency: 'IDR' })}</h4>
                            <Link to={{ pathname: 'detail' }} className='btn btn-success' style={buttonDetail} onClick={() => {
                                this.detailHandle(data.id, data.title, data.rate, data.desc, data.price, data.brand, data.detail, data.image)
                            }}>Detail Item</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;