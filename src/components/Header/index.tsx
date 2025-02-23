import React, { useState } from "react";
import * as S from "./styled";
import DFC_LOGO from "../../assets/img/DFC_LOGO.png";

const Header = () => {
    const [activeLink, setActiveLink] = useState<string>(""); // 활성화된 링크 상태

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" }); // block: "start" 추가
            setActiveLink(id);
        }
    };

    const handleLogoClick = () => {
        scrollToSection("main");
        setActiveLink(""); // 로고 클릭 시 모든 링크 초기화
    };

    return (
        <S.Header>
            <S.LogoCont>
                <a href='/#' onClick={handleLogoClick}>
                    <img src={DFC_LOGO} width={50} alt='DFC Logo' />
                </a>
            </S.LogoCont>
            <S.NavCont>
                <S.Ul>
                    <S.NavLink active={activeLink === "intro"}>
                        <a href='#' onClick={() => scrollToSection("intro")}>
                            동아리 소개
                        </a>
                    </S.NavLink>
                    <S.Separator>|</S.Separator>
                    <S.NavLink active={activeLink === "external"}>
                        <a href='#' onClick={() => scrollToSection("external")}>
                            포렌식 일지
                        </a>
                    </S.NavLink>
                    <S.Separator>|</S.Separator>
                    <S.NavLink active={activeLink === "qna"}>
                        <a href='#' onClick={() => scrollToSection("qna")}>
                            QnA
                        </a>
                    </S.NavLink>
                    <S.Separator>|</S.Separator>
                    <S.NavLink active={activeLink === "recruit"}>
                        <a href='#' onClick={() => scrollToSection("recruit")}>
                            지원하기
                        </a>
                    </S.NavLink>
                </S.Ul>
            </S.NavCont>
            <S.LogoCont />
        </S.Header>
    );
};

export default Header;
