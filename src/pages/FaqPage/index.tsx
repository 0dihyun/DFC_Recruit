import { useState } from "react";
import FAQItem from "../../components/FAQItem";
import { faqs } from "../../constants/faqs";

import * as S from "./styled";

export const FaqPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // 클릭한 질문이 열려있다면 닫고, 그렇지 않다면 열기
    };

    return (
        <S.MainCont>
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index} // 현재 열려 있는 인덱스와 비교
                    onToggle={() => handleToggle(index)} // 클릭 시 핸들러 호출
                />
            ))}
        </S.MainCont>
    );
};
