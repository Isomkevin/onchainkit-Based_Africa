import React from "react";
import { Link, Box, Flex, Text, Stack, FlexProps } from "@chakra-ui/react";
import WalletSection from "../features/WalletSection";
import Logo from "../features/Logo";

type NavBarProps = FlexProps

const NavBar: React.FC<NavBarProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Flex align="center">
        <Logo
          w={["100px", "120px", "140px", "160px"]}
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

interface MenuItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  to?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuItem: React.FC<MenuItemProps> = ({ children, isLast = false, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

interface MenuLinksProps {
  isOpen: boolean;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[4, 6, 8]}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It works</MenuItem>
        <MenuItem to="/features">Features</MenuItem>
        <MenuItem to="/profile">Your Profile</MenuItem>
        <MenuItem to="#" isLast>
          <WalletSection />
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={[4, 6, 8]}
      bg={["gray.500", "gray.500", "gray.500", "gray.500"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;