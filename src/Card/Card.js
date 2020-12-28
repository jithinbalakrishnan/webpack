import React from 'react';
import styled from "styled-components";
import {IMG_BASE_URL} from '../config';

export const List = React.memo((props) => (
   <Container>
        {props.data.map((item,index) => {
            let isAddedInTheWatchList = props.watchList && props.watchList.findIndex(movie => (movie.id == item.id)) != -1;
            return  <React.Fragment key={index}>
            <Card >
                <span onClick= {props.handleCardSelection.bind(this, item)}>
                <img src= {IMG_BASE_URL+ item.backdrop_path}></img>
                <TitleContainer><div>{item.title || item.name}</div><div>{item.vote_average} / 10 <span></span></div></TitleContainer>
                
                </span>
                <WatchListText onClick={props.handleWatchListClick.bind(this, item)}>
                { props.action == "add" && !isAddedInTheWatchList &&
                    <span><i className="fa fa-plus" aria-hidden="true"></i>Add to watch list</span>
                }
                { props.action == "remove" &&
                    <span><i className="fa fa-trash" aria-hidden="true"></i>Remove from watch list</span>
                }
                </WatchListText>
                { props.action == "add" && isAddedInTheWatchList &&
                    <WatchListText>Added to watch list</WatchListText>
                }
            </Card>
            </React.Fragment>
        })}
   </Container>
));


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`;
const Card = styled.div`
    padding: 15px;
    width: 250px;
    
  img {
    width: 250px;
    min-width: 150px;
    display: block;
    border-radius: 5px;
    }

    & span:hover {
        cursor: pointer;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    color: #3c3a3a;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
`;

const WatchListText = styled.span`
    margin-top: 5px;
    color: #3c3a3a;
    font-size: 13px;

    & i {
        margin-right: 5px;
    }
    :hover {
        cursor: pointer
    }
`;