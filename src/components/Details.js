import React, { useContext } from "react";
import { Text } from "react-native";
import { RestaurantContext } from "../../App";

function Details() {
  const { selectedRestaurant } = useContext(RestaurantContext);
  return <Text>{selectedRestaurant.name}</Text>;
}

export default Details;
