/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
// eslint-disable-next-line import/no-anonymous-default-export
import { Heading, Text } from "@chakra-ui/react";

export default {
  h2: (props) => (
    <Heading
      as="h2"
      fontSize={["20px", "23px"]}
      fontWeight={"700"}
      mb={1}
      mt={7}
      {...props}
    />
  ),

  p: (props) => (
    <Text 
      fontSize={["17px", "20px"]}
      mb={'6'}
      {...props} 
    />),
};
