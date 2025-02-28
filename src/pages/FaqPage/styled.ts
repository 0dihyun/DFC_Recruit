import styled from "styled-components";

export const MainCont = styled.div`
    display: flex;
    height: 100vh;
    padding: 100px;
    gap: 25px;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480px) {
        height: calc(100vh - 50px);
        flex-direction: column;
        padding: 20px;
    }
`;
