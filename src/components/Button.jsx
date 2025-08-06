import Styled from "styled-components";


const StyledButton = Styled.button`
    background: ${(props) => (props.color)};
    border-radius: 6px;
    
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: -0.02em;

    color: ${(props) => (props.text_color)};
    padding-bottom: 13px;
    padding-top: 13px;
    padding-right: 33px;
    padding-left: 33px;
    &:focus {
    outline: 2px solid #000; /* o el color que quieras */
    outline-offset: 2px;
  }
`;

const Button = ({ input_text, color, text_color, on_click_function }) => {

    return <>
    <StyledButton color={color} text_color={text_color} onClick={on_click_function}>{input_text}</StyledButton>
    </>

};

export default Button;