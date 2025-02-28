import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 70px);
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
    font-size: 40px;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const ClubNameCont = styled.p`
    font-size: 40px;
    font-weight: 700;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const ImgCont = styled.img`
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;
