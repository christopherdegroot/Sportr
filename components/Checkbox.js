import {
  Checkbox as ChakraCheckbox,
} from "@chakra-ui/react";
const Checkbox = (props) => {
  const {value, sports, onChange} = props

  return (
    <ChakraCheckbox value={value} onChange={() => onChange()}>{value}</ChakraCheckbox>
  )
  
};

export default Checkbox;