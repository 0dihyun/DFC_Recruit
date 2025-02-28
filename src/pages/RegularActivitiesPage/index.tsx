import React from "react";

import Img from "../../assets/img/All.png";

import * as S from "./styled";

export const RegularActivityPage = () => {
    return (
        <S.MainCont>
            <S.SubCont>
                <S.TitleCont>동아리 활동</S.TitleCont>
                <S.CommnetCont>포렌식 툴 사용법, vscode, 등등 이것저것 와이어샤크 이거 뭐시기</S.CommnetCont>
                <S.CommnetCont>포렌식 툴 사용법, vscode 등등 이것저것 와이어샤크 이거 뭐시기</S.CommnetCont>
                <S.CommnetCont>포렌식 툴 사용법, vscode 등등 이것저것 와이어샤크 이거 뭐시기</S.CommnetCont>
            </S.SubCont>
            <S.ImgCont src={Img} width={600} />
        </S.MainCont>
    );
};
