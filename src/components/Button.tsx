import styled from "styled-components";

const StyledButton = styled.button`
    padding: 16px 24px;
    border: 1px solid #F1F1F1;
    background: #ffffff;
    border-radius: 8px;
    color: #232E35;
    font-size: 14px;
    font-family: 'Inter'
`;

type Props = {
    children: string
}
const Button = ({children }: Props) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button