import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(0,0,0,0.9);
  width: 100%;
  height: 200px;
  color: white;
  padding: 0px 160px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  width: 50%;
  justify-content: center;
  flex-direction: column;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  flex-direction: row;
  justify-content: right;
`

const LinkBox = styled.div`
  flex: 0;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  color: rgba(255,255,255,0.5);
`

const Subtitle = styled.a`
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-right: 60px;
  &:hover {
    text-decoration: underline;
  }
`

// Footer component
function Footer() {
  return (
    <Container>
      <Left>
        "Exploring what computer science is truly about - innovation"
        <LinkBox>
            <Subtitle href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insider.com%2Ffun-facts-shrek-movie-2019-2&psig=AOvVaw2iO5OAPiqwdU3LPJ_W4V6N&ust=1699053723043000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCJi5i8G6poIDFQAAAAAdAAAAABAD">
              <x style={{fontWeight: 'normal', color: 'red'}}>Los Angeles Pierce College</x> - TECH Club
            </Subtitle>
            <br />
            6201 Winnetka Ave. Woodland Hills, CA 91371
            <br />
            Room ELM 1720
        </LinkBox>
      </Left>
      <Right>
        <Subtitle href="/about">About Us</Subtitle><nobr/>
        <Subtitle href="/featured">Featured</Subtitle>
        <Subtitle href="/community">Community</Subtitle>
        <Subtitle href="/join">Join</Subtitle>
      </Right>
    </Container>
  )
}

export default Footer;