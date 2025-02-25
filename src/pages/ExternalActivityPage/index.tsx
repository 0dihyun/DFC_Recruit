import React from "react";

import CGLogo from "../../assets/img/CyberGuardians_LOGO.png";

import * as S from "./styled";

export const ExternalActivityPage = () => {
    return (
        <S.MainCont>
            <S.CGCont>
                <S.SubCont>
                    <S.CyberGuardiansTitleCont>사이버가디언즈</S.CyberGuardiansTitleCont>
                    <S.CGLogo src={CGLogo} width={30} />
                </S.SubCont>
                <S.CyberGuardiansSubTitleCont>CyberGuadians</S.CyberGuardiansSubTitleCont>
                <S.CyberGuardiansCommentCont>
                    사이버가디언즈 프로그램은 외부강사를 초대하여 각 분야에 맞게 수업을 진행하여 어찌고 저찌고 이러고
                    저러고 포렌식 어쩌고 저쩌고
                </S.CyberGuardiansCommentCont>
            </S.CGCont>
            <S.OTOCCont>
                <S.OneTeamOneCompanyTitleCont>1팀 1기업</S.OneTeamOneCompanyTitleCont>
                <S.OneTeamOneCompanyCommentCont>
                    사이버가디언즈 프로그램은 외부강사를 초대하여 각 분야에 맞게 수업을 진행하여 어찌고 저찌고 이러고
                    저러고 포렌식 어쩌고 저쩌고
                </S.OneTeamOneCompanyCommentCont>
            </S.OTOCCont>
        </S.MainCont>
    );
};
