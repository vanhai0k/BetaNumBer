import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  GestureHandlerRootView,
  TextInput,ScrollView,TouchableOpacity
} from "react-native";
import React, { useState } from "react";


const InfoBeta = ({route,navigation}) => {

  const [id, setid] = useState(route.params.id)
  const [title, settitle] = useState(route.params.title)
  const [note, setnote] = useState(route.params.note)
  const [evaluate, setevaluate] = useState(route.params.evaluate)
  const [time, settime] = useState(route.params.time)
  const [image, setimage] = useState(route.params.image)
  const [daodien, setdaodien] = useState(route.params.daodien)
  const [dienvien, setdienvien] = useState(route.params.dienvien)
  const [theloai, settheloai] = useState(route.params.theloai)
  const [ngaychieu, setngaychieu] = useState(route.params.ngaychieu)

  const quoaylai = () =>{
    navigation.navigate('List')
  }

  return (
    
    <View style={styles.container}>
    <View style={{height:'55%',}}>
    <Image source={{
              uri: "http://192.168.1.11:3000/" + image,
            }}
    style={{width:'100%',height:360, position:'absolute',borderBottomRightRadius:90}} />
{/* back     */}
<TouchableOpacity onPress={quoaylai}>
<View style={{flexDirection:'row',position:'relative',top:'10%',left:10}}>
        <Image source={require('../assets/back.png')} 
        style={{width:30,height:30}} />
        <Text style={{color:'#E1DBDB',fontSize:19}}>Danh sách</Text>
</View>
</TouchableOpacity>
{/* ----- */}
    <View style={{flexDirection:'row',position:'relative',left:'3%',top:'73%',
                  }}>
    <Image source={{
              uri: "http://192.168.1.11:3000/" + image,
            }}
    style={{width:'28%',height:140,borderRadius:3,
    resizeMode:"stretch"}}/>
    <Text style={{fontSize:20,color:'black',fontWeight:'bold',
    position:'relative',top:'15%',left:'10%',width:'61%',textAlign:'center'}}>
        {title} </Text>
    </View>
    </View>

    <View style={{width:'100%',flexDirection:'row',marginLeft:20,marginTop:19,}}>
      <Text style={{width:'40%',fontSize:17,color:'black',fontWeight:'bold',}}>
       ĐẠO DIỄN
      </Text>
      <Text style={{width:'auto',fontSize:15,color:'black',marginLeft:20,marginRight:8,}}
      >
      {daodien} 
      </Text>
    </View>

    <View style={{width:'100%',flexDirection:'row',marginLeft:20,marginTop:10,}}>
      <Text style={{width:'40%',fontSize:17,color:'black',fontWeight:'bold'}}>
       DIỄN VIÊN
      </Text>
      <Text style={{fontSize:15,color:'black',marginLeft:20,marginRight:8,width:'48%'}}>
      {dienvien} 
      </Text>
    </View>

    <View style={{width:'100%',flexDirection:'row',marginLeft:20,marginTop:10,}}>
      <Text style={{width:'40%',fontSize:17,color:'black',fontWeight:'bold'}}>
       THỂ LOẠI
      </Text>
      <Text style={{fontSize:15,color:'black',marginLeft:20,marginRight:8}}>
       {theloai}
      </Text>
    </View>

    <View style={{width:'100%',flexDirection:'row',marginLeft:20,marginTop:10,}}>
      <Text style={{width:'40%',fontSize:17,color:'black',fontWeight:'bold'}}>
       THỜI LƯỢNG
      </Text>
      <Text style={{fontSize:15,color:'black',marginLeft:20,marginRight:8}}>
       {time} Phút
      </Text>
    </View>

    <View style={{width:'100%',flexDirection:'row',marginLeft:20,marginTop:10,}}>
      <Text style={{width:'40%',fontSize:17,color:'black',fontWeight:'bold'}}>
       NGÀY KHỞI CHIẾU
      </Text>
      <Text style={{fontSize:15,color:'black',marginLeft:20,marginRight:8,marginBottom:20}}>
       {ngaychieu}
      </Text>
    </View>

    <View style={{backgroundColor:'#DDDDDD',height:1.8,marginLeft:20,marginRight:20}}>
     <Text>
      -
     </Text>
    </View>
    <View>
      <ScrollView style={{height:170,}}>
          <Text style={{margin:20}}>
          {note}
          </Text>
      </ScrollView>
    </View>
    </View>
    
  );
};
export default InfoBeta;
const styles = StyleSheet.create({
  container: {

  },
  
});
