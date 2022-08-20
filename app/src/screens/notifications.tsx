import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Layout from "../components/Layout";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/styles";
const DATA = [
  {
    title: 'Dr. Brian Wilson has completed Order #43',
    date: 'August 18th, 2022 6:21 PM'
  },
  {
    title: 'Dr. Brian Wilson has completed Order #43',
    date: 'August 18th, 2022 6:21 PM'
  },
  {
    title: 'Dr. Brian Wilson has completed Order #43',
    date: 'August 18th, 2022 6:21 PM'
  },
  {
    title: 'Dr. Brian Wilson has completed Order #43',
    date: 'August 18th, 2022 6:21 PM'
  },
]

interface Props {
  navigation: {
    goBack: () => void;
  };
}


const Item = ({ title, date }) => (
  <View style={{flexDirection: "row", marginTop: 30}}>
    <TouchableOpacity>
      <Ionicons name="person" size={35} color={colors.blue_400} />
    </TouchableOpacity>
    <View style={{justifyContent: "center", marginLeft: 11}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>

  </View>
)

const Notifications: React.FC<Props> = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} />
  )
  return (
    <Layout>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} style={{ marginTop: 36 }} />
        </TouchableOpacity>

      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>
    </Layout>

  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#133C55"
  },
  date: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#386FA4"
  }
})


export default Notifications;
