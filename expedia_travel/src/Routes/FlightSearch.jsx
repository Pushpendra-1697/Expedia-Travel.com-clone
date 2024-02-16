import React, { useState } from "react";
import { useEffect } from "react";
import SearchResults from './SearchResults';
import { Button, Heading, Input, Text, Table, Thead, Tr, Th, Tbody, Box, TableContainer } from '@chakra-ui/react';

export const fetchData = async () => {
  try {
    let res = await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`);
    res = await res.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

function FlightSearch() {
  const [data, setData] = useState(null);
  const [state, setState] = useState('');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hadleChange = (e) => {
    const { value, placeholder } = e.target;
    setState({ ...state, [placeholder]: value })
  };

  const handleSearch = () => {
    const { Source, Destination } = state;
    let filteredFlights = data.filter((ele) => {
      return ele.source === Source && ele.destination === Destination;
    });
    setFilter(filteredFlights);
  };
  return (
    <Box>
      <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" w={{ base: '300px', '2xl': '600px', xl: '600px', lg: '600px', sm: '500px' }} m="auto" mb={"3%"}>
        <section>
          <Heading color={"green"}>Flight Search</Heading>
          <br />
          <Input color={"green"} w={{base:'70%', '2xl':"40%", xl:"40%", lg:"40%", sm:'50%'}} data-testid="source-input" placeholder="Source" onChange={hadleChange} />
          <br /> <br />
          <Input color={"green"} w={{base:'70%', '2xl':"40%", xl:"40%", lg:"40%", sm:'50%'}} data-testid="destination-input" placeholder="Destination" onChange={hadleChange} />
          <br /> <br />
          <Button color={"white"} bg="blue" mb={'3%'} onClick={handleSearch} data-testid="search-button">Search</Button>
        </section>
      </Box>
      {state === '' || filter.length === 0 ? <Text color={"red"} fontSize="24px">No Flights Found</Text> :
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th color={"green"} fontSize="21px">SOURCE</Th>
                <Th color={"green"} fontSize="21px">DESTINATION</Th>
                <Th color={"green"} fontSize="21px">DEPARTURE</Th>
                <Th color={"green"} fontSize="21px">DURATION</Th>
                <Th color={"green"} fontSize="21px">ARRIVAL</Th>
                <Th color={"green"} fontSize="21px">PRICE</Th>
                <Th color={"green"} fontSize="21px">BOOKING</Th>
              </Tr>
            </Thead>
            <Tbody data-testid="flight-results">
              {filter.map((ele, index) =>
                <SearchResults key={index} departure={ele.departure} duration={ele.duration} arrival={ele.arrival} price={ele.price} destination={ele.destination} source={ele.source} />
              )}
            </Tbody>
          </Table>
        </TableContainer>
      }
    </Box>
  );
}

export default FlightSearch;
