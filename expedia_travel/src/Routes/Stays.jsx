import StayItem from "./StayItem";
import { addStays, deleteStays, getStays, ToggleStatus } from "./api";
import { useState, useEffect } from "react";
import { Container, Spinner, Image, Box, Heading, Text, Button, Input, Select } from "@chakra-ui/react";
import { fetchProduct } from "./fetchProduct";
import Footer from '../Components/Footer';

let totalPages = 10;
const Stays = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(3);
  const [tempo, setTempo] = useState('');


  const handleGetStays = (page, limit, value) => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    getStays({
      page: page,
      limit: limit,
      sort: "price",
      order: value
    }).then((res) => {
      setData(res.data);
      setLoading(false);
    }).catch((err) => {
      setError(true);
      setLoading(false);
    }).finally(() => {
      setLoading(false);
    })
  }
  useEffect(() => {
    handleGetStays(page, limit)
  }, [page, limit]);

  const handleAddStays = (data) => {
    addStays(data)
    alert(`New Product has been added`);
    handleGetStays(page, limit);
  };

  const handleDeleteStays = (id) => {
    deleteStays(id);
    alert(`A Product has been deleted`);
    handleGetStays(page, limit);
  };
  const handleToggleStays = (id, newStatus) => {
    ToggleStatus(id, newStatus);
    alert(`Status has been Toggled`);
    handleGetStays(page, limit);
  };

  const handlePage = (val) => {
    let value = val + page;
    setPage(value);
  };

  const handleChange = (e) => {
    let { value } = e.target;
    handleGetStays(page, limit, value);
  }

  const temp = (query) => {
    setTempo(query);
  }
  const handleSearch = () => {
    temp(query)
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    fetchProduct(query, page, limit)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setQuery("");
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      {error && <h1>Something Went Wrong Please Check Onces😒</h1>}
      <StayItem handleAddStays={handleAddStays} />

      <Select color={"green"} w="200px" onChange={handleChange} m="auto" mt={"3%"} mb="10px">
        <option value={''}>Sort By Price</option>
        <option value={"asc"}>Low_to_High</option>
        <option value={"desc"}>High_to_Low</option>
      </Select>

      <Container display={"flex"}>
        <Box display={"flex"} mt="13%">
          <label>Filter: </label>
          <Input color={"green"} w="200px" onChange={(e) => setQuery(e.target.value)} placeholder="Search Location" type={"text"} value={query} ></Input>
          <Button ml={"10px"} disabled={loading} onClick={handleSearch} color="green">{loading ? "Loading" : "Search"}</Button>
        </Box>
        <Container className="mapouter"><Box className="gmap_canvas"><iframe loading="eager" src={`https://maps.google.com/maps?q=${tempo}&t=&z=13&ie=UTF8&iwloc=&output=embed`} width="250" height="150" id="gmap_canvas" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://2piratebay.org"></a><a href="https://www.embedgooglemap.net">embedgooglemap.net</a></Box></Container>
      </Container>


      <Container mt={"3%"}>
        <Box display={"flex"} justifyContent="space-between">
          <Button onClick={() => setPage(1)}>First</Button>
          <Button disabled={page <= 1} onClick={() => handlePage(-1)}>PREV</Button>
          <Button disabled>{page}</Button>
          <Button disabled={page === totalPages} onClick={() => handlePage(1)}>NEXT</Button>
          <Button onClick={() => setPage(totalPages)}>Last</Button>
          <Select w="100px" onChange={(e) => setLimit(e.target.value)}>
            <option value={3}>3</option>
            <option vlaue={6}>6</option>
            <option value={9}>9</option>
          </Select>
        </Box>
      </Container>
      {loading && <Spinner color="red.500" size={"lg"} />}
      <Container mt={"5%"} mb="10%" w={"100%"} display={"grid"} gridTemplateColumns={"repeat(2,1fr)"} gap="10%">
        {data && data.map((ele) =>
          <Box key={ele.id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
            <Image w={"100%"} h="200px" borderRadius="10px" src={ele.image_url}></Image>
            <Heading fontFamily={"heading"} mt="10%" fontSize="18px">{ele.name}</Heading>
            <Text m="10px 0" color={"green"}>{ele.location}</Text>
            <Text color={"yellow.900"} mb="10px">{`${ele.rating}/10`}</Text>
            <Box display={"flex"} justifyContent="space-around" mb={"10%"}>
              <Text>{ele.isStatus ? <Text color={"green"}>Available</Text> : <Text color={"red"}>Not Available</Text>}</Text>
              <Text color={"goldenrod"} fontFamily="inherit" fontSize={"21px"}>{`₹${ele.price}/night`}</Text>
            </Box>
            <Button m={"1%"} mb="3%" onClick={() => handleToggleStays(ele.id, !ele.isStatus)}>Toggle</Button>
            <Button m={"1%"} mb="3%" onClick={() => handleDeleteStays(ele.id)}>Delete</Button>
          </Box>
        )}
      </Container>
      <hr></hr>
      <Footer />
    </>
  );
}

export default Stays;









//google map ---- take help from notes-----make in Stays Page bcz here You got locaton After filter;
//if this filter is not working then use filter of classNotes
//add to Cart page
//checkOut page