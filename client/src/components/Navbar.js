import styled from 'styled-components'
import logo from '../assets/TECHClubIcon.png'

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  width: 100%;
  height: 60px;
  background-color: rgba(0,0,0,0.3);
  outline: solid rgba(255,255,255,0.3) 4px;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 50%;
  padding-right: 30px;
`

const TECH = styled.img`
  border-radius: 5px;
  width: 50px;
  height: 50px;
  margin-left: 30px;
`

const LogoText = styled.a`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`

const NavLink = styled.a`
  padding: 5px 20px;
  margin-right: 10px;
  font-size: 16px;
  color: white;
  border-radius: 20px;
  font-weight: 600;
  background-color: rgba(0,0,0,0);
  
  &:hover {
    background-color: rgba(255,255,255,0.1);
    outline: white 1px solid;
    cursor: pointer;
  }
`


function Navbar() {
  return (
    <Container>
      <Left>
        <TECH alt="TECH Club Logo" src={logo}></TECH>
        <LogoText href="/">
          <x style={{fontWeight: 'normal', color: 'red'}}>LAPC</x> TECH Club
        </LogoText>
      </Left>
      <Right>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/featured">Featured</NavLink>
        <NavLink href="/community">Community</NavLink>
        <NavLink href="/join">Join</NavLink>
      </Right>
    </Container>
  )
}

export default Navbar;