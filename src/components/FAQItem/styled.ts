import styled from "styled-components";

export const FAQContainer = styled.div`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width: 480px) {
        margin-top: 2px;
    }
`;

export const Question = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    font-size: 1.2rem;
    font-weight: 700;

    background-color: #b2bcc8;
    padding: 1rem;
    cursor: pointer;
    &:hover {
        color: #e1eaf4;
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
