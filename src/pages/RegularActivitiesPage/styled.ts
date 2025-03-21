import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    padding: 100px;

    @media (max-width: 480px) {
        height: calc(100vh - 50px);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
    }
`;

export const SubCont = styled.div`
    @media (max-width: 480px) {
        padding-bottom: 20px;
    }
`;

export const ExplainCont = styled.div`
    padding-bottom: 30px;
    @media (max-width: 480px) {
        padding-bottom: 20px;
    }
`;

export const ImgCont = styled.img`
    width: 100%;
    height: auto;
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;

export const CommnetCont = styled.p`
    font-size: 1.5rem;
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const TitleCont = styled.p`
    width: 12rem;
    background-color: #1c334f;
    color: #e1eaf4;
    font-weight: 700;
    font-size: 2.5rem;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const WhatIsDFCTitle = styled.p`
    width: 4rem;
    background-color: #1c334f;
    color: #e1eaf4;
    font-weight: 700;
    font-size: 1.5rem;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;
export const WhatIsDFCContents = styled.p`
    font-size: 1rem;
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const SliderCont = styled.div`
    width: 50%;
    height: auto;
    overflow: hidden;
    position: relative;
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;

export const Slides = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;
