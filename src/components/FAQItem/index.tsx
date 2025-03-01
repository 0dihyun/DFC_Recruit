import * as S from "./styled";

const FAQItem = ({ question, answer, isOpen, onToggle }: any) => {
    return (
        <S.FAQContainer>
            <S.Question onClick={onToggle}>{question}</S.Question>
            <S.Answer isOpen={isOpen}>{answer}</S.Answer>
        </S.FAQContainer>
    );
};

export default FAQItem;
