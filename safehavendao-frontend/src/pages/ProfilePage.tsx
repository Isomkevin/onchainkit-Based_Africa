import { Box, Heading, Text } from "@chakra-ui/react";
import UserProfileComponent from "../components/features/UserProfile";
export default function ProfilePage() {
  return (
    <Box>
      <Heading>Your Profile</Heading>
      <Text mt={4}>Manage your account and view your wallet details here.</Text>
      <UserProfileComponent />
    </Box>
  );
}
