import React from 'react'
import styled from 'styled-components'
import { medium } from '../responsive';
import { small } from '../responsive';
import yukeshPic from "../assets/yukesh_pic.jpeg"
import { FiUserCheck } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2rem;
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
margin-top: 2rem;

`
const InnerContainer=styled.div`
width: 75%;
padding: 10px;
margin: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
${medium({display:"block"})}
`

const QuestionHeader=styled.div`
display:flex;
justify-content: center;
width: 100%;
font-size: 2rem;
font-weight:600;
`
const ImgHeader=styled.div`
display:flex;
justify-content: center;
`

const Discuss=styled.div`
display: flex;
justify-content: center;
`
const ContactContainer=styled.div`
margin-top: 4rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 1rem;
`
const CardImg=styled.img`
width:300px;
height: 450px;
object-fit:cover;
border-radius: 5px;
justify-content: center;
;
`
const Card=styled.div`
width: 300px;
height: 400px;
position: relative;
`

export default function About() {
    return (
        <div id="about">
            <HeaderContainer>
                    <IconDiv><FiUserCheck/></IconDiv>
                    <IconHeader>About Me</IconHeader>
            </HeaderContainer>
            <Container>
               <InnerContainer>
                   <ImgHeader>
                   <Card data-aos="flip-down" data-aos-offset="100">
                        <CardImg src={yukeshPic}/>
                    </Card>
                   </ImgHeader>
                   <br></br>
                   <QuestionHeader>
                    I'm a passionate Full stack developer with the goal of working on a project that 
                    solves problems with thoughtful UI design, creating intuitive, dynamic user 
                    experiences powered by strong backend. I primarily work with MERN stack among 
                    the full stack technologies. The satisfaction that I get while working and 
                    completing every project made me do more and more. And I believe, I have did 
                    something creatively.
                   </QuestionHeader>                          
               </InnerContainer>
            </Container>
        </div>
    )
}
