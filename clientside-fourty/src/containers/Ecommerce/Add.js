import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../../actions'

let detailHeight = {
    height: '150px'
}

class Add extends Component {
    state = {
        image: null
    }

    inputHandle = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value
        const rate = e.target.elements.rate.value
        const desc = e.target.elements.desc.value
        const price = e.target.elements.price.value
        const brand = e.target.elements.brand.value
        const detail = e.target.elements.detail.value

        const formData = new FormData();
        formData.append(
            'image', this.state.image);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        console.log('formdata',formData);
        

        if (title && rate && desc && price && brand && detail && formData) {
            this.props.actions.addEcommerce(title, rate, desc, price, brand, detail, formData, config)
        }
        this.props.history.push('/')
        e.target.elements.title.value = ''
        e.target.elements.rate.value = ''
        e.target.elements.desc.value = ''
        e.target.elements.price.value = ''
        e.target.elements.brand.value = ''
        e.target.elements.detail.value = ''
    }
    handleInputImage = e => {
        // alert(e.target.files[0])
        // console.log('file',e.target.files[0]);
        
        this.setState({ image: e.target.files[0] });
      };
    render() {

        console.log(this.state.image);

        return (
            <div className='mt-3'>
                <div className='formBox'>
                    <div className='formHead'>
                        <p>Add Ads From</p>
                    </div>
                    <div className="formBody">
                        <form onSubmit={this.inputHandle}>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'>Title</label>
                                <div className='col-sm-11'>
                                    <input className="form-control" name='title' placeholder=' Nama Produk'></input>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'>Rate</label>
                                <div className='col-sm-11'>
                                    <select className="form-control" name='rate'>
                                        <option name='rate' value='' selected disabled>Product Rate</option>
                                        <option name='rate' value='1'>1</option>
                                        <option name='rate' value='2'>2</option>
                                        <option name='rate' value='3'>3</option>
                                        <option name='rate' value='4'>4</option>
                                        <option name='rate' value='5'>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'>Description</label>
                                <div className='col-sm-11'>
                                    <textarea className="form-control" name='desc' maxlength="110" placeholder=' Deskripsi Singkat Produk'></textarea>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'>Price</label>
                                <div className='col-sm-11'>
                                    <input className="form-control" name='price' placeholder=' Harga Produk'></input>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'>Brand</label>
                                <div className='col-sm-11'>
                                    <input className="form-control" name='brand' placeholder=' Merk Produk'></input>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'>Detail Product</label>
                                <div className='col-sm-11'>
                                    <textarea className="form-control" name='detail' style={detailHeight} placeholder=' Detail Produk'
                                        data-toggle="popover" data-placement="top" title="You can fill this form with Markdown Input Type"></textarea>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-1 col-form-label'>File</label>
                                <div className='col-sm-11'>
                                    <input type='file' className="form-control" name='image' placeholder=' Merk Produk' onChange={this.handleInputImage}></input>
                                </div>
                            </div>
                            <Link to={{ pathname: '/' }} className='btn btn-outline-danger mr-2'>Cancel</Link>
                            <button type='submit' className='btn btn-info'>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        data: state.data
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
)(Add)
