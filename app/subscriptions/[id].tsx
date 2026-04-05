import { useLocalSearchParams, Link } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription Details Screen: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
};

export default SubscriptionsDetails;
