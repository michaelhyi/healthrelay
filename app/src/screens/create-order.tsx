import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Layout from "../components/Layout";
import { Button, Menu, Divider, Provider } from "react-native-paper";

const CreateOrder = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <Layout>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={styles.title}>Create Order</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.header}>MRN</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.header}>Priority</Text>

          <View
            style={{
              paddingTop: 50,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Button onPress={openMenu}>Show menu</Button>}
            >
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <Text style={styles.header}>Ordering Physician</Text>
          <Text style={styles.bluetext}>Select Contact</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.header}>Message</Text>
          <TextInput multiline style={styles.message} />
        </View>
      </Layout>
    </Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  header: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#999999",
  },
  bluetext: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#59A5D8",
  },
  input: {
    marginTop: 15,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  message: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "black",
    height: 150,
  },
});

export default CreateOrder;
