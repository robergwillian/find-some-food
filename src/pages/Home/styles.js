import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  overflow-y: auto;
  width: 360px;
  overflow-x:hidden;
`;

export const Search = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.img`
  margin-bottom: 20px;
  width:300px;
`;

export const Map = styled.div`
  background: black;
  width: 500px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 45px;
  }
`;

export const CarouselTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  margin: 20px 0;
`;

export const ModalTitle = styled.p`
  margin-bottom:10px;
  letter-spacing:0.11px;
  color: ${props => props.theme.colors.text}
  text-transform: none;
  line-height: 30px;
  font-size:24px;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.fontFamily};
`;

export const ModalContent = styled.p`
margin-bottom:10px;
color: ${props => props.theme.colors.text}
text-transform: none;
line-height: 20px;
font-size:16px;
font-family: ${props => props.theme.fonts.fontFamily};
`;