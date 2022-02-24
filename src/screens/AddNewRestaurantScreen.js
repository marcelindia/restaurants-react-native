import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation, useNavigator } from "@react-navigation/native";

function AddNewRestaurantScreen() {
  // const [restaurantName, setRestaurantName] = useState();
  // const [address, setAddress] = useState();
  // const [photo, setPhoto] = useState();
  // const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [newRestaurant, setNewRestaurant] = useState();

  const navigation = useNavigation();

  //   const newRestaurant = {
  //     name: restaurantName,
  //     address: address,
  //     numRatings: rating,
  //     photoUrl:
  //       "https://d1ralsognjng37.cloudfront.net/1b911cb9-eb7a-4c2a-aacc-be54cf3cd7ea.jpeg",
  //     rating: 3.75,
  //   };

  useEffect(() => {
    if (newRestaurant.address && newRestaurant.name) {
      setBtnDisabled(false);
    }
  }, [newRestaurant]);
  const sendNewRestaurantInfo = () => {
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    })
      .then(() => alert("New Restaurant Added"))
      .then(() => navigation.navigate("Home"))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <View>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(userText) =>
            setNewRestaurant({ ...newRestaurant, name: userText })
          }
        />
        <Input
          placeholder="Photo"
          keyboardType="url"
          onChangeText={(text) => ({ ...newRestaurant, photo: text })}
        />
        <Input
          placeholder="Address"
          onChangeText={(text) => ({ ...newRestaurant, address: text })}
        />
        <Input
          placeholder="Rating"
          keyboardType="numeric"
          onChangeText={(text) => ({ ...newRestaurant, rating: text })}
        />
      </View>
      <Button
        containerStyle={{
          alignSelf: "center",
          width: 200,
          marginHorizontal: "50%",
          marginVertical: 10,
          borderRadius: 20,
        }}
        title="Create New Restaurant"
        buttonStyle={{ backgroundColor: "black" }}
        onPress={sendNewRestaurantInfo}
        disabled={btnDisabled}
      />
    </>
  );
}

export default AddNewRestaurantScreen;
