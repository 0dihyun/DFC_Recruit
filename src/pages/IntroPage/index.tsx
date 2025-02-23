import React from "react";
import AllIImg from "../../assets/img/All.png";
import * as S from "./styled";

export const IntroPage = () => {
    return (
        <S.MainCont>
            <S.ImgCont src={AllIImg} width={700} />

            <S.SubCont>
                <S.CommentCont>한세사이버보안고등학교 설립 이래</S.CommentCont>
                <S.CommentCont>역사가 깊은 동아리</S.CommentCont>
                <S.ClubNameCont>디지털 포렌식</S.ClubNameCont>
            </S.SubCont>
        </S.MainCont>
    );
};
