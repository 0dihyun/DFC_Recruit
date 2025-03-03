import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: calc(100vh - 70px);
    padding: 100px;

    @media (max-width: 480px) {
        height: calc(100vh - 50px);
        padding: 20px;
    }
`;

export const SubCont = styled.div`
    padding-bottom: 100px;
    @media (max-width: 480px) {
        padding-bottom: 60%;
    }
`;

export const ItemCont = styled.div`
    padding-bottom: 20px;
    align-self: flex-start;

    @media (max-width: 480px) {
        padding-bottom: 18px;
        align-self: flex-start;
    }
`;

export const SchoolNameCont = styled.p`
    font-size: 50px;
    font-weight: 500;
    align-self: flex-start;

    @media (max-width: 480px) {
        font-size: 30px;
        font-weight: 600;
        align-self: flex-start;
    }
`;

export const RecruitCont = styled.p`
    font-weight: 700;
    font-size: 60px;
    align-self: flex-start;

    @media (max-width: 480px) {
        font-size: 35px;
        align-self: flex-start;
    }
`;

export const DdayCont = styled.p`
    padding-bottom: 20px;
    align-self: flex-start;

    @media (max-width: 480px) {
        padding-bottom: 18px;
        align-self: flex-start;
    }
`;

export const ArrowCont = styled.p`
    display: none;

    @media (max-width: 480px) {
        font-size: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-bottom: 10%;
        animation: fadeInOut 1.5s infinite alternate;
    }

    @keyframes fadeInOut {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
