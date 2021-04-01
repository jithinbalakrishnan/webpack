import React, { useState } from 'react';
import styled from "styled-components";
import { BASE_URL, API_KEY } from '../config/config';
import { connect } from "react-redux";
import * as Actions from '../store/actions/updateMovies';
import { useDispatch } from "react-redux";
import { InputBox } from "../Components/InputBox";

export const Banner = React.memo((props) => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        searchText && fetch(BASE_URL + "search/movie?api_key=" + API_KEY + "&language=en-US&include_adult=false&query=" + searchText)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(Actions.updateSearchMoveResults("UPDATE_MOVIES", response.results));
                    dispatch(Actions.updateSearchText("UPDATE_SEARCH_TEXT", searchText));
                    setSearchText('');

                },
                (error) => {

                }
            )
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }


    return (
        <Container>
            <div>
                <WelcomeRaw>Welcome to Nflix</WelcomeRaw>
                <InputContainer><i className="fa fa-search"></i>
                    <InputBox value={searchText} onKeyDown={handleKeyDown} placeholder="Search for a movie, tv show, ..." onChange={event => { setSearchText(event.target.value) }} />
                    <SearchButton onClick={handleSearch} >Search</SearchButton></InputContainer>



            </div>
        </Container>
    )
});

const mapDispatchToProps = dispatch => {
    return {
        saveSearchResults: payload =>
            dispatch(Actions.updateSearchMoveResults("UPDATE_MOVIES", payload))
    }
}

export default connect(null, mapDispatchToProps)(Banner);


const Container = styled.div`
    height: 300px;
    background-color: lavenderblush;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const WelcomeRaw = styled.div`
    text-align: center;
    color: #ff0000c4;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 2px;
`;
const InputContainer = styled.div`
    margin-top: 15px;
    display: flex;
    i {
        position: absolute; 
        margin-left: 10px;
        margin-top: 8px;
    }   
    input {
        width: 500px;
    }
`;
const SearchContainer = styled.span`

`;

const SearchButton = styled.div`
    font-size: 14px;
    height: 32px;
    line-height: 30px;
    background-color: #ff0000c4;
    border-radius: 20px;
    width: 98px;
    text-align: center;
    color: white;
    margin-left: 10px;
    
    :hover {
        cursor: pointer;
    }
    
`;