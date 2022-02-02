import React from 'react';
import styled from 'styled-components';

import { Icon } from '@iconify/react';


function Header() {
 
    return (
        <Container>
            <RightMenu>
            <a href="https://github.com/Carlosescobar2"><Icon icon="akar-icons:github-fill" /></a>
            <a href='https://www.linkedin.com/in/carlos-escobar11/'><Icon icon="akar-icons:linkedin-fill" /></a>
            </RightMenu>
        <LogoCon />
            
        
            <Leftmenu>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>


            </Leftmenu>
        </Container>
    )
}



const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between; 
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;

    /* body{ 
        overflow-x:hidden ;
    } */

`
const RightMenu = styled.div`
    display: flex;
     position: absolute;
    right: 0px;
    a{  
        padding:0 30px 0px 5px;
        font-size: 30px;
        text-decoration: none;
        color: white;
    }
`

const Leftmenu = styled.div`

        a{ 
            text-decoration: none;
            padding: 0 20px;
            color:white;
            font-size: 20px;

        }

        a:hover { 
            text-decoration: underline;
        }

`

const LogoCon = styled.div`
    position: absolute;
     top: 80%;
     left: 50%;
     transform: translate(-50%, -50%);
     height: 60px;
     width: 60px;
     box-shadow: -15px 15px 0 5px white  ;
     border-radius: 50%;

`
export default Header;

