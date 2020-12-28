
import styled from "styled-components";

export const InputBox = (props) => (
    <InputElement value={props.value}
        onKeyDown={props.handleKeyDown}
        placeholder={props.placeholder}
        onChange={props.onChange}>

    </InputElement>
);

const InputElement = styled.input`
    width: 100%;
    height: 14px;
    border: none;
    border-radius: 30px;
    padding: 10px 33px;

    :focus{
    outline: none;
}
`;