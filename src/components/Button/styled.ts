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
        height: 40px;
    }
`;

export const RecruitCont = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: white;
`;
