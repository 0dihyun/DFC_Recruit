import * as S from "./styled";
import { googleForm } from "../../constants/googleForm";

const Button = () => {
    return (
        <a href={googleForm} target='_blank'>
            <S.MainCont>
                <S.RecruitCont>지원하러 가기</S.RecruitCont>
            </S.MainCont>
        </a>
    );
};

export default Button;
