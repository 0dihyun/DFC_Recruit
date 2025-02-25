import React from "react";
import * as S from "./styled"; // styled.ts에서 스타일 가져오기

const FAQItem = ({ question, answer, isOpen, onToggle }: any) => {
    return (
        <S.FAQContainer>
            <S.Question onClick={onToggle}>{question}</S.Question>
            <S.Answer isOpen={isOpen}>{answer}</S.Answer>
        </S.FAQContainer>
    );
};

export default FAQItem;
