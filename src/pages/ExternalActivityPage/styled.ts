import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);
    padding-right: 100px;
    gap: 80px;
    flex-direction: column;

    @media (max-width: 768px) {
        height: calc(100vh - 60px);
        padding-right: 50px;
        gap: 40px;
    }

    @media (max-width: 480px) {
        height: calc(100vh - 50px);
        flex-direction: column;
        height: auto;
        padding-right: 20px;
        gap: 20px;
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
