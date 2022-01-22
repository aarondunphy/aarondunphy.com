import styled from "styled-components"

const NavHeader = styled.header`
    margin: 0px 0px 10% 0px;
    display: flex;
    justify-content: space-between;
    .logo {
        text-decoration: none;
        font-size: 28px;
        font-weight: 700;
    }
    nav ul {
        list-style: none;
        margin: 0px;
    }
    nav ul li {
        display: inline-block;
        margin-right: 20px
    }
    nav ul li:last-child {
        margin-right: 0px
    }
    nav ul li a {
        text-decoration: none;
        font-size: 18px;
    }
    @media (max-width: 600px) {
        .logo {
            font-size: 18px;
        }
        nav ul li a {
            font-size: 14px;
        }
        nav ul li {
            margin-right: 10px;
        }
    }
    @media (max-width: 375px) {
        .logo {
            font-size: 16px;
        }
        nav ul li a {
            font-size: 12px;
        }
    }
`

export default NavHeader