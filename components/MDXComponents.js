/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
// eslint-disable-next-line import/no-anonymous-default-export
import { Heading, Text } from "@chakra-ui/react";

export default {
  h1: (props) => (
    <Heading
      as="h1"
      fontSize={["30px", "40px"]}
      fontWeight={"bold"}
      mb={8}
      {...props}
    />
  ),

  h2: (props) => (
    <Heading
      as="h2"
      fontSize={["20px", "25px"]}
      fontWeight={"600"}
      mb={2}
      {...props}
    />
  ),

  p: (props) => <Text fontSize={["18px", "21px"]} {...props} />,
};
