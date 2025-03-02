import { useState, useEffect } from "react";
import { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9 } from "../../assets/img"; // 여러 이미지들 추가
import * as S from "./styled";

export const RegularActivityPage = () => {
    const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // 슬라이드 변경 함수 (다음 이미지)
    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentImageIndex((prevIndex) => {
            // 마지막 이미지에서 바로 이전 이미지로 슬라이드
            if (prevIndex === images.length - 1) {
                return prevIndex - 1; // 마지막에서 1장 뒤로
            }
            return prevIndex + 1; // 그 외의 경우에는 다음 이미지로
        });
    };

    // 3초마다 자동 슬라이드 변경
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <S.MainCont>
            <S.SubCont>
                <S.ExplainCont>
                    <S.TitleCont>DFC?</S.TitleCont>
                    <S.CommnetCont>DFC(디지털 포렌식 동아리)는 뭐시기 저시기</S.CommnetCont>
                    <S.CommnetCont>이거저거 야매로다가 배우는 동아리 입니다.</S.CommnetCont>
                </S.ExplainCont>
                <S.TitleCont>동아리 활동</S.TitleCont>
                <S.CommnetCont>포렌식 툴 사용법, vscode 등등 이것저것 와이어샤크 뭐시기</S.CommnetCont>
                <S.CommnetCont>포렌식 툴 사용법, vscode 등등 이것저것 와이어샤크 뭐시기</S.CommnetCont>
                <S.CommnetCont>포렌식 툴 사용법, vscode 등등 이것저것 와이어샤크 뭐시기</S.CommnetCont>
            </S.SubCont>

            {/* 슬라이드 컨테이너 */}
            <S.SliderCont>
                <S.Slides
                    style={{
                        display: "flex",
                        transition: isTransitioning ? "transform 1s ease-in-out" : "none",
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                >
                    {/* 이미지 슬라이드 */}
                    {images.map((img, index) => (
                        <S.ImgCont key={index} src={img} width={600} />
                    ))}
                </S.Slides>
            </S.SliderCont>
        </S.MainCont>
    );
};
