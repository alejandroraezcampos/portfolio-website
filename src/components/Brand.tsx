import styled from "styled-components";
import Icon from '../assets/brand-icon__blank.png';

const BrandContainer = styled.div`
    display: flex;
    align-items: center;
`
const IconImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 16px;
`

const Name = styled.h1`
    font-family: 'Plus Jakarta Sans';
    font-size: 20px;
` 

const Brand = () => {
    return (
        <BrandContainer>
            <IconImage src={Icon}></IconImage>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Name>Alejandro</Name>
            </div>
            
        </BrandContainer>
    );
}

export default Brand;