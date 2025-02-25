import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    height: 100vh;
    padding-left: 100px;
    padding-right: 100px;
    gap: 20px;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480px) {
        height: calc(100vh - 50px); /* 작은 모바일 화면에서 헤더 높이 50px 고려 */
        flex-direction: column; /* 작은 모바일 화면에서 세로 방향으로 변경 */
        height: auto; /* 높이 자동 조정 */
        padding-left: 20px; /* 더 작은 모바일 화면에서 패딩 감소 */
        padding-right: 20px;
        gap: 20px; /* 간격 감소 */
    }
`;
