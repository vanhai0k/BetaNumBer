import {
  View,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native-gesture-handler";
import React, { useState } from "react";
import { API } from "../API/api";
import Swiper from 'react-native-swiper'

const List = (props) => {
  const [dsbeta, setdsbeta] = useState([]);
  const [keySearch, setkeySearch] = useState("");
  const onchangeKeySeach = (value) => setkeySearch(value);

  const [images, setImages] = useState([
    {
      source: require("../assets/bia1.jpg"),
    },
    {
      source:require("../assets/andanh.jpg"),
    },
    {
      source:require("../assets/demon.jpg"),
    },
    {
        source:require("../assets/23.jpg"),
      },
      {
        source:require("../assets/andanh.jpg"),
      },
  ]);

  const loading = () => {
    // Do something to load more data
    getData();
  };

  const getData = async () => {
    fetch(API.get)
      .then((res) => res.json())
      .then((result) => {
        setdsbeta(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      // khi màn hình được hiển thị sẽ gọi vào hàm này
      // gọi hàm load dữ liệu
      getData();
    });
    return unsubscribe;
  }, [props.navigation]);
  const renderBeta = ({ item }) => {

    const infomation = () =>{
        props.navigation.navigate("InfoBeta", {
          id: item._id,
          title: item.title,
          note: item.note,
          image: item.image,
          evaluate: item.evaluate,
          time: item.time,
          daodien: item.daodien,
          dienvien: item.dienvien,
          theloai: item.theloai,
          ngaychieu: item.ngaychieu
        });
  
    }
    return (
      <GestureHandlerRootView>
        <View
          style={{
            width: 124,
            margin: 2,
            height: 200,
            shadowRadius: 20,
            marginBottom: 8,
          }}
        >
          <TouchableOpacity onPress={infomation}>
          <Image
            //   source={require("../assets/bia1.jpg")}
            source={{
              uri: "http://192.168.1.11:3000/" + item.image,
            }}
            style={{
              width: "99%",
              height: 200,
              alignSelf: "center",
              marginTop: 3,
              borderRadius: 3,
              position: "absolute",
            }}
          ></Image>
          </TouchableOpacity>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: "red",
              borderRadius: 20,
              alignSelf: "flex-end",
              position: "relative",
              top: "4%",
              right: "5%",
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                marginTop: 5,
                fontSize: 10,
              }}
            >
              {item.evaluate}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "black",
              textTransform: "capitalize",
              fontWeight: "normal",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            {item.title.slice(0, 17)}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "gray",
              textTransform: "capitalize",
              fontWeight: "normal",
              fontSize: 10,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            {/* {item.time} */}
            {item.time} Phút
          </Text>
        </View>
      </GestureHandlerRootView>
    );
  };

  return (
    <GestureHandlerRootView >
      <View style={{ backgroundColor: "white" }}>
{/* tim kiem */}
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 15,
            margin: 5,
            backgroundColor:'#DDDDDD',
            marginTop: 35,
          }}
        >
          <TextInput
            style={{ flex: 1, marginLeft: 15, }}
            placeholder="Enter your key seach..."
            value={keySearch}
            onChangeText={onchangeKeySeach}
          />
        </View> */}
{/* ------- */}


<View style={{width:'95%',height:110,alignSelf:'center',marginTop:20}}>
        <Swiper
        showsPagination={false}
        autoplay={true}
        loop={true}
        onIndexChanged={(index) => {
        }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            style={styles.image}
            source={image.source}
          />
        ))}
        </Swiper>
        </View>   
 {/* danh sach */}
        <View>
          <FlatList
          style={styles.body}
            data={dsbeta.filter((title) => title.title.search(keySearch) > -1)}
            keyExtractor={(item) => `key-${item._id}`}
            numColumns={3}
            renderItem={renderBeta}
            onEndReached={loading}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};
export default List;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  body: {
    margin: 5,
    height: "83.6%",
    padding: 10,
  },
  cochu: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
  },
  cochu2: {
    fontSize: 20,
    color: "gray",
  },
  cochu1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  loading: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  image: {
    width: '100%',
    height: 110,
    alignSelf:'center',
    borderRadius:10
  },
});
