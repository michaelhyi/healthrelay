import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import Contact from "./Contact";
import SectionHeader from "./SectionHeader";

interface ContactProps {
  id: number;
  radiologistId: number;
  orderingPhysicianId: number;
}

interface Props {
  profession: string;
  id: number;
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
  data: ContactProps[];
}

interface ItemProps {
  item: ContactProps;
}

const RecentContactsSection: React.FC<Props> = ({
  profession,
  id,
  navigation,
  data,
}) => {
  const renderItem: React.FC<ItemProps> = ({ item }) => (
    <Contact navigation={navigation} id={item.id} item={item} />
  );

  return (
    <View
      style={{ marginTop: 24, height: Dimensions.get("window").height / 2.5 }}
    >
      <SectionHeader
        profession={profession}
        navigation={navigation}
        text="Contacts"
        id={id}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RecentContactsSection;
