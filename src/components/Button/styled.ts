import styled from "styled-components";

export const MainCont = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 45px;
    border-radius: 15px;
    background-color: #1c334f;

    @media (max-width: 480px) {
        width: 150px;
        height: 40px;
    }
`;

export const RecruitCont = styled.p`
    font-weight: 500;
    font-size: 17px;
    color: white;

    @media (max-width: 480px) {
        font-weight: 500;
        font-size: 18px;
    }
`;
