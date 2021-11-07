import { useEffect, useState } from "react";
import styled from "styled-components";
import { Skeleton } from "..";

const Card = styled.div`
  background-size: cover;
  background-image: url(${(props) => props.photo});
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 90px;
  padding: 10px;
  width: 90px;
`;

const Title = styled.span`
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-size: 12px;
`;

const ImageCard = ({ photo, title }) => {

const [ imageLoaded, setImageLoaded ] = useState(false);

useEffect(() => {
  const imageLoader = new Image();
  imageLoader.src = photo
  imageLoader.onload = () => setImageLoaded(true);
}, [photo])

return (
  <>
  {imageLoaded ? (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>

  ) : (
    <Skeleton width='90px' height='90px' />
  )}

  </>
);}

export default ImageCard;
