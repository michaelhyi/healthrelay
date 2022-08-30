import React, { useContext } from "react";
import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import { useReadRecentContactsQuery } from "../generated/graphql";
import Context from "../utils/context";
import Contact from "./Contact";
import SectionHeader from "./SectionHeader";

interface Props {
  profession: string;
  id: number;
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const RecentContactsSection: React.FC<Props> = ({
  profession,
  id,
  navigation,
}) => {
  const { user } = useContext(Context);
  const [{ data, fetching }] = useReadRecentContactsQuery({
    variables: { id: user.id, profession: user.profession },
  });

  if (fetching) return <ActivityIndicator />;

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
        data={data?.readRecentContacts}
        renderItem={({ item }) => (
          <>
            {user.profession === "Radiologist" && (
              <Contact
                id={item.orderingPhysicianId}
                navigation={navigation}
                firstName={item.orderingPhysician.firstName!}
                lastName={item.orderingPhysician.lastName!}
                profession={item.orderingPhysician.profession!}
                organization={item?.orderingPhysician.organization!}
              />
            )}
            {user.profession === "Ordering Physician" && (
              <Contact
                id={item.radiologistId}
                navigation={navigation}
                firstName={item.radiologist.firstName!}
                lastName={item.radiologist.lastName!}
                profession={item.radiologist.profession!}
                organization={item?.radiologist.organization!}
              />
            )}
          </>
        )}
      />
    </View>
  );
};

export default RecentContactsSection;
