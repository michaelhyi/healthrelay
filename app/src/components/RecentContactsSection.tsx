import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import Contact from "./Contact";
import SectionHeader from "./SectionHeader";

interface ContactProps {
  id: number;
  secondaryUuid: string;
  firstName: string;
  lastName: string;
  organization: string;
  profession: string;
}

interface Props {
  profession: string;
  uuid: string;
  navigation: {
    navigate: (route: string) => void;
  };
  data: ContactProps[];
}

interface ItemProps {
  item: ContactProps;
}

const RecentContactsSection: React.FC<Props> = ({
  profession,
  uuid,
  navigation,
  data,
}) => {
  const renderItem: React.FC<ItemProps> = ({ item }) => (
    <Contact
      uuid={item.secondaryUuid}
      navigation={navigation}
      id={item.id}
      name={item.firstName + " " + item.lastName}
      profession={item.profession}
      organization={item.organization}
    />
  );

  return (
    <View
      style={{ marginTop: 24, height: Dimensions.get("window").height / 2.5 }}
    >
      <SectionHeader
        profession={profession}
        navigation={navigation}
        text="Contacts"
        uuid={uuid}
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
