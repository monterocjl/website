import { Box } from "@chakra-ui/react";
import {
  SiNotion,
  SiShopify,
  SiWordpress,
  SiAngularuniversal,
} from "react-icons/si";
import SingleService from "./SingleService/SingleService";

export default function Services() {
  return (
    <>
      <Box w='100%'>
        <Box
          textAlign='center'
          fontSize={{ base: "37px", md: "45px" }}
          fontWeight='bold'
          pt={7}
          pb={8}
        >
          Services
        </Box>
        <SingleService
          start={1}
          title='Shopify'
          subtitle='I create your e-commerce in'
          logo={SiShopify}
          Content={Shopify}
          height='340px'
        />
        <SingleService
          start={1.5}
          title='Woocommerce'
          subtitle='I create your e-commerce in'
          logo={SiWordpress}
          Content={Woocommerce}
          height='412px'
        />
        <SingleService
          start={2}
          title='Notion'
          subtitle='A website you can manages from'
          logo={SiNotion}
          Content={Notion}
          height='560px'
        />
        <SingleService
          start={3}
          title='Website'
          subtitle='I create and manages your'
          logo={SiAngularuniversal}
          Content={Website}
          height='370px'
        />
      </Box>
    </>
  );
}

export function Shopify() {
  return (
    <>
      <Box>
        <Box
          as='h3'
          fontWeight='bold'
          fontSize={{ base: "18px", md: "22px" }}
          color={{ base: "#0bcd8b", md: "white" }}
        >
          Your e-commerce in Shopify
        </Box>
        <Box
          as='p'
          fontWeight='normal'
          mt={{ base: 7, md: 5 }}
          w={{ base: "100%", md: "75%" }}
          fontSize={{ base: "18px", md: "20px" }}
        >
          I&apos;ll create your e-commerce on Shopify so you can manage it
          intuitively thanks to all the tools and great community behind
          Shopify.
        </Box>
        <Box
          as='p'
          fontWeight='normal'
          mt={4}
          w={{ base: "100%", md: "75%" }}
          fontSize={{ base: "18px", md: "20px" }}
        >
          You will always be able to consult me about any question that comes up
          when you manage your store.
        </Box>
      </Box>
    </>
  );
}

export function Woocommerce() {
  return (
    <>
      <Box>
        <Box
          as='h3'
          fontWeight='bold'
          fontSize={{ base: "18px", md: "22px" }}
          color={{ base: "#0bcd8b", md: "white" }}
          maxW='80%'
          mt='-10px'
        >
          Your e-commerce in Woocommerce
        </Box>
        <Box
          as='p'
          fontWeight='normal'
          mt={{ base: 7, md: 5 }}
          w={{ base: "100%", md: "75%" }}
          fontSize={{ base: "18px", md: "20px" }}
        >
          Woocommerce is a Wordpress plugin for creating professional
          e-commerce. It is cheaper than Shopify as you don&apos;t have to pay a
          monthly fee. The admin panel is not as intuitive as Shopify, but I
          will teach you how to use it and you will see that it is not
          complicated.
        </Box>
        <Box
          as='p'
          fontWeight='normal'
          mt={4}
          w={{ base: "100%", md: "75%" }}
          fontSize={{ base: "18px", md: "20px" }}
        >
          You can always write me to help you with any task or any doubt that
          comes up when managing your store.
        </Box>
      </Box>
    </>
  );
}

export function Notion() {
  return (
    <>
      <Box>
        <Box
          as='h3'
          fontWeight='bold'
          fontSize={{ base: "18px", md: "22px" }}
          color={{ base: "#0bcd8b" }}
          maxW='70%'
          mt='-10px'
        >
          Website you can manages from Notion
        </Box>
        <Box
          as='p'
          fontWeight='normal'
          mt={{ base: 7, md: 5 }}
          w={{ base: "100%", md: "75%" }}
          fontSize={{ base: "18px", md: "20px" }}
        >
          This option is{" "}
          <span style={{ color: "#0bcd8b", fontWeight: "bold" }}>the best</span>{" "}
          for blogs, business websites, Gumroad products or any other digital
          product. How does it work? I take care of creating an amazing website
          that will be connected to your Notion account (the best platform
          all-in-one workspace), from Notion you will be able to update the
          content of the website super fast and as many times as you want. In
          addition, you will be able to create all the publications you want for
          your blog and they will appear on your website automatically.
        </Box>
        <Box
          as='p'
          fontWeight='normal'
          mt={4}
          w={{ base: "100%", md: "75%" }}
          fontSize={{ base: "18px", md: "20px" }}
        >
          In contrast to Wordpress, this alternative makes your website very
          fast and, consequently, the user will have a better experience.
        </Box>
      </Box>
    </>
  );
}

export function Website() {
  return (
    <>
      <Box>
        <Box
          as='h3'
          fontWeight='bold'
          fontSize={{ base: "18px", md: "22px" }}
          color={{ base: "#0bcd8b", md: "white" }}
          maxW='70%'
          mt='-10px'
        >
          Website managed for me
        </Box>
        <Box
          as='p'
          fontWeight='normal'
          mt={{ base: 7, md: 5 }}
          w={{ base: "100%", md: "75%" }}
          fontSize={{ base: "18px", md: "20px" }}
        >
          In contrast to the other alternatives. This option is ideal for
          companies or individuals who do not want to manage their website from
          an administrative panel, but I fulfill the role of developer and
          manager of the website. For example, when the client wants to make a
          change, he will tell me what he wants to change and I will take care
          of the requested updates.
        </Box>
      </Box>
    </>
  );
}
