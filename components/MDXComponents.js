import { Heading } from "@chakra-ui/react";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  h1: (props) => <Heading as="h1" m={8} size="3x1" {...props} />,
};
