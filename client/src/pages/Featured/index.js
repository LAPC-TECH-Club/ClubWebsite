import Markdown from 'react-markdown'
import styled from 'styled-components';
import media from '../../assets/filmmaker.jpg';
import { ActivePosts, GetPostDetails } from './News';
import { useState } from 'react';

const WelcomeCover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${media});
	background-size: cover;
	height: 740px;
	width: 100%;
	z-index: -1;
	outline: 3px solid #FF6969;
  background-position: center center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(0,0,0,0.7);
  height: calc(740px - 100px);
  margin-top: 100px;
`;

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
  overflow: hidden;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px;
  color: black;

  ${(props) => {
    if (props.hoverable) {
      return `
        &:hover {
          opacity: 0.8;
          cursor: pointer;
          background: linear-gradient(to top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%);
        }
      `
    }
  }}
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
`;

const ContentContainer = styled.div`
  height: 60%;
  width: 100%;
  padding: 10px;
`;

const SubContainer = styled.div`
  height: 25%;
  width: 100%;
  border-bottom: 2px solid lightgrey;
  margin-top: 10px;
  padding-bottom: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    background: linear-gradient(to top, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%);
    border-radius: 20px;
  }

  ${(props) => {
    if (props.noimage) {
      return `
        padding-left: 10px;
        padding-right: 10px;
      `
    }
  }}
`;

const Title = styled.div`
  color: black;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  color: black;
  font-weight: bold;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

const LastUpdated = styled.div`
  color: grey;
  font-size: 12pt;
  ${(props) => {
    if (props.loaded) {
      return (`
        padding: 10px 0px;
        border-bottom: 2px solid lightgrey;
        margin-bottom: 5px;
      `)
    }
  }}
`;

const Author = styled.span`
  color: black;
  font-weight: bold;
`

const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  color: black;
  font-size: 14pt;
`;

const NewsOverlay = styled.div`
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
`;

const LoadedNews = styled.div`
  position: relative;
  background-color: white;
  height: max-content;
  padding: 30px;
  border-radius: 20px;
  width: calc(100%);
  font-size: 14pt;
`;

const Image = styled.div`
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;

const CloseOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(200,20,148,0);
  cursor: pointer;
`

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;
`

const Article = styled.div`
  display: flex;
  flex-direction: row;
  height: max-content;
  width: 50%;
  padding: 30px;
  border-bottom: 2px solid lightgray;
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
  }
`

const ArticleImage = styled.div`
  width: 50%;
  background-position: center center;
  background-size: cover;
  min-height: 200px;
  max-height: 400px;
  border-radius: 10px;
`

const Spacer = styled.div`
  height: 50px;
  width: 50%;
`

function CharacterCutoff(maxCharacters, input) {
  let newString = input;
  if (input.length > maxCharacters) {
    newString = input.substring(0,(maxCharacters - 1)) + "...";
  }
  return newString;
}

function Featured() {
  // TODO: Convert this list of variables to a simple array
  let posts = ActivePosts()
  let mainPost = posts[0];
  let subMain = posts[1];
  let subPost = posts[2];
  let subPost2 = posts[3];

  const [img, setImg] = useState(mainPost.image);
  const [title, setTitle] = useState(mainPost.title);
  const [description, setDescription] = useState(mainPost.description);
  const [lastUpdated, setLastUpdated] = useState(mainPost.lastUpdated);
  const [author, setAuthor] = useState(mainPost.author);
  const [scrollPos, setPos] = useState(0);

  function loadNews(id) {
    let post = GetPostDetails(id);
    setImg(post.image);
    setTitle(post.title);
    setDescription(post.description);
    setLastUpdated(post.lastUpdated);
    setAuthor(post.author);
    setPos(document.documentElement.scrollTop)

    let overlay = document.getElementById("overlay");
    overlay.style = "display: block";
    overlay.scrollTop = 0;
    document.body.style = "overflow-y: scroll; position: fixed; top: -" + document.documentElement.scrollTop + "px;";
    document.getElementById("closer").style = "height: calc(400px + " + document.getElementById("article").offsetHeight + "px)";
  }

  function closeOverlay() {
    document.getElementById("overlay").style = "display: none";
    document.body.style = " position: static;";
    document.documentElement.scrollTop = scrollPos;
  }

  function LoadArticles() {
    let articles = []
    let posts = ActivePosts();
    
    for (let i = 0; i < posts.length; i++) {
      articles.push(<Article key={posts[i].id} onClick={() => {loadNews(posts[i].id)}}>
          <ArticleImage style={{backgroundImage: 'url(' + require("../../assets/" + posts[i].image) + ')'}}></ArticleImage>
          <div style={{flex: 1, marginLeft: '20px'}}>
            <Title>{posts[i].title}</Title>
            <Description style={{WebkitLineClamp: 'unset'}}>{CharacterCutoff(170, posts[i].description)}</Description>
          </div>
      </Article>)
    }
  
    return articles;
  }
  
  return (<div>
    <WelcomeCover />
    <Container>
      <Left>
        <NewsPreview>
          <PreviewContainer hoverable="true" onClick={() => {loadNews(mainPost.id)}} style={{borderRight: '2px solid lightgrey'}}>
            <MainImg src={require("../../assets/" + mainPost.image)} />
            <ContentContainer>
              <Title>{mainPost.title}</Title>
              <LastUpdated>Last Updated: {mainPost.lastUpdated}</LastUpdated>
              <Description style={{WebkitLineClamp: '7'}}>{mainPost.description}</Description>
            </ContentContainer>
          </PreviewContainer>
          
          <PreviewContainer>
            <SubContainer onClick={() => {loadNews(subMain.id)}} style={{height: '58%'}}>
              <MainImg src={require("../../assets/" + subMain.image)} />
              <ContentContainer>
                <SubTitle>{subMain.title}</SubTitle>
                <Description style={{WebkitLineClamp: '3'}}>{subMain.description}</Description>
              </ContentContainer>
            </SubContainer>

            <SubContainer noimage="true" onClick={() => {loadNews(subPost.id)}}>
              <SubTitle>{subPost.title}</SubTitle>
              <Description>{subPost.description}</Description>
            </SubContainer>

            <SubContainer noimage="true" onClick={() => {loadNews(subPost2.id)}} style={{border: 'none'}}>
              <SubTitle>{subPost2.title}</SubTitle>
              <Description>{subPost2.description}</Description>
            </SubContainer>
          </PreviewContainer>
        </NewsPreview>
      </Left>

      <Right>
      </Right>
    </Container>

    <ArticlesContainer>
      <Spacer style={{borderBottom: '2px solid grey'}} />
      {LoadArticles()}
      <Spacer />
    </ArticlesContainer>

    <NewsOverlay id="overlay">
      <CloseOverlay id="closer" onClick={() => {closeOverlay()}}></CloseOverlay>
      <div style={{height: '100px', width: '100%'}}></div>
      <LoadedNews id="article">
        <Image style={{backgroundImage: 'url('+require("../../assets/"+img)+')'}}></Image>
        <div style={{padding: '5px 10px'}}>
          <Title style={{fontSize: '32pt'}}>{title}</Title>
          <LastUpdated loaded="true">Last Updated: {lastUpdated}<Author>&nbsp;- By: {author}</Author></LastUpdated>
          <Markdown>
            {description}
          </Markdown>
        </div>
      </LoadedNews>
      <div style={{height: '200px', width: '100%'}}></div>
    </NewsOverlay>
  </div>)
}

export default Featured;