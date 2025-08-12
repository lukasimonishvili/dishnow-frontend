import Styled from "styled-components";
import { useState } from "react";
import DefaultPlateImg from "../assets/img/default_plate.jpg";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const StyledPlateContent = Styled.div`
min-width: 305px;
height: fit-content;

background: #FFFFFF;
/* Shadow/shadow-sm */
box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
border-radius: 16px;
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: center;
padding-top:0.5em;
padding-left:0.2em;
padding-right:0.2em;
`;

const StyledImage = Styled.img`
    height: 200px;
    width: 278px;
    border-radius: 16px;

`;

const StyledBottomContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1em;
`;


const StyledTittle = Styled.h2`
/* Title -> */
width: 137px;
height: 24px;

font-family: 'TT Hoves';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
display: flex;
align-items: center;

color: #252525;
`;
const StyledDuration = Styled.h2`
/* Title -> */
width: 137px;
height: 24px;

font-family: 'TT Hoves';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
display: flex;
align-items: center;

color: #DC582A;
`;
const StyledLikesAmoun = Styled.h3`

font-family: 'TT Hoves';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
display: flex;
align-items: center;

color: #DC582A;
text-align: right;
`;

const LeftDivContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const StyledButton = Styled.button`
    &:focus {
    outline: 2px solid ${(props) => props.focus_color || "#000"}; /* o el color que quieras */
    outline-offset: 2px;
    border-radius: 4px;
    }
`;

const abbreviateNumber = (num) => {
  if (num === null || num === undefined || isNaN(num)) return '-';

  const absNum = Math.abs(num);

  if (absNum < 1_000) return num.toString();
  if (absNum < 1_000_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  if (absNum < 1_000_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (absNum < 1_000_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  return (num / 1_000_000_000_000).toFixed(1).replace(/\.0$/, '') + 'T';
};

const MiniPlate = ({ id, title, likes, duration_minutes, user_like_it, img_path }) => {
    const [isLiked, setisLiked] = useState(user_like_it != null ? user_like_it : false);

    const HandleLike = () => {
        setisLiked(
            (prev) => {
                return !prev
            }
        )
    }

    title = title == null ? "Russian Salad" : title
    duration_minutes = duration_minutes == null ? "40" : duration_minutes;
    likes = likes == null ? 1000 : likes;
    return <>
        <StyledPlateContent>
            <StyledImage src={DefaultPlateImg} />
            <StyledBottomContainer>
                <div>
                    <StyledTittle>{title}</StyledTittle>
                    <StyledDuration>{duration_minutes} min</StyledDuration>

                </div>

                <LeftDivContainer>
                    <StyledButton
                        onClick={HandleLike}>
                        {
                            (isLiked == false ?
                                <FaRegHeart size={22}></FaRegHeart> : <FaHeart color="#ff4848" size={22}></FaHeart>)
                        }
                    </StyledButton>
                    <StyledLikesAmoun>{abbreviateNumber(likes)}</StyledLikesAmoun>
                </LeftDivContainer>

            </StyledBottomContainer>
        </StyledPlateContent>
    </>
}
export default MiniPlate;