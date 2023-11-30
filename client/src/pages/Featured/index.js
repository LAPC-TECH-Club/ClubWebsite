import styled from 'styled-components'
import media from '../../assets/filmmaker.jpg'
import { GetPostDetails } from './News';
import { useState } from 'react';

const WelcomeCover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${media});
	background-size: cover;
	height: 80vh;
	width: 100%;
	z-index: -1;
	outline: 3px solid #FF6969;
  background-position: center center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(0,0,0,0.7);
  height: calc(80vh - 100px);
  margin-top: 100px;
  margin-bottom: 100px;
`

const Left = styled.div` // Welcome Container Left
	flex-grow: 0;
	width: 70%;
	height: 100%;
	padding: 30px 60px;
`;

const Right = styled.div` // Welcome Container Right
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 30%;
	font-size: 28px;
`;

const NewsPreview = styled.div`
float: right;
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 100%;
  width: 90%;
  border-radius: 20px;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px;
  color: black;
`;

const MainImg = styled.div`
  height: 40%;
  width: 100%;
  border-radius: 10px;
  background-image: ${(props) => {
    return `url(${props.src})`;
  }};
  background-size: cover;
  background-position: center center;
  &:hover {
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  height: 60%;
  width: 100%;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const SubContainer = styled.div`
  height: 25%;
  width: 100%;
  border-bottom: 2px solid lightgrey;
  padding: 10px 0px;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  color: black;
  font-weight: bold;
  font-size: 28px;
`;

const SubTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`

const LastUpdated = styled.div`
  color: lightgrey;
  font-size: 12px;
`;

const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  color: black;
  font-size: 18px;
`;

const NewsOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.6);
  width: 100%;
  height: 100vh;
  padding: 0px 300px;
  z-index: 100;
  overflow-y: auto;
`;

const LoadedNews = styled.div`
  position: relative;
  background-color: white;
  height: max-content;
  padding: 30px;
  border-radius: 20px;
  width: calc(100%);
`;

function loadNews(id) {
  console.log(id);
}

function Featured() {
  let mainPost = GetPostDetails("FIM");
  let subMain = GetPostDetails("WWA");
  let subPost = GetPostDetails("TGK");
  let subPost2 = GetPostDetails("TFM");

  const [img, setImg] = useState(mainPost.img);
  const [title, setTitle] = useState(mainPost.title)
  const [description, setDescription] = useState(mainPost.description)

  return (<div>
    <WelcomeCover />
    <Container>
      <Left>
        <NewsPreview>
          <PreviewContainer onClick={() => {loadNews(mainPost.id)}} style={{borderRight: '2px solid lightgrey'}}>
            <MainImg src={require("../../assets/" + mainPost.image)} />
            <ContentContainer>
              <Title>{mainPost.title}</Title>
              <LastUpdated>Last Updated: {mainPost.lastUpdated}</LastUpdated>
              <Description style={{webkitLineClamp: '7'}}>{mainPost.description}</Description>
            </ContentContainer>
          </PreviewContainer>
          
          <PreviewContainer>
            <SubContainer onClick={() => {loadNews(subMain.id)}} style={{height: '50%'}}>
              <MainImg src={require("../../assets/" + subMain.image)} />
              <ContentContainer>
                <SubTitle>{subMain.title}</SubTitle>
                <Description style={{webkitLineClamp: '3'}}>{subMain.description}</Description>
              </ContentContainer>
            </SubContainer>

            <SubContainer onClick={() => {loadNews(subPost.id)}}>
              <SubTitle>{subPost.title}</SubTitle>
              <Description>{subPost.description}</Description>
            </SubContainer>

            <SubContainer onClick={() => {loadNews(subPost2.id)}} style={{border: 'none'}}>
              <SubTitle>{subPost2.title}</SubTitle>
              <Description>{subPost2.description}</Description>
            </SubContainer>
          </PreviewContainer>
        </NewsPreview>
      </Left>

      <Right>
      </Right>
    </Container>
    <NewsOverlay>
      <div style={{height: '200px', width: '100%'}}></div>
      <LoadedNews>
        <Title>FriendShip is Magic</Title>
        <LastUpdated cyb2>Novermber 11th, 2023</LastUpdated>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean. Integer enim neque volutpat ac tincidunt vitae semper quis. Ornare aenean euismod elementum nisi quis eleifend. Cras tincidunt lobortis feugiat vivamus at augue. Feugiat sed lectus vestibulum mattis. Feugiat vivamus at augue eget arcu dictum varius duis. At imperdiet dui accumsan sit amet nulla facilisi. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Auctor eu augue ut lectus arcu bibendum. Risus nullam eget felis eget nunc lobortis. Quis auctor elit sed vulputate.
        In egestas erat imperdiet sed. Cras ornare arcu dui vivamus arcu felis bibendum ut. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Quam viverra orci sagittis eu volutpat. In ante metus dictum at tempor commodo ullamcorper. Ultrices dui sapien eget mi proin sed libero. Viverra vitae congue eu consequat ac felis donec et odio. Et odio pellentesque diam volutpat commodo sed egestas egestas. Nulla pellentesque dignissim enim sit amet venenatis. Eu ultrices vitae auctor eu augue ut lectus. At elementum eu facilisis sed odio morbi quis commodo odio. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aenean sed adipiscing diam donec. Viverra suspendisse potenti nullam ac tortor vitae purus. Et netus et malesuada fames. Venenatis lectus magna fringilla urna. Odio ut sem nulla pharetra diam sit amet nisl.

        Amet dictum sit amet justo. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Dictumst quisque sagittis purus sit. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Feugiat vivamus at augue eget arcu dictum varius duis at. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam quisque id diam vel quam elementum pulvinar etiam. Sit amet est placerat in egestas erat imperdiet. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Nam at lectus urna duis convallis convallis tellus id interdum. Arcu dui vivamus arcu felis bibendum. Viverra mauris in aliquam sem. Euismod lacinia at quis risus sed vulputate odio ut. Nisl rhoncus mattis rhoncus urna neque viverra justo.

        Porttitor lacus luctus accumsan tortor. Integer vitae justo eget magna fermentum iaculis eu. Pulvinar proin gravida hendrerit lectus. Tortor posuere ac ut consequat semper viverra nam libero. Nisi lacus sed viverra tellus in hac. Auctor elit sed vulputate mi. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Enim eu turpis egestas pretium aenean pharetra magna ac. Leo urna molestie at elementum. Magna sit amet purus gravida quis.

        At in tellus integer feugiat. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Malesuada fames ac turpis egestas integer eget aliquet nibh. In nisl nisi scelerisque eu ultrices vitae. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Ullamcorper sit amet risus nullam eget felis eget nunc. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Sit amet aliquam id diam maecenas ultricies mi eget. Eget mauris pharetra et ultrices neque ornare. Lectus nulla at volutpat diam ut venenatis tellus in. Phasellus vestibulum lorem sed risus. Imperdiet proin fermentum leo vel. Justo eget magna fermentum iaculis. Nascetur ridiculus mus mauris vitae ultricies leo. Turpis egestas pretium aenean pharetra magna. At imperdiet dui accumsan sit amet nulla. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean. Integer enim neque volutpat ac tincidunt vitae semper quis. Ornare aenean euismod elementum nisi quis eleifend. Cras tincidunt lobortis feugiat vivamus at augue. Feugiat sed lectus vestibulum mattis. Feugiat vivamus at augue eget arcu dictum varius duis. At imperdiet dui accumsan sit amet nulla facilisi. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Auctor eu augue ut lectus arcu bibendum. Risus nullam eget felis eget nunc lobortis. Quis auctor elit sed vulputate.

        In egestas erat imperdiet sed. Cras ornare arcu dui vivamus arcu felis bibendum ut. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Quam viverra orci sagittis eu volutpat. In ante metus dictum at tempor commodo ullamcorper. Ultrices dui sapien eget mi proin sed libero. Viverra vitae congue eu consequat ac felis donec et odio. Et odio pellentesque diam volutpat commodo sed egestas egestas. Nulla pellentesque dignissim enim sit amet venenatis. Eu ultrices vitae auctor eu augue ut lectus. At elementum eu facilisis sed odio morbi quis commodo odio. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aenean sed adipiscing diam donec. Viverra suspendisse potenti nullam ac tortor vitae purus. Et netus et malesuada fames. Venenatis lectus magna fringilla urna. Odio ut sem nulla pharetra diam sit amet nisl.

        Amet dictum sit amet justo. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Dictumst quisque sagittis purus sit. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Feugiat vivamus at augue eget arcu dictum varius duis at. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam quisque id diam vel quam elementum pulvinar etiam. Sit amet est placerat in egestas erat imperdiet. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Nam at lectus urna duis convallis convallis tellus id interdum. Arcu dui vivamus arcu felis bibendum. Viverra mauris in aliquam sem. Euismod lacinia at quis risus sed vulputate odio ut. Nisl rhoncus mattis rhoncus urna neque viverra justo.

        Porttitor lacus luctus accumsan tortor. Integer vitae justo eget magna fermentum iaculis eu. Pulvinar proin gravida hendrerit lectus. Tortor posuere ac ut consequat semper viverra nam libero. Nisi lacus sed viverra tellus in hac. Auctor elit sed vulputate mi. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Enim eu turpis egestas pretium aenean pharetra magna ac. Leo urna molestie at elementum. Magna sit amet purus gravida quis.

        At in tellus integer feugiat. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Malesuada fames ac turpis egestas integer eget aliquet nibh. In nisl nisi scelerisque eu ultrices vitae. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Ullamcorper sit amet risus nullam eget felis eget nunc. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Sit amet aliquam id diam maecenas ultricies mi eget. Eget mauris pharetra et ultrices neque ornare. Lectus nulla at volutpat diam ut venenatis tellus in. Phasellus vestibulum lorem sed risus. Imperdiet proin fermentum leo vel. Justo eget magna fermentum iaculis. Nascetur ridiculus mus mauris vitae ultricies leo. Turpis egestas pretium aenean pharetra magna. At imperdiet dui accumsan sit amet nulla. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
      </LoadedNews>
    </NewsOverlay>
  </div>)
}

export default Featured;