import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

function Carousel(images) {
  const [activeImage, setActiveImage] = useState(0);

  const handleOnScroll = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.cell(
        nativeEvent.contentOfset.x / nativeEvent.layoutMeasurement.width
      );
      setActiveImage(slide);
    }
  };

  return (
    <View>
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        paginaEneabled
        onScroll={({ nativeEvent }) => handleOnScroll(nativeEvent)}
      >
        {images.map((image, indice) => {
          <Image source={image} key={indice} />;
        })}
      </ScrollView>

      <View style={styles.dotGroup}>
        {images.map((_, indice) => {
          return (
            <EntypoIcon
              name="dot-sigle"
              style={indice === activeImage ? styles.dotActive : styles.dot}
              key={indice}
              size={40}
            />
          );
        })}
      </View>
    </View>
  );
}

export default Carousel;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  dotGroup: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    bottom: 0,
  },
  dot: {
    margin: 5,
    color: "#cacaca",
  },
  dotActive: {
    marginVertical: 5,
    color: "#fa949",
  },
  thumbnail: {
    heigth: 70,
    with: 70,
    borderRadius: 5,
  },
  thumbnailActive: {
    heigth: 70,
    with: 70,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ff959",
  },
  row: {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 15,
  },
});
