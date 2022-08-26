import React from "react";
import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import { useReadUserQuery } from "../generated/graphql";
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
  const renderItem: React.FC<ItemProps> = ({ item }) => {
    const [{ data, fetching }] = useReadUserQuery({
      variables: { id: item.orderingPhysicianId },
    });

    if (fetching) return <ActivityIndicator />;

    return (
      <Contact
        id={data?.readUser.id!}
        navigation={navigation}
        firstName={data?.readUser.firstName!}
        lastName={data?.readUser.lastName!}
        profession={data?.readUser.profession!}
        organization={data?.readUser.organization!}
      />
    );
  };

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
