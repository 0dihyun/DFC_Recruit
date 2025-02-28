import React, { useState } from "react";
import Header from "./components/Header";
import SectionObserver from "./components/SectionObserver";
import { MainPage } from "./pages/MainPage";
import { IntroPage } from "./pages/IntroPage";
// import { ExternalActivityPage } from "./pages/ExternalActivityPage";
import { RegularActivityPage } from "./pages/RegularActivitiesPage";
import { FaqPage } from "./pages/FaqPage";
import { RecruitPage } from "./pages/RecruitPage";
import "./App.css";

function App() {
    const [currentSectionId, setCurrentSectionId] = useState("");

    return (
        <div className='App'>
            <Header currentSectionId={currentSectionId} />
            <SectionObserver setCurrentSectionId={setCurrentSectionId} />
            <section id='main' className='container'>
                <MainPage />
            </section>
            <section id='intro' className='container'>
                <IntroPage />
            </section>
            {/* <section id='external' className='container'>
                <ExternalActivityPage />
            </section> */}
            <section id='regular' className='container'>
                <RegularActivityPage />
            </section>
            <section id='faq' className='container'>
                <FaqPage />
            </section>
            <section id='recruit' className='container'>
                <RecruitPage />
            </section>
        </div>
    );
}

export default App;
