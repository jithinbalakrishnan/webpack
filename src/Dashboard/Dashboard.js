import React from 'react';
import { List } from '../Card/Card';
import { Title } from '../Components/Title';
import { BASE_URL, API_KEY } from '../config';
import { connect } from "react-redux";
import * as Actions from '../store/actions/updateLogin';
import * as WatchListActions from '../store/actions/watchList';
import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  componentDidMount = () => {
    this.getTrendingList();
  };

  getTrendingList = () => {
    fetch(BASE_URL + "trending/all/day?api_key=" + API_KEY)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({ trendingList: response.results })

        },
        (error) => {

        }
      )
  };
  handleAddToWatchList = (selectedCard) => {
    let watchList = [...this.props.watchList];
    watchList.push(selectedCard)
    this.props.updateWatchList(watchList)
  }
  handleCardSelection = (selectedCard) =>{
    this.props.updateSelectedMovie(selectedCard)
    this.props.history.push('/info')
  }

  render() {
    return (
      <React.Fragment>
        {this.props.searchResult.length > 0 && 
        <Title title={"Search Results For " + this.props.searchKey} />}
        <List data={this.props.searchResult} 
             handleWatchListClick={this.handleAddToWatchList} 
             action="add" 
             handleCardSelection = {this.handleCardSelection}
             watchList = {this.props.watchList || []}
        />
        <Title title={"What's Trending"} />
        <List data={this.state.trendingList || []} 
          handleWatchListClick={this.handleAddToWatchList} 
          action="add" 
          handleCardSelection = {this.handleCardSelection}
          watchList = {this.props.watchList || []}
          />
      </React.Fragment>
    )
  }


};


const mapStateToProps = state => ({
  searchResult: state.searchResult.movieList,
  searchKey: state.searchResult.searchText,
  loggedInInfo: state.loggedInInfo.loggedInUser,
  watchList: state.watchList.watchList,
  selectedMovie: state.watchList.selectedMovie
})
const mapDispatchToProps = dispatch => ({
    updateLoginUser: payload => dispatch(Actions.updateLoginInfo("UPDATE_LOGGED_IN_USER", {})), 
    updateWatchList: payload => dispatch(WatchListActions.updateWatchList("UPDATE_WATCH_LIST", payload)),
    updateSelectedMovie: payload => dispatch(WatchListActions.updateSelectedMovie("UPDATE_SELECTED_MOVIE", payload))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));