

import React from 'react';
import { useDispatch } from "react-redux";
import { List } from '../Card/Card';
import { Title } from '../Components/Title';
import { useSelector } from "react-redux";
import * as WatchListActions from '../store/actions/watchList';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const WatchList = () => {
    const store = useSelector(state => state);
    const history = useHistory()
    const dispatch = useDispatch();
    const handleRemove = (selectedCard) => {
        let watchList = [...store.watchList.watchList];
        let index = watchList.findIndex(item => (item.id == selectedCard.id));
        watchList.splice(index,1)
        dispatch(WatchListActions.updateWatchList("UPDATE_WATCH_LIST", watchList));

    }
    const handleCardSelection = (selectedCard) => {
        dispatch(WatchListActions.updateSelectedMovie("UPDATE_SELECTED_MOVIE", selectedCard));
        history.push('/info')
    }
    return (
        <React.Fragment>
            <Title title={"Your watch list"} />
            <List data={store.watchList.watchList || []}  handleWatchListClick={handleRemove} action= "remove" handleCardSelection = {handleCardSelection}/>
        </React.Fragment>
    )
}

export default withRouter(WatchList)