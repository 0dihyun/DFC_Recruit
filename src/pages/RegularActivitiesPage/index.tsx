import { useState, useEffect } from "react";
import { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9 } from "../../assets";
import * as S from "./styled";

export const RegularActivityPage = () => {
    const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const nextSlide = () => {
            setIsTransitioning(true);
            setCurrentImageIndex((prevIndex) => {
                let newDirection = direction;
                if (prevIndex === images.length - 1) newDirection = -1;
                if (prevIndex === 0) newDirection = 1;
                setDirection(newDirection);
                return prevIndex + newDirection;
            });
        };

        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [direction, images.length]);

    return (
        <S.MainCont>
            <S.SubCont>
                <S.ExplainCont>
                    <S.WhatIsDFCTitle>DFC?</S.WhatIsDFCTitle>
                    <S.WhatIsDFCContents>DFC(디지털 포렌식 동아리)는</S.WhatIsDFCContents>
                    <S.WhatIsDFCContents>부원 여러분들이 관심있어 하는 분야를</S.WhatIsDFCContents>
                    <S.WhatIsDFCContents>다같이 공부하고 실전에 적용시켜보는 동아리 입니다.</S.WhatIsDFCContents>
                </S.ExplainCont>
                <S.TitleCont>동아리 활동</S.TitleCont>
                <S.CommnetCont>포렌식을 하기 위한 프로그래밍 언어 공부하고</S.CommnetCont>
                <S.CommnetCont>웹 사이트를 개발해보거나 CTF 문제도 풀어보고</S.CommnetCont>
                <S.CommnetCont>배운 것을 토대로 다 같이 프로젝트도 진행하고</S.CommnetCont>
            </S.SubCont>
            <S.SliderCont>
                <S.Slides
                    style={{
                        display: "flex",
                        transition: isTransitioning ? "transform 1s ease-in-out" : "none",
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                >
                    {images.map((img, index) => (
                        <S.ImgCont key={index} src={img} width={600} />
                    ))}
                </S.Slides>
            </S.SliderCont>
        </S.MainCont>
    );
};
