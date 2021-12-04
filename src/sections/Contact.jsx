import React from 'react'
import styled from 'styled-components'
import { medium } from '../responsive';
import { AiOutlineContacts,AiOutlineMail } from "react-icons/ai";
import { FiSmartphone,FiMapPin } from "react-icons/fi";
import { small } from '../responsive';
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
const Discuss=styled.div`
display: flex;
justify-content: center;
`
const ContactContainer=styled.div`
margin-top: 4rem;
display: flex;
flex-wrap: wrap;
color:darkcyan;
justify-content: space-between;
gap: 1rem;
`
const Button=styled.button`
${small({width:"15rem"})}
`
export default function Contact() {
    return (
        <div id="contacts">
            <HeaderContainer>
                    <IconDiv><AiOutlineContacts/></IconDiv>
                    <IconHeader>Contact</IconHeader>
            </HeaderContainer>
            <Container>
               <InnerContainer>
                   <QuestionHeader>
                       Having an Idea/Project in mind? --- 
                       <Discuss><button className="btn btn-success" style={{fontSize:"1.7rem",marginRight:"5rem"}}><a style={{color:"inherit",textDecoration:"none"}} href="mailto:vyukeshkumaran@gmail.com">  Let's Discuss </a></button></Discuss>
                   </QuestionHeader>
                        
                            
                        
                        <ContactContainer>
                            <div ><Button  className="btn btn-info p-2"><AiOutlineMail/><a style={{color:"inherit",textDecoration:"none"}}>vyukeshkumaran@gmail.com</a></Button></div>
                            <div ><Button  className="btn btn-info p-2"><FiSmartphone/><a style={{color:"inherit",textDecoration:"none"}} href="tel:+918870293627">+91-9962192464</a></Button></div>
                            <div ><Button  className="btn btn-info p-2"><FiMapPin/><a style={{color:"inherit",textDecoration:"none"}}>Chengalpattu,Tamilnadu</a></Button></div>
                        </ContactContainer>
               </InnerContainer>
            </Container>
        </div>
    )
}
