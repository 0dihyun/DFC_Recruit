import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 70px);
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
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;

export const CommnetCont = styled.p`
    font-size: 20px;
    @media (max-width: 480px) {
        font-size: 15px;
    }
`;

export const TitleCont = styled.p`
    font-weight: 700;
    font-size: 40px;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const SliderCont = styled.div`
    width: 600px;
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
    transition: transform 0.5s ease-in-out; /* 부드러운 이동 효과 */
    @media (max-width: 480px) {
        width: 100%;
        height: auto;
    }
`;
