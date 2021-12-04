/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useEffect} from 'react'
import styled from 'styled-components'
import { BiCodeAlt } from "react-icons/bi";
import { medium,small,large } from '../responsive';
import spaceInvader from "../assets/spaceInvader.png"
import weather from "../assets/weather.png"
import youTube from "../assets/youTube.png"
import Restaurant from "../assets/Restaurant.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 7rem;
margin-bottom: 2rem;
${large({marginTop:"9rem"})}
${medium({marginTop:"12rem"})}
${small({marginTop:"15rem"})}
`
const IconDiv=styled.div`
color: grey;
font-size: 3.5rem;
`
const IconHeader=styled.div`
font-size: 1.3rem;
font-weight: 600;
`
const Container=styled.div`
display: flex;
justify-content: center;

`
const InnerContainer=styled.div`
width: 75%;

padding: 10px;
margin: 1rem;
`

const CardContainer=styled.div`
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`
const OuterCard=styled.div`

`
const InnerCard=styled.div`

`
const CardDetails=styled.div`
position: absolute;
display: none !important;
top: 0;
left: 0;
background-color: rgba(0,0,0, 0.4);
height: 100%;
width: 100%;

color: white;
text-align: center;
padding: 7px;
gap: 1rem;
`
const Card=styled.div`
width: 29rem;
height: 20rem;
position: relative;
${small({width:"20rem",padding:"5px"})}

&:hover ${CardDetails}{
 display: flex !important;
flex-direction: column;
justify-content: center;
align-items: center;

}
`
const CardImg=styled.img`
width:100%;
height: 100%;
object-fit: cover;
border-radius: 5px;
;
`

const DetailHeader =styled.div`
font-size: 1.3rem;
font-weight: 700;
`
const DetailSub =styled.div`
font-weight: 500;
font-size: 0.9rem;
`

const DetailBody =styled.div`
font-weight: 500;
`

const DetailFooter =styled.div`
display: flex;
gap: 0.5rem;
`
export default function Projects() {

    useEffect(() => {
        AOS.init({})
    }, [])


    return (
        <div id="projects">
            <HeaderContainer>
                    <IconDiv><BiCodeAlt/></IconDiv>
                    <IconHeader>Projects</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>
                    <CardContainer>
                        
                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={spaceInvader}/>
                                    <CardDetails>
                                        <DetailHeader>Space Invader </DetailHeader>
                                        <DetailBody>A Game built entirely using pure Javascript and game mechanism where the enemy ships and hero ships are controlled by manipulating DOM</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-info"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://yukeshkumaran-space-invader.netlify.app">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Yukesh31/Space-Invader">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>
                        
                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={weather}/>
                                    <CardDetails>
                                        <DetailHeader>Weather App</DetailHeader>
                                        <DetailBody>A Weather app which reports weather all around the world with customizable search locations</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-info"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://yukeshkumaran-weather-report.netlify.app">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Yukesh31/WeatherReport">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>
                      
                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={youTube}/>
                                    <CardDetails>
                                        <DetailHeader>YouTube Clone </DetailHeader>
                                        <DetailBody>YouTube Clone is an efficacious video-sharing solution that aids you in launching your video streaming software that has the power to rival YouTube itself.</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-info"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://yukeshkumaran-youtubeclone.netlify.app">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Yukesh31/YouTube-Clone">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={Restaurant}/>
                                    <CardDetails>
                                        <DetailHeader>Restaurant App </DetailHeader>
                                        <DetailBody>A Single Page Restaurant Application using React JS.</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-info"><a style={{color:"inherit",textDecoration:"none"}} target="_blank"  href="https://yukeshkumaran-restaurant-app.netlify.app">Live Demo</a></button></div>
                                            <div><button className="btn btn-success"><a  style={{color:"inherit",textDecoration:"none"}} target="_blank" href="https://github.com/Yukesh31/Restaurant-App">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>
                                
                            </InnerCard>
                        </OuterCard>

                    </CardContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}
