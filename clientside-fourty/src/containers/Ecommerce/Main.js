import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home'
import Add from './Add'
import Detail from './Detail/Detail'

class Main extends Component {

    componentDidMount() {
        // this.props.actions.loadEcommerce();
        // console.log('awal',this.props.data);

    }

    render() {
        // const { data, actions } = this.props
        // console.log('maint',this.props.data);
        return (
            <div className="container">
                <Route path="/" exact component={Home}/>
                <Route path="/add-ads" component={Add} />
                <Route path="/detail" exact component={Detail} />
            </div>
        );
    }
}

export default Main;
