import React from "react";
import Button from "../../components/Button";

import * as S from "./styled";

export const MainPage: React.FC = () => {
    return (
        <>
            <S.MainCont>
                <S.SubCont>
                    <S.ItemCont>
                        <S.SchoolNameCont>한세사이버보안고등학교</S.SchoolNameCont>
                        <S.RecruitCont>디지털 포렌식 부원 모집</S.RecruitCont>
                    </S.ItemCont>
                    <S.DdayCont>2025. xx. xx(x) ~ 2025. xx. xx(x)</S.DdayCont>
                    <Button />
                </S.SubCont>
                <S.ArrowCont>↑</S.ArrowCont>
            </S.MainCont>
        </>
    );
};
