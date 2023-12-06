import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import codeLines from '../../assets/codelines.jpg';
import clubPhoto from '../../assets/clubphoto.jpg';
import { GetMainPost } from '../Featured/News.js';
import { Information, LeftImage, TopTitle } from '../../components/Widgets.js';

const WelcomeContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 560px;
	background-color: rgba(0,0,0,0.4);
	padding: 150px 160px;
	color: white;
	font-size: 48px;
	font-weight: bold;
	width: 100%;
	margin-bottom: 100px;
`;

const WLeft = styled.div` // Welcome Container Left
	flex-grow: 0;
	width: 50%;
	height: 100%;
	padding-right: 80px;
`;

const WRight = styled.div` // Welcome Container Right
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 50%;
	padding-top: 90px;
	font-size: 28px;
`;

const WelcomeCover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${codeLines});
	background-size: cover;
	height: 560px;
	width: 100%;
	z-index: -1;
	outline: 3px solid #FF6969;
	background-position: center center;
`;

const WDescrip = styled.div` // Welcome Description
	margin-top: 20px;
	font-size: 24px;
	font-weight: 600;
`;

const NewsWidgetContainer = styled.div`
	height: 360px;
	width: 90%;
	background-color: white;
	border-radius: 3px;
	outline: 3px solid #FF6969;
	flex-shrink: 0;
	margin-top: 10px;
`;

const NewsImage = styled.div`
	background-size: cover;
	height: calc(100% - 20px);
	width: auto;
	margin: 10px;
	border-radius: 3px;
`;

const NewsGradient = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
	margin: 10px;
	height: calc(100% - 20px);
	width: auto;
	transform: translateY(calc(-100% - 10px));
	background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%);
	padding: 20px;
`

const NDivider = styled.div` // News widget divider.
	background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,1) 50%, rgba(255,255,255,0));
	width: 100%;
	height: 3px;
	margin: 10px 0px;
`

const NewsDetails = styled.div`
	color: lightgrey;
	font-size: 16px;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2; 
  -webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	flex-grow: 1;
	font-weight: normal;
`

const ReadMore = styled.a`
	color: #FF6969;
	white-space: nowrap;
	font-size: 16px;
	align-self: flex-end;

	&:hover {
		text-decoration: underline;
	}
`

const TriviaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #FF6969;
	color: white;
	-webkit-text-stroke: 1px black;
	height: 100px;
	width: max-content;
	padding: 0px 40px;
	align-self: center;
	font-size: 36px;
	font-weight: 700;
	border: 5px solid rgba(255, 255, 255, 0.5);
	margin: 40px 0px;
`

function removeElementsByClass(className){
	const elements = document.getElementsByClassName(className);
	while(elements.length > 0){
			elements[0].parentNode.removeChild(elements[0]);
	}
}

function Home() {
	const WelcomeMessage = `
		Have you ever wanted to
		<span style="color: #73FF79">
			create a game</span>, <span style="color: #D67FFF">
			build a robot</span>, or
			<span style="color: #51CBFF">change your life
		</span> with a computer?
		<br/>
		<br/>
	`

	const WelcomeMessage2 = `<span id="joeparent"><span style="width: max-content; whitespace: nowrap">There's a place where you belong.</span>&nbsp;
	<a id="joe" href="/about" class="opacity-0" style="display: none;">Join Us</a></span>`

	let main = GetMainPost();

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<WelcomeCover />
			<WelcomeContainer>
				<WLeft>
					Welcome to the<br />TECH Club :)
					<WDescrip>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.changeDelay(50)
								.pauseFor(500)
								.typeString(WelcomeMessage)
								.pauseFor(500)
								.typeString(WelcomeMessage2)
								.callFunction(() => {
									// Show Join us button;
									var parent = document.getElementById('joeparent')
									parent.style = "display: flex; flex-direction: row;"
									var child = document.getElementById('joe')
									child.innerText = "> Join Us"
									// Fade Effects
									child.style = "display: flex; flex-direction: row; height: max-content; flex: 1; border-radius: 10px; color: #FF5959; font-weight: 800;"
									setTimeout(() => {
										child.className = "transition-opacity opacity-0 duration-1000 ease-in-out even:opacity-100 transform"
									}, 500)
									// Delete Cursor
									removeElementsByClass("Typewriter__cursor")
								})
								.start();
						}}
					/>
					</WDescrip>
				</WLeft>

				<WRight>
					Latest News
					<NewsWidgetContainer>
						<NewsImage style={{backgroundImage: 'url('+ require("../../assets/" + main.image) + ')'}} />
						<NewsGradient>
							<div style={{width: '80%'}}>
								{main.title}
							</div>
							<NDivider />
							<div style={{display: 'flex'}}>
								<NewsDetails>
									{main.description}
								</NewsDetails>
								<ReadMore href="/featured">
									&gt; Read More
								</ReadMore>
							</div>
						</NewsGradient>
					</NewsWidgetContainer>
				</WRight>
			</WelcomeContainer>

			<LeftImage title='50+ Members...' image={clubPhoto}>
				Attend our weekly meetings every Wednesday to eat, laugh, and learn about industry standard technologies.
				<br/><br/>
				At the Technology Enthusiasts and Coding Hackers Club, students take advantage of opportunities to share their creative side with tech. Exploring what computer science is truly about - Innovation.
			</LeftImage>

			<div style={{display: 'flex'}}>
				<Information 
					title="New to Tech? Don't fret."
					style={{flex: 1, marginRight: 0}}
				>	
					We host weekly workshops at the end of each meeting to explore a new concept and learn something new!
					<br/><br/>
					Topics discussed are Web dev, Game dev, Hardware, Cybersecurity, and even FORTNITE!
				</Information>

				<TopTitle
					title="Recent Workshops"
					style={{width: '40%', fontSize: '20px'}}
					backgroundCol='rgba(0,0,0,0.8)'
				>
					- React + Club Website Contributions<br/>
					- Intro to Computer Hardware<br/>
					- “WTF & B” What's the Frontend & Backend?
				</TopTitle>
			</div>

			<TriviaContainer>
				Trivia! What does TECH stand for?
			</TriviaContainer>

			<Information title="Made it this far?">
				Maybe it's time for you to see us in person!
				<br />
				We meet on <span style={{fontWeight: 'bold'}}>Wednesday's at 4:00PM</span>, In room ELM 1720 or CFS 92035.
				<br /><br />
				We'll see you soon :)
			</Information>
		</div>
	);
}

export default Home;
