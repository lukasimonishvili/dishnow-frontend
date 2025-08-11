import Styled from "styled-components";

const StyledPlateContent = Styled.div`
min-width: 305px;
height: 315px;

background: #FFFFFF;
/* Shadow/shadow-sm */
box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
border-radius: 16px;

`;

const MiniPlate = ({id, title, likes, duration_minutes}) => {
    return <>
        <StyledPlateContent>
                
        </StyledPlateContent>
    </>
}
export default MiniPlate;