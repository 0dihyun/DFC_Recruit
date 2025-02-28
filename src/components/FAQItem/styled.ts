import styled from "styled-components";

export const FAQContainer = styled.div`
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    @media (max-width: 480px) {
        margin-top: 30px;
    }
`;

export const Question = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    font-size: 18px;
    font-weight: 700;

    background-color: #b2bcc8;
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #4b6179;
    }
`;

export const Answer = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    font-weight: 600;
    background-color: #b2bcc8;
    transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s;
    opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
    padding: ${({ isOpen }) => (isOpen ? "1rem" : "0rem")};
    max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
    overflow: hidden;
`;
