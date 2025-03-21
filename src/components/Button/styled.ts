import styled from "styled-components";

export const MainCont = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9rem;
    height: 2.5rem;
    border-radius: 10px;
    background-color: #1c334f;

    @media (max-width: 480px) {
        width: 8rem;
        height: 2.5rem;
    }
`;

export const RecruitCont = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: #e1eaf4;
`;
