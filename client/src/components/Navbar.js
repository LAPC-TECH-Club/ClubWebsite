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
`;

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
`;

const JoinOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.6);
  width: 100%;
  height: 100vh;
  padding: 0px 400px;
  z-index: 100;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
`;

const CloseOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(200,20,148,0);
  cursor: pointer;
`;

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 250px;
  background-color: white;
  z-index: 100;
  border-radius: 20px;
  padding: 20px;
  font-size: 16pt;
`;

const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 60%;
  margin: 10px 0px;
`

const JoinButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: red;
  border-radius: 10px;

  &:hover {
    border-radius: 15px;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`

export function LoadJoin() {
  document.getElementById("joinOverlay").style = "display: flex";
}

export function CloseJoin() {
  document.getElementById("joinOverlay").style = "display: none";
}

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
        <NavLink style={{fontWeight: 'bold', color: "#FF6969"}} onClick={() => {LoadJoin()}}>Join</NavLink>
        <JoinOverlay id="joinOverlay">
          <CloseOverlay id="closer" onClick={() => {CloseJoin()}}></CloseOverlay>
          <JoinContainer>
            Ready to Create? Join Below!
            <ButtonCont>
              <JoinButton href="https://discord.gg/UjJpDRPDhb" rel="noopener noreferrer" target="_blank" style={{backgroundColor: '#7289DA'}}>
                <Icon src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"></Icon>
              </JoinButton>
              <JoinButton href="https://www.instagram.com/lapc.techclub/" rel="noopener noreferrer" target="_blank" style={{backgroundColor: '#F54D5D'}}>
                <Icon src="https://www.cccreationsusa.com/wp-content/uploads/2017/10/instagram-png-instagram-png-logo-1455.png"></Icon>
              </JoinButton>
            </ButtonCont>
          </JoinContainer>
        </JoinOverlay>
      </Right>
    </Container>
  )
}

export default Navbar;