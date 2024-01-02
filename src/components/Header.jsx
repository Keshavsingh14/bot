import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Header = () => {
  return (
	<Flex w="100%">
  	<Avatar size="lg" name="Keshav Shakti Singh" src="https://sportsmax.tv/media/k2/items/cache/d42fc8e0e1e897a820a998d2b08c233d_XL.jpg">
    	<AvatarBadge boxSize="1.25em" bg="green.500" />
  	</Avatar>
  	<Flex flexDirection="column" mx="5" justify="center">
    	<Text fontSize="lg" fontWeight="bold">
      	Keshav Shakti Singh
    	</Text>
    	<Text color="green.500">Online</Text>
  	</Flex>
	</Flex>
  );
};

export default Header;