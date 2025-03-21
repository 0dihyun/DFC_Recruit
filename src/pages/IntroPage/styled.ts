import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    padding: 100px;

    @media (max-width: 480px) {
        align-items: flex-end;
        justify-content: center;
        flex-direction: column-reverse;
        height: calc(100vh - 50px);
        padding: 20px;
    }
`;

export const SubCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 480px) {
        padding-bottom: 20px;
    }
`;

export const CommentCont = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    @media (max-width: 480px) {
        font-weight: 600;
        font-size: 1.5rem;
    }
`;

export const ClubNameCont = styled.p`
    background-color: #1c334f;
    color: #e1eaf4;
    font-size: 2.5rem;
    font-weight: 900;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const ImgCont = styled.img`
    width: 50%;
    height: auto;
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;
