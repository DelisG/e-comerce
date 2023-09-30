import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import thumbnail1 from "../../assets/images/modelo_1.png";
import thumbnail2 from "../../assets/images/modelo_2.png";
import thumbnail3 from "../../assets/images/modelo_3.png";
import thumbnail4 from "../../assets/images/modelo_4.png";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const images = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <ScrollView
          horizontal
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          paginaEneabled
          onScroll={({ nativeEvent }) => handleOnScroll(nativeEvent)}
        >
          {images.map((image, indice) => {
            return <Image source={image} key={indice} />;
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

        <View style={styles.row}>
          {imagens.map((image, indice) => {
            return (
              <Pressable onPress={() => {}}>
                <Image
                  source={image}
                  key={indice}
                  styles={[
                    indice === activeImage ? style.thumbnail : style.border,
                  ]}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScrollView>
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
