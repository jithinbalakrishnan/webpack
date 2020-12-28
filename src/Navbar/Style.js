import styled from "styled-components";

const Container = styled.div`
    height: 20px;
    background-color: #ff0000c4;
    padding: 18px 50px;
    display: flex;
    justify-content: space-between;
`;

const Brand = styled.span`
    color: white;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 2px
`;

const NavLeftContainer = styled.div`

`;

const NavRightContainer = styled.div`

`;

const NavItem = styled.span`
    margin-right: 15px;
    font-size: 17px;
    color: white;
    font-weight: 400;

    :hover {
        cursor: pointer;
    }
`;
const Count = styled.span`
    border: 1px solid #fff;
    font-size: 14px;
    padding: 0px 2px;
    margin-left: 4px;
`;

export {
    Container,
    Brand,
    NavLeftContainer,
    NavRightContainer,
    NavItem,
    Count
}