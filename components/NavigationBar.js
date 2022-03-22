import { Box, Flex, Container, colorScheme, HStack, IconButton } from '@chakra-ui/react'
import { SiTinder } from 'react-icons/si';
import { MdOutlineSportsKabaddi, MdPerson} from 'react-icons/md';

const NavigationBar = () => {

  return (
    <>
    <Flex as="footer" position="fixed" bottom="0" w="100%">
      <Box bg='lightblue' w='100%' p={2} px={3}>
        <HStack justify="space-around">
          <IconButton aria-label='Event Feed' icon={<SiTinder/>} size="lg" colorScheme='blue' variant='ghost' />
          <IconButton aria-label='Your Events' icon={<MdOutlineSportsKabaddi boxSize=""/>} size="lg" colorScheme='blue' variant='ghost' />
          <IconButton aria-label='Profile' icon={<MdPerson  />} size="lg" colorScheme='blue' variant='ghost' />
        </HStack>
      </Box>
    </Flex>
   </>
  );
}; 

export default NavigationBar;