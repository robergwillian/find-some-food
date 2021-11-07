import ReactStars from "react-rating-stars-component";
import {
  Address,
  Restaurant,
  RestaurantePhoto,
  RestaurantInfo,
  Title,
  Telefone,
} from "./styles";
import rest from "../../assets/restaurante-fake.png";
import { useState } from "react";
import { Skeleton } from "..";

const RestaurantCard = ({ restaurant, onClick }) => {

  const [ imageLoaded, setImageLoaded ] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf={true}
          edit={false}
          value={restaurant.rating}
          activeColor="#e7711c"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        <Telefone>{restaurant.formatted_phone_number}</Telefone>
      </RestaurantInfo>
      <RestaurantePhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : rest}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do restarurante"
      />
      {!imageLoaded && <Skeleton width='100px' height='100px' />}
    </Restaurant>
  );
};

export default RestaurantCard;
