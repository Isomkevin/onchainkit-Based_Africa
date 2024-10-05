import { Box, VStack, IconButton, Icon, Text, HStack } from "@chakra-ui/react";
import { FiHome, FiSettings, FiShuffle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";

export default function Sidebar() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <BottomNavbar />;
  }

  return (
    <Box
      as="nav"
      position="fixed"
      left={0}
      top={0}
      w="64px"
      h="100vh"
      bgGradient="linear(to-b, #1F1C2C, #928DAB)"
      boxShadow="2xl"
      zIndex={10}
      paddingTop={5}
      display={isMobile ? "none" : "block"}
    >
      <VStack spacing={5}>
        <SidebarItem to="/" icon={FiHome} label="Home" />
        <SidebarItem to="/swap" icon={FiShuffle} label="Swap" />
        <SidebarItem to="/settings" icon={FiSettings} label="Settings" />
      </VStack>
    </Box>
  );
}

function SidebarItem({ to, icon, label }: { to: string; icon: any; label: string }) {
  return (
    <Link to={to}>
      <IconButton
        as="div"
        aria-label={label}
        icon={<Icon as={icon} />}
        size="lg"
        variant="ghost"
        color="white"
        _hover={{ bg: "whiteAlpha.300", transition: "0.3s" }}
        _focus={{ boxShadow: "0px 0px 10px 0px #fff" }}
      />
      <Text color="white" fontSize="xs" textAlign="center">
        {label}
      </Text>
    </Link>
  );
}

function BottomNavbar() {
  return (
    <HStack
      as="nav"
      position="fixed"
      bottom={0}
      left={0}
      w="100%"
      h="64px"
      bgGradient="linear(to-t, #1F1C2C, #928DAB)"
      boxShadow="lg"
      justifyContent="space-around"
      zIndex={10}
    >
      <SidebarItem to="/" icon={FiHome} label="Home" />
      <SidebarItem to="/swap" icon={FiShuffle} label="Swap" />
      <SidebarItem to="/settings" icon={FiSettings} label="Settings" />
    </HStack>
  );
}
