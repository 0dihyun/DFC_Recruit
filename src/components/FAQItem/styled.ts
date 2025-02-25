import styled from "styled-components";

export const FAQContainer = styled.div`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden; // 내용이 넘어가면 잘리도록 설정
`;

export const Question = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    font-size: 20px;
    font-weight: 600;

    background-color: #b2bcc8;
    padding: 1rem;
    cursor: pointer; // 커서가 포인터로 변경
    &:hover {
        background-color: #4b6179; // 마우스 오버 시 배경 색상 변경
    }
`;

export const Answer = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    font-weight: 600;
    background-color: #b2bcc8;
    transition: max-height 0.3s ease, padding 0.3s ease; // 애니메이션 효과 추가
    padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")}; // 열릴 때 패딩 추가
    max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")}; // 상태에 따라 최대 높이 변경
    overflow: hidden; // 내용이 넘어가면 잘리도록 설정
`;
