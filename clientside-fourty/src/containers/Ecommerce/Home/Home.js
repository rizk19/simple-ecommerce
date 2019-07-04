import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../../../actions'
import InfiniteScroll from 'react-infinite-scroller';
import Card from './Card'

let buttonAds = {
    marginTop: '15px',
    marginLeft: '15px',
    cssFloat: 'left'
}

class Home extends Component {

    componentDidMount() {
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;
        const { data, actions } = this.props
        // console.log('match',  this.props.match);
        var items = []
        data.map((item, idx) => {
            items.push(
                <Card
                    key={idx}
                    data={item}
                    actions={actions}
                />

            )
        })

        return (

            <div>
                <div className='row mt-2'>
                    <Link to={{ pathname: 'add-ads' }} className='btn btn-primary' style={buttonAds}>Add Ads</Link>
                </div>
                <div className='row mt-3' style={{ height: '380px' }}>

                    {data.map((item, idx) => (
                            <Card
                                key={idx}
                                data={item}
                                actions={actions}
                            />
                    ))}
                    </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        data: state.data,
        counter: ownProps.match.params.number
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
)(Home)
