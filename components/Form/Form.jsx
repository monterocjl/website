import {
  Box,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),

    onSubmit: async (formData) => {
      const JSONdata = JSON.stringify(formData);
      const endpoint = "https://juanmontero.co/api/leads";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      await fetch(endpoint, options);
    },
  });

  return (
    <>
      <Box
        w='100%'
        h='500px'
        fontSize='25pxs'
        maxW='1200px'
        pt={5}
        px={{ base: "1rem", md: "0px" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            display='flex'
            gridGap={6}
            mb={3}
            flexDirection={{ base: "column", md: "row" }}
          >
            <FormControl
              isInvalid={formik.errors.identifier}
              isRequired={formik.errors.identifier}
            >
              <Input
                id='identifier'
                name='identifier'
                type='text'
                placeholder='Your email'
                onChange={formik.handleChange}
                h={{ base: "50px", md: "60px" }}
                fontSize={{ base: "20px", md: "25px" }}
                _focus={{ borderColor: "#0bc58f" }}
              />
              <FormErrorMessage
                color='white'
                fontStyle='italic'
                mt='3px'
                display='none'
              >
                {formik.errors.identifier}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.product}
              isRequired={formik.errors.product}
            >
              <Select
                id='product'
                name='product'
                type='select'
                onChange={formik.handleChange}
                placeholder='Select a service'
                h={{ base: "50px", md: "60px" }}
                fontSize={{ base: "20px", md: "25px" }}
                _focus={{ borderColor: "#0bc58f" }}
              >
                <option value='Shopify'>E-commerce in Shopify</option>
                <option value='Woocommerce'>E-commerce in Woocommerce</option>
                <option value='Notion'>Website managed from Notion</option>
                <option value='Managed for me'>Website managed for me</option>
                <option value='Not sure'>Not sure yet</option>
              </Select>
              <FormErrorMessage
                color='white'
                fontStyle='italic'
                mt='3px'
                display='none'
              >
                {formik.errors.product}
              </FormErrorMessage>
            </FormControl>
          </Box>

          <FormControl
            isInvalid={formik.errors.message}
            isRequired={formik.errors.message}
          >
            <Textarea
              id='message'
              name='message'
              type='text'
              mt={3}
              onChange={formik.handleChange}
              resize='none'
              placeholder='Tell me some details about your project or any questions you have about my services.'
              fontSize={{ base: "20px", md: "25px" }}
              h='200px'
              _focus={{ borderColor: "#0bc58f" }}
            />

            <FormErrorMessage
              color='white'
              fontStyle='italic'
              mt='3px'
              display='none'
            >
              {formik.errors.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            mt={5}
            w='100%'
            bgImage='linear-gradient(253deg, #0095a6 0%, #0dd587 100%)'
            _hover={{
              bgImage: "linear-gradient(253deg, #0dd587 0%, #0095a6 100%)",
            }}
            type='submit'
            h={{ base: "50px", md: "60px" }}
            fontSize={{ base: "20px", md: "25px" }}
            color='black'
            fontWeight='bold'
          >
            Send message
          </Button>
        </form>
      </Box>
    </>
  );
}

function initialValues() {
  return {
    identifier: "",
    product: "",
    message: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string().email(true).required("The email is required."),
    product: Yup.string().required("The password is required."),
    message: Yup.string().required("The password is required."),
  };
}
