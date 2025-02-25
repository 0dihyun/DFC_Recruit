import React, { useEffect } from "react";

const SectionObserver = ({ setCurrentSectionId }: any) => {
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null, // viewport
            rootMargin: "0px",
            threshold: 0.5, // 50% 가시성이 되었을 때
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSectionId(entry.target.id);
                    // console.log("현재 섹션:", entry.target.id); // 콘솔 출력 제거
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [setCurrentSectionId]);

    return null;
};

export default SectionObserver;
