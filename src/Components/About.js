import React from 'react';
import styled from 'styled-components';

import { Icon } from '@iconify/react';

function About() {
  return (
    <Container id="aboutSection">
        
            <p>I am a 19-year-old Web Developer from Modesto, California. My journey began in the middle of 2021 when I attended DevMountain for a rigorous 4-month coding Bootcamp. During my time coding, I specialized in React, JavaScript, CSS and HTML. 
            </p>
            <SkillBox>
              
              <h2 >Skills</h2>
              <SkillSection>
                   <span><Icon icon="vscode-icons:file-type-html" /></span>
                   <span><Icon icon="logos:javascript" /></span>
                   <span><Icon icon="vscode-icons:file-type-node" /></span>
                   <span><Icon icon="logos:react" /></span>

                   <span><Icon icon="logos:redux" /></span>
                   <span><Icon icon="vscode-icons:file-type-css" /></span>
                   <span><Icon icon="logos:git-icon" /></span>
                   <span><Icon icon="vscode-icons:file-type-pgsql" /></span>

                </SkillSection>
                </SkillBox>

                {/* <TraingleShape1>

                </TraingleShape1>

                    <TraingleShape2>

                    </TraingleShape2>
                <TraingleShape3>

                </TraingleShape3>
                <TraingleShape4>

                    </TraingleShape4>
                
                    <TraingleShape5>

                </TraingleShape5>


                <TraingleShape6>

                </TraingleShape6>


                <TraingleShape7>

                </TraingleShape7> */}
           
    </Container>

  )
}
const Container = styled.div`
    display: flex;
    height: 100vh;
    width:100vw;
    margin-top: -25px;
 
    background: rgb(117,73,73);
    background: linear-gradient(103deg, rgba(117,73,73,1) 5%, rgba(150,109,109,1) 15%, rgba(171,139,142,1) 74%, rgba(133,110,114,1) 96%, rgba(150,111,118,1) 100%); 
    
p{
    margin-top: 200px;
    flex-direction: column;
    height:50vh;
    width:50vw;
    font-size: 1.5rem;
}



@media (max-width: 767px) {
    h2{
        font-size: 4vw;
    }
}

`
const SkillBox = styled.div`
    margin-top: 10vh;
    height: 50vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
    font-size: 2vw;
    margin-top: 5vh;
    color: black;

    }

    @media (max-width: 767px) {
    h2{
        font-size: 4vw;
    }

    }
`



const SkillSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    place-items: center;
    font-size:55px;
    height: 60%;
    width: 80%;
    margin-top: 3vh;

`

// const TraingleShape1 = styled.div`
//     height: 0;
//     width: 0;
//     position: absolute;
//     top:163%;
//     bottom: 0;
//     right: 300px;
//     transform: rotate(270deg);

    
//     border-left: 100px solid #796342;
//     border-right: 150px solid transparent;
//     border-bottom: 200px solid transparent;
//     border-top: 100px solid transparent;
    
//     @media (max-width: 767px) {
//     top:159%
// }
// `

// const TraingleShape2 =styled.div`
//     height: 0;
//     width: 0;
//     position: absolute;
//     top:163%;
//     bottom: 0;
//     right: 400px;
//     transform: rotate(270deg);
    
//     border-left: 100px solid #796342;
//     border-right: 150px solid transparent;
//     border-bottom: 200px solid transparent;
//     border-top: 100px solid transparent;
    
//     @media (max-width: 767px) {
//     top:159%
// }
// `

// const TraingleShape3 =styled.div`
//     height: 0;
//     width: 0;
//     position: absolute;
//     top:163%;
//     bottom: 0;
//     right: 500px;
//     transform: rotate(270deg);
    
//     border-left: 100px solid #796342;
//     border-right: 150px solid transparent;
//     border-bottom: 200px solid transparent;
//     border-top: 100px solid transparent;
    
//     @media (max-width: 767px) {
//     top:159%
// }
// `
// const TraingleShape4 =styled.div`
//     height: 0;
//     width: 0;
//     position: absolute;
//     top:163%;
//     bottom: 0;
//     right: 600px;
//     transform: rotate(270deg);
    
//     border-left: 100px solid #796342;
//     border-right: 150px solid transparent;
//     border-bottom: 200px solid transparent;
//     border-top: 100px solid transparent;
    
//     @media (max-width: 767px) {
//     top:159%
// }
// `

// const TraingleShape5 =styled.div`
//     height: 0;
//     width: 0;
//     position: absolute;
//     top:163%;
//     bottom: 0;
//     right: 700px;
//     transform: rotate(270deg);
    
//     border-left: 100px solid #796342;
//     border-right: 150px solid transparent;
//     border-bottom: 150px solid transparent;
//     border-top: 100px solid transparent;
    
//     @media (max-width: 767px) {
//     top:159%
// }
// `

// const TraingleShape6 =styled.div`
//     height: 0;
//     width: 0;
//     position: absolute;
//     top:163%;
//     bottom: 0;
//     right: 800px;
//     transform: rotate(270deg);
    
//     border-left: 100px solid #796342;
//     border-right: 150px solid transparent;
//     border-bottom: 200px solid transparent;
//     border-top: 100px solid transparent;
    
//     @media (max-width: 767px) {
//     top:159%
// }
// `

// const TraingleShape7 =styled.div`
//     height: 0;
//     width:0;
//     position: absolute;
//     top:163%;
//     bottom: 0;
//     right: 900px;
//     transform: rotate(270deg);
    
//     border-left: 100px solid #796342;
//     border-right: 150px solid transparent;
//     border-bottom: 200px solid transparent;
//     border-top: 100px solid transparent;
    
//     @media (max-width: 767px) {
//     top:159%
// }
// `
export default About;
