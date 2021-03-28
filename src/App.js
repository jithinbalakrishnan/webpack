import React from 'react';
import {connect} from 'react-redux'
import Dashboard from './Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as Actions from './store/actions/updateLogin';
import Navbar from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import Modal from 'react-modal';
import Login from './Login/Login';
import WatchList from './WatchList/WatchList';
import './App.css';
import MovieInfo from './MovieInfo/MovieInfo';
import * as WatchListActions from './store/actions/watchList';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadious         : '10px',
    backgroundColor       : '#fbfbfb'
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }
  componentWillMount = () => {
    console.log("Environment", process.env.REACT_APP_ENV)
  }
  handleNavClick = (nav) => {
    if (nav == "Login") {
      this.handleModalState()
    } else if(nav == "Logout") {
      this.props.updateLoginUser({});
      this.props.updateWatchList([]);
    } 
  };
  handleModalState = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
  }

  render() {
    return (
      <div className="App">
         <Router>
         <Navbar 
          handleNavClick={this.handleNavClick} 
          tabs={[this.props.loggedInInfo.userName ? "Logout" : "Login"]} 
          message = {this.props.loggedInInfo.userName}
          />
          <Banner />
          <Switch>
                <Route exact path="/home" render= {() => <Dashboard />} />
                <Route exact path="/watchlist" render= {() => <WatchList />} />
                <Route exact path="/info" render= {() => <MovieInfo />} />
                <Route exact path="/" render= {() => <Dashboard />} />
                
               
          </Switch>
        </Router> 
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalState}
          style={customStyles}
          ariaHideApp={false}
        >
          <Login handleModalState = {this.handleModalState}/>
        </Modal> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInInfo: state.loggedInInfo.loggedInUser,
})
const mapDispatchToProps = dispatch => ({
    updateLoginUser: payload => dispatch(Actions.updateLoginInfo("UPDATE_LOGGED_IN_USER", {})),
    updateWatchList: payload => dispatch(WatchListActions.updateWatchList("UPDATE_WATCH_LIST", payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
