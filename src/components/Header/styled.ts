import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    z-index: 1000;

    @media (max-width: 480px) {
        padding: 20px;
    }
`;

export const NavCont = styled.nav`
    @media (max-width: 480px) {
        display: none;
    }
`;

export const LogoCont = styled.div``;

export const Ul = styled.ul`
    padding: 0px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 480px) {
        gap: 10px;
    }
`;

export const NavLink = styled.li<{ active?: boolean }>`
    font-size: ${({ active }) => (active ? "24px" : "14px")};
    font-weight: ${({ active }) => (active ? "700" : "500")};
    transition: font-size 0.3s ease, font-weight 0.3s ease;

    a {
        text-decoration: none;

        &:hover {
            font-weight: 700;
        }
    }
`;

export const Separator = styled.p`
    margin: 0 10px;
    color: #ccc;
    font-size: 15px;
`;
