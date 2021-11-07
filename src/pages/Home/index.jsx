import React, { useState } from "react";
import TextField, { Input } from "@material/react-text-field";
// import Slider from "react-slick";
import MaterialIcon from "@material/react-material-icon";
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from "../../components";

import logoImg from "../../assets/logo.png";
import rest from "../../assets/restaurante-fake.png";

import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
} from "./styles";
import { useSelector } from "react-redux";


function Home() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    autoplay: true,
  };

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputValue);

      console.log(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Search>
            <Logo src={logoImg} alt="Logo da Find-Some-Food" />
            <TextField
              label="Search for FOOD"
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search" />}
            >
              <Input
                type="text"
                value={inputValue}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
              />
            </TextField>
            {restaurants.length > 0 ? (
              <>
                <CarouselTitle>In your area</CarouselTitle>
                <Carousel {...settings}>
                  {restaurants.map((restaurant) => (
                    <Card
                      key={restaurant.place_id}
                      photo={
                        restaurant.photos ? restaurant.photos[0].getUrl() : rest
                      }
                      title={restaurant.name}
                    />
                  ))}
                </Carousel>
              </>
            ) : (
              <Loader />
            )}
          </Search>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              onClick={() => handleOpenModal(restaurant.place_id)}
              key={restaurant.place_id}
              restaurant={restaurant}
            />
          ))}
        </Container>

        <Map query={query} placeId={placeId} />

        <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
          {restaurantSelected ? (
            <>
              <ModalTitle>{restaurantSelected?.name}</ModalTitle>
              <ModalContent>
                {restaurantSelected?.formatted_phone_number}
              </ModalContent>
              <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
              <ModalContent>
                {restaurantSelected?.opening_hours?.open_now
                  ? "Aberto Agora :-)"
                  : "Fechado neste momento :-("}
              </ModalContent>
            </>
          ) : (
            <>
              <Skeleton width='10px' height='10px'/>
              <Skeleton width='10px' height='10px'/>
              <Skeleton width='10px' height='10px'/>
              <Skeleton width='10px' height='10px'/>
            </>
          )}
        </Modal>
      </Wrapper>
    </>
  );
}

export default Home;
