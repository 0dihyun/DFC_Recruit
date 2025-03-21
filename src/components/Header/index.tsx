import * as S from "./styled";
import { DFC_LOGO_C } from "../../assets";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ currentSectionId }: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scrollToSection = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleLogoClick = () => {
        scrollToSection("main");
    };

    return (
        <S.Header>
            <S.LogoCont>
                <a href='#' onClick={handleLogoClick}>
                    <img src={DFC_LOGO_C} width={50} alt='DFC Logo' />
                </a>
            </S.LogoCont>
            <S.NavCont>
                <S.Ul>
                    <S.NavLink active={currentSectionId === "intro"}>
                        <a
                            href='#'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("intro");
                            }}
                        >
                            동아리 소개
                        </a>
                    </S.NavLink>
                    <S.Separator>|</S.Separator>
                    <S.NavLink active={currentSectionId === "external" || currentSectionId === "regular"}>
                        <a
                            href='#'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("regular");
                            }}
                        >
                            동아리 활동
                        </a>
                    </S.NavLink>
                    <S.Separator>|</S.Separator>
                    <S.NavLink active={currentSectionId === "faq"}>
                        <a
                            href='#'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("faq");
                            }}
                        >
                            FAQ
                        </a>
                    </S.NavLink>
                    <S.Separator>|</S.Separator>
                    <S.NavLink active={currentSectionId === "recruit"}>
                        <a
                            href='#'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("recruit");
                            }}
                        >
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
