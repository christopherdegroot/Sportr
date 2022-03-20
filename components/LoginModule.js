import Link from "next/link";
import { CloseButton, ButtonGroup, Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react";

const LoginModule = (props) => {
  const onClose = props.onClose
  return (
    <>
      <CloseButton onClick={()=>{onClose()}}></CloseButton>
    <VStack>
        <Heading>Please Log In</Heading>
            <SimpleGrid columns={1} rowGap={6} w='full'>
              <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder="Email Address" />
                  </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type='password' placeholder="Password" />
                </FormControl>
              </GridItem>
            </SimpleGrid>
            <Link href="/profile">
              <Button w='9em' type='submit' name={'Submit'} variant='outline'>Submit</Button>
            </Link>
          </VStack>
          </>
      )
}

export default LoginModule;