import React from 'react'
import styled from 'styled-components'
import Wave from 'react-wavify'
import TextTransition, { presets } from "react-text-transition";
import { HiDocumentDownload } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";
import {Link as LinkS} from 'react-scroll' 
import { small } from '../responsive';


const MainContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 9rem;
${small({gap:"2rem"})}
`
export const NavLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    color: white;

`

const MainDiv=styled.div`
flex: 1;
`

const Container=styled.div`
display: flex;
padding: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:9rem;
text-align: center;
${small({marginTop:"5rem"})}
`

const HeaderContainer=styled.div`
color:darkcyan;
font-size: 4rem;
font-weight: 700;
text-align: center;
`
const SContainer=styled.div`
font-size: 2.5rem;
font-weight: 700;
`
const TContainer=styled.div`
font-size: 2.5rem;
font-weight: 700;
color:darkcyan;
`

export default function Home() {
    const [index, setIndex] = React.useState(0);
    const TEXTS = [
        "React",
        "Angular",
        "NodeJs",
        "SQL",
        "MongoDB",
        "HTML",
        "CSS",
        "Javascript",
        "AWS",
        "Java",
        "Spring"
      ];
     
    React.useEffect(() => {
     
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        1500 
      );
      return () => clearTimeout(intervalId);
      
    }, []);
    return (
        <div id="home">
        <MainContainer>

            <MainDiv>
                <Container className="text-justify" >
                    <HeaderContainer> YUKESH KUMARAN V </HeaderContainer>
                    <SContainer ><p >Full Stack Developer who likes building stuffs with</p></SContainer>
                    <TContainer>
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    />
                    </TContainer>
                    <SContainer>
                        <button className="btn btn-success"><a style={{color:"inherit",textDecoration:"none"}}target="_blank" href="https://drive.google.com/file/d/1stCjT2IdddTzDYeoJghlS-5l4SGZJicv/view?usp=drivesdk"><HiDocumentDownload style={{fontSize:"1.5rem"}}/>Resume</a></button>
                        <button className="btn btn-secondary mx-2"> <AiFillAppstore style={{fontSize:"1.5rem"}}/>
                        <NavLinks to='projects' spy={true} smooth={true}  duration={500}>Project</NavLinks>
                        </button>
                    </SContainer>
                </Container>
        </MainDiv >

        <MainDiv  className="d-flex flex-column justify-content-end " >
            <div>
         <Wave  fill='darkcyan'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.50,
          points: 3
        }}
        />
        </div>
        </MainDiv>
        </MainContainer>
        </div>
    )
  }
