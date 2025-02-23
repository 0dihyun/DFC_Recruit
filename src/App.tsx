import React from "react";
import Header from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { IntroPage } from "./pages/IntroPage";
import { ExternalActivityPage } from "./pages/ExternalActivityPage";
import { RegularActivityPage } from "./pages/RegularActivitiesPage"; // RegularActivityPage import
import { QnaPage } from "./pages/QnaPage";
import { RecruitPage } from "./pages/RecruitPage";
import "./App.css"; // CSS 파일 import

function App() {
    return (
        <div className='App'>
            <Header />
            <div id='main' className='container'>
                <MainPage />
            </div>
            <div id='intro' className='container'>
                <IntroPage />
            </div>
            <div id='external' className='container'>
                <ExternalActivityPage />
            </div>
            <div id='regular' className='container'>
                <RegularActivityPage />
            </div>
            <div id='qna' className='container'>
                <QnaPage />
            </div>
            <div id='recruit' className='container'>
                <RecruitPage />
            </div>
        </div>
    );
}

export default App;
