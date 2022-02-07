import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function Projects1() {
    let settings = {
        dots: false,
        infinite: true, 
        speed: 900, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true,
        variableWidth: false
        }
  return (
      <Container id="projectSection">

            <WrapText>
                <h2>Projects</h2>
            </WrapText>
        <Carousel {...settings}>
    
            <Wrap>
                <img src="/images/frontPage.png" />
            </Wrap>
            <Wrap>
                <img src="/images/loggedInPage.png" />
            </Wrap>
            <Wrap>
                <img src="/images/previewHouse.png" />
            </Wrap>
            <Wrap>
                <img src="/images/previewWand.png" />
            </Wrap>
        
</Carousel>
        <SingleImg>
        <img src="/images/groceryList.png"></img>
        </SingleImg>
</Container>
  )
}

const Container = styled.div`
    height:100vh;
    width: 100vw;
    margin-top: -40px;
    /* background: linear-gradient(
    0deg
    , rgba(255,255,255,1) 0%, rgba(121,9,77,1) 100%); */
    background: rgb(117,73,73);
background: linear-gradient(103deg, rgba(117,73,73,1) 6%, rgba(122,79,79,1) 15%, rgba(133,110,114,1) 60%, rgba(162,105,110,1) 100%, rgba(150,111,118,1) 100%);

    h2{
        padding-top: 20px;
        margin-left: 10px;
        font-size: 2vw;
    }


@media (max-width: 767px) {
    h2{
        font-size: 4vw;
    }

}
`

const Carousel = styled(Slider)`
        margin-top: 30px;
        
        ul li button { 
            &:before{
                font-size: 10px;
                color: black; 

            }
        }

        li.slick-active button::before { 
            color: white; 

        }

        .slick-list{ 
            overflow:visible; 

            width: 100;
        }

        .slick-dots{
            width: 30%;
        }
        button { 
            z-index:1;
        }

`

const Wrap = styled.div`

        img{ 
            margin: auto;
            border: 4px solid transparent;
            border-radius: 4px ;
            width: 30%;
            height:30%;
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
            
            &:hover { 
                border: 4px solid rgba(249, 249,249, 0.8); 

            }
        }

`

const WrapText = styled.div`


`

const SingleImg = styled.div`
    img{
        height: 30%;
        width: 30%;
        margin-top: 50px;
        margin-left: 30px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
`

export default Projects1;
