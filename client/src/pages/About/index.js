import styled from "styled-components";
import { Information } from "../../components/Widgets";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 100%;
  background-image: url(${require("../../assets/hardware.jpg")});
  background-size: cover;
  background-position: center center;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  height: max-content;
  background-color: rgba(0,0,0,0.3);
  padding: 40px;
`;

const Title = styled.div`
  font-size: 24pt;
  font-weight: bolder;
  color: red;
  margin-top: -20px;
`;

const Description = styled.div`
  padding: 30px;
  border-radius: 20px;
  border: 2px solid red;
  color: white;
  font-size: 16pt;
  font-weight: bold;
`;

function About() {
  return (
    <div>
      <Container>
        <AboutContainer>
          <Title>About Us</Title>
          <Description>
            The TECH Club was founded with a goal of improving awareness and understanding of tech, no matter the perceived “skill” of a person.
            <br/><br/>
            Today, we fulfill that goal by having competitions and quizzes that challenge understanding, regardless of prior knowledge.
            <br/><br/>
            It gives a chance for all of us to grow together and build lasting connections. A chance to be inspired and change our communities. A chance to change the world... with technology.
          </Description>
        </AboutContainer>
      </Container>
      <Information title="Mission Statement">
        At TECH Club, we embrace people with a passion for technology, whether you're a tech enthusiast or a curious novice. Our mission is to foster a vibrant community that transcends traditional computer science education. We aspire to empower our members to transform their tech passion into tangible, meaningful accomplishments. Together, we explore the limitless possibilities of technology, pushing the boundaries of innovation and creativity.
      </Information>
    </div>
  )
}

export default About;