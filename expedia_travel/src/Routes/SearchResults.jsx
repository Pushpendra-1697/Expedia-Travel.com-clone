import { Tr, Td, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SearchResults = (props) => {
  const { departure, duration, arrival, price, destination, source } = props;
  const navigate = useNavigate();
  
  return (
    <Tr>
      <Td>{source}</Td>
      <Td>{destination}</Td>
      <Td>{departure}</Td>
      <Td>{duration}</Td>
      <Td>{arrival}</Td>
      <Td>{price}</Td>
      <Td><Button variant={"outline"} color={"black"} bg="blue" m={"40px"} onClick={() => navigate('/success')}>BOOK</Button></Td>
    </Tr>
  );
};
export default SearchResults;
