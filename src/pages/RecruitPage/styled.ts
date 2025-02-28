import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: calc(100vh - 70px);
    padding: 100px;
    gap: 20px;

    @media (max-width: 480px) {
        height: calc(100vh - 50px);
        padding: 20px;
    }
`;

export const Title = styled.p`
    font-weight: 700;
    font-size: 80px;

    @media (max-width: 480px) {
        font-weight: 700;
        font-size: 40px;
    }
`;

export const SubCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 480px) {
        padding-bottom: 15px;
    }
`;

export const ImgCont = styled.img``;

export const Highlight = styled.a`
    font-weight: 700;
    font-size: 80px;
    color: #e1eaf4;
    background-color: black;

    @media (max-width: 480px) {
        font-weight: 700;
        font-size: 40px;
    }
`;
