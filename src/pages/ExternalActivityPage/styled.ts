import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);
    padding-right: 100px;
    gap: 80px;
    flex-direction: column;

    /* 반응형 스타일 */
    @media (max-width: 768px) {
        height: calc(100vh - 60px); /* 모바일 화면에서 헤더 높이 60px 고려 */
        padding-right: 50px; /* 모바일 화면에서 우측 패딩 감소 */
        gap: 40px; /* 간격 감소 */
    }

    @media (max-width: 480px) {
        height: calc(100vh - 50px); /* 작은 모바일 화면에서 헤더 높이 50px 고려 */
        flex-direction: column; /* 작은 모바일 화면에서 세로 방향으로 변경 */
        height: auto; /* 높이 자동 조정 */
        padding-right: 20px; /* 더 작은 모바일 화면에서 패딩 감소 */
        gap: 20px; /* 간격 감소 */
    }
`;

export const SubCont = styled.div`
    display: flex;
`;

export const CGCont = styled.div``;
export const CyberGuardiansTitleCont = styled.p`
    font-size: 50px;
    font-weight: 700;
`;
export const CyberGuardiansSubTitleCont = styled.p``;
export const CyberGuardiansCommentCont = styled.p``;
export const CGLogo = styled.img``;

export const OTOCCont = styled.div``;
export const OneTeamOneCompanyTitleCont = styled.p``;
export const OneTeamOneCompanySubTitleCont = styled.p``;
export const OneTeamOneCompanyCommentCont = styled.p``;
