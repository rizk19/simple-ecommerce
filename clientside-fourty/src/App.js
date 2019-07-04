import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './containers/Ecommerce/Main';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AppActions from './actions'
import './App.css';

class App extends React.Component {

  componentDidMount(){
    this.props.actions.loadEcommerce();
  }

  render() {
    const {data, actions} = this.props
    // console.log('awal',this.props.data) 

    return (
      <BrowserRouter>
        <div className="App">
          <Main 
          data={data}
          actions={actions}/>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state){
  return{
    data: state.data
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
