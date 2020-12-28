import React from 'react';
import * as Style from './Style';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Navbar = React.memo((props) => {
    const store = useSelector(state => state);
    let noOfMovies = store.watchList.watchList.length || "";
    return <Style.Container>
        <Style.NavLeftContainer>
        <Link to ="/home"><Style.Brand >NFlix</Style.Brand></Link>
        </Style.NavLeftContainer>
        <Style.NavRightContainer>
            <Style.NavItem>{props.message}</Style.NavItem>
            {props.tabs.map((item, index) =>(
                <Style.NavItem key= {index} 
                onClick= {props.handleNavClick.bind(this,item)}>
                {item}
                </Style.NavItem>))}
                <Link to ="/watchlist"><Style.NavItem>Watchlist 
                {noOfMovies && <Style.Count>{noOfMovies}</Style.Count>}
                </Style.NavItem></Link>  
        </Style.NavRightContainer>

    </Style.Container>
});

export default Navbar