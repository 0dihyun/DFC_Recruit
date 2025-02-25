import styled from "styled-components";

export const MainCont = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    background-color: #1c334f;

    /* 반응형 스타일 */
    @media (max-width: 768px) {
        width: 180px; /* 모바일 화면에서 너비 감소 */
        height: 40px; /* 모바일 화면에서 높이 감소 */
    }

    @media (max-width: 480px) {
        width: 150px; /* 작은 모바일 화면에서 너비 감소 */
        height: 35px; /* 작은 모바일 화면에서 높이 감소 */
    }
`;

export const RecruitCont = styled.p`
    font-weight: 600;
    font-size: 15px;
    color: white;

    /* 반응형 스타일 */
    @media (max-width: 768px) {
        font-size: 20px; /* 모바일 화면에서 폰트 크기 감소 */
    }

    @media (max-width: 480px) {
        font-size: 18px; /* 작은 모바일 화면에서 폰트 크기 감소 */
    }
`;
