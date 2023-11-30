import styled from 'styled-components'

const InfoContainer = styled.div`
  margin: 25px 100px;
  padding: 30px;
`

const Title = styled.div`
  color: black;
  font-size: 42px;
  margin-bottom: 10px;
  font-weight: bold;
`

const Description = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
`

const Image = styled.div`
  width: 40%;
  height: 300px;
  background-image: url(${(props) => {return props.src}});
  background-size: cover;
  background-color: #FF6969;
  border-radius: 10px;
  outline: 2px solid #FF6969;
`;

const LeftImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 100px;
  padding: 30px;
  background-color: lightgrey;
  border-radius: 10px;
`

const TopTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 30px;
  margin-right: 100px;
  font-weight: 600;
`

export function Information({title = "N/A", style, children}) {
  return (
    <InfoContainer style={style}>
      <Title>{title}</Title>
      <Description>
        {children}
      </Description>
    </InfoContainer>
  );
}

export function LeftImage({title = "N/A", image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hYGHaAfpcD4KyN1GDej_K9KPrjDFMN0OqUEltmqPHA&s", style, children}) {
  return (
    <LeftImageContainer style={style}>
      <Image src={image}/>
      <div style={{display: 'flex', width: 'calc(60% - 40px)', marginLeft: '20px', padding: '20px', flexDirection: 'column'}}>
        <Title>{title}</Title>
        <Description>
          {children}
        </Description>
      </div>
    </LeftImageContainer>
  );
}

export function TopTitle({title, titleColor = 'black', backgroundCol = 'darkgrey', style, children}) {
  return (
    <TopTitleContainer style={style}>
      <Title style={{color: titleColor, fontSize: '28px'}}>{title}</Title>
      <div style={{padding: '30px', backgroundColor: backgroundCol, borderRadius: '10px', height: 'max-content', width: 'max-content'}}>
        {children}
      </div>
    </TopTitleContainer>
  )
}