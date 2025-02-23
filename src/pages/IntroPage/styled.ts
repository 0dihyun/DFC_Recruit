import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);
    padding-right: 100px;
    gap: 80px;

    /* 반응형 스타일 */
    @media (max-width: 768px) {
        height: calc(80vh - 60px); /* 모바일 화면에서 헤더 높이 60px 고려 */
        padding-right: 50px; /* 모바일 화면에서 우측 패딩 감소 */
        gap: 40px; /* 간격 감소 */
    }

    @media (max-width: 480px) {
        height: calc(80vh - 50px); /* 작은 모바일 화면에서 헤더 높이 50px 고려 */
        flex-direction: column; /* 작은 모바일 화면에서 세로 방향으로 변경 */
        height: auto; /* 높이 자동 조정 */
        padding-right: 20px; /* 더 작은 모바일 화면에서 패딩 감소 */
        gap: 20px; /* 간격 감소 */
    }
`;

export const SubCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    /* 반응형 스타일 */
    @media (max-width: 768px) {
        align-items: center; /* 모바일 화면에서 중앙 정렬 */
    }

    @media (max-width: 480px) {
        align-items: center; /* 더 작은 모바일 화면에서 중앙 정렬 */
    }
`;

export const CommentCont = styled.p`
    font-size: 40px;

    /* 반응형 스타일 */
    @media (max-width: 768px) {
        font-size: 30px; /* 모바일 화면에서 폰트 크기 감소 */
    }

    @media (max-width: 480px) {
        font-size: 24px; /* 더 작은 모바일 화면에서 폰트 크기 감소 */
    }
`;

export const ClubNameCont = styled.p`
    font-size: 40px;
    font-weight: 700;

    /* 반응형 스타일 */
    @media (max-width: 768px) {
        font-size: 30px; /* 모바일 화면에서 폰트 크기 감소 */
    }

    @media (max-width: 480px) {
        font-size: 24px; /* 더 작은 모바일 화면에서 폰트 크기 감소 */
    }
`;

export const ImgCont = styled.img`
    padding-left: 100px;

    /* 반응형 스타일 */
    @media (max-width: 768px) {
        padding-left: 50px; /* 모바일 화면에서 좌측 패딩 감소 */
    }

    @media (max-width: 480px) {
        padding-left: 20px; /* 더 작은 모바일 화면에서 좌측 패딩 감소 */
        width: 100%; /* 이미지 너비를 100%로 설정하여 화면에 맞추기 */
        height: auto; /* 비율 유지 */
    }
`;
