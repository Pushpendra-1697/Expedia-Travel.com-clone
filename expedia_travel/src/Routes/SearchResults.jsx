import { Tr, Td } from "@chakra-ui/react";

const SearchResults = (props) => {
  const { departure, duration, arrival, price, destination, source } = props;
  return (
    <Tr>
      <Td>{source}</Td>
      <Td>{destination}</Td>
      <Td>{departure}</Td>
      <Td>{duration}</Td>
      <Td>{arrival}</Td>
      <Td>{price}</Td>
    </Tr>
  );
};
export default SearchResults;
