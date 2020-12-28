import styled from "styled-components";

export const Title = (props) => {
    return <Heading>
        {props.title}
        <hr/>
    </Heading>
}

const Heading = styled.h2`
    padding: 0px 17px;
`;