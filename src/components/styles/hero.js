import styled from "styled-components"

const Hero = styled.section`
    .hero{
        display: flex;
        align-items: center;
        min-height: 40vh;   
    }
    p:first-of-type{
        font-size: 60px;
        font-weight: 700;
        margin-bottom: 15px;
        line-height: 1;
    }
    h1{
        margin: 0px 0px 10px 0px;
        font-size: 34px
    }
    @media (max-width: 560px) {
        p:first-of-type{
            font-size: 30px;
        }
        h1{
            font-size: 20px;
        }
    }
`

export default Hero