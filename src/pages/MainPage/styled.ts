import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: calc(100vh - 70px);
    padding: 100px;

    @media (max-width: 480px) {
        height: calc(100vh - 50px);
        padding: 20px;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const SubCont = styled.div`
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
