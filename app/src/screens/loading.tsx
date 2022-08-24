import { ActivityIndicator } from "react-native";
import Layout from "../components/Layout";

const Loading = () => {
  return (
    <Layout>
      <ActivityIndicator
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </Layout>
  );
};

export default Loading;
