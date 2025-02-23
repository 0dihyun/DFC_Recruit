import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: calc(100vh - 70px);
    padding-left: 100px;
    padding-top: 70px;

    @media (max-width: 768px) {
        height: calc(80vh - 60px);
        padding-left: 50px;
        padding-top: 60px;
        align-items: flex-start;
        justify-content: center;
    }

    @media (max-width: 480px) {
        height: calc(80vh - 50px);
        padding-left: 20px;
        padding-top: 50px;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const SubCont = styled.div`
    padding-bottom: 20px;
    align-self: flex-start;

    @media (max-width: 768px) {
        padding-bottom: 10px;
        align-self: flex-start;
    }

    @media (max-width: 480px) {
        padding-bottom: 5px;
        align-self: flex-start;
    }
`;

export const SchoolNameCont = styled.p`
    font-size: 25px;
    font-weight: 500;
    align-self: flex-start;

    @media (max-width: 768px) {
        font-size: 20px;
        align-self: flex-start;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        align-self: flex-start;
    }
`;

export const RecruitCont = styled.p`
    font-weight: 700;
    font-size: 50px;
    align-self: flex-start;

    @media (max-width: 768px) {
        font-size: 35px;
        align-self: flex-start;
    }

    @media (max-width: 480px) {
        font-size: 30px;
        align-self: flex-start;
    }
`;

export const DdayCont = styled.p`
    padding-bottom: 20px;
    align-self: flex-start;

    @media (max-width: 768px) {
        padding-bottom: 10px;
        align-self: flex-start;
    }

    @media (max-width: 480px) {
        padding-bottom: 5px;
        align-self: flex-start;
    }
`;
