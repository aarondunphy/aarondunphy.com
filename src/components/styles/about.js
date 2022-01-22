import styled from "styled-components"

const About = styled.section`
    .profileImage {
        max-width: 300px;
        width: 100%;
        margin: 0px auto 40px auto;
    }
    img {
        margin-bottom: 0px;
    }
    .introSection{
        margin-bottom: 60px;
    }
    .techSkillsSection ul{
        columns: 3;
    }
    @media(max-width: 700px) {
        .profileImage {
            float: none;
        }
    }
`

export default About