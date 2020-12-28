import React from 'react';
import styled from "styled-components";
import {IMG_BASE_URL} from '../config';
import { useSelector } from "react-redux";


const MovieInfo = () => {
    const store = useSelector(state => state);
    let selectedMovie = store.watchList.selectedMovie;

    return(
        <InfoContainer>
            <img src= {IMG_BASE_URL+selectedMovie.backdrop_path}></img>
            <div>
                <Title>{selectedMovie.original_title}</Title>
                <p>{selectedMovie.overview}</p>
                <p>{"Release date " +selectedMovie.release_date}</p>
                <p>{"Rating: " +selectedMovie.vote_average+"/10"}</p>
            </div>

            {/* original_title */}
            {/* release_date */}
            {/* vote_average */}
        </InfoContainer>
    )
};

export default MovieInfo;


// Style components should be moved to separate file
const InfoContainer = styled.div`
    display: flex;
    margin: 20px;
    & img {
        border-radius: 10px;
        margin-right: 17px;
    }
    & p {
        font-weight: 500;
    }
`;

const Title = styled.h2``;
