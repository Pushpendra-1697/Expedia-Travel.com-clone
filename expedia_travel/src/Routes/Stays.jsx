import StayItem from "./StayItem";
import { addStays, deleteStays, getStays, ToggleStatus } from "./api";
import { useState, useEffect, useContext } from "react";
import { Container, Spinner, Image, Box, Heading, Text, Button, Input, Select } from "@chakra-ui/react";
import { fetchProduct } from "./fetchProduct";
import { CardContext } from '../Context/CartContext/CartContextProvider';
import { addToCart } from '../Context/CartContext/action';
import { AiFillDelete } from 'react-icons/ai';
import { BsToggleOn } from 'react-icons/bs';

let totalPages = 10;
const Stays = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(3);
  const [tempo, setTempo] = useState('');
  const { state, dispatch } = useContext(CardContext);

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

  const handleAddToCart = (ele) => {
    let cartAdd = false;
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === ele.id) {
        alert(`Product Added Already!`);
        cartAdd = true;
        break;
      }
    }
    if (cartAdd === false) {
      alert(`Product Added Successfully!`);
      dispatch(addToCart(ele));
    }
  };

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
    <Box>
      {error && <h1>Something Went Wrong Please Check Onces😒</h1>}
      <Box mb={"10px"}>
        <StayItem handleAddStays={handleAddStays} />
      </Box>
      <hr />

      <Select color={"green"} w="200px" onChange={handleChange} m="auto" mt={"3%"} mb="10px">
        <option value={''}>Sort By Price</option>
        <option value={"asc"}>Low_to_High</option>
        <option value={"desc"}>High_to_Low</option>
      </Select>

      <Container display={"flex"} flexDirection={{ base: 'column', '2xl': 'row', xl: 'row', lg: 'row', sm: 'column' }} gap={'10px'}>
        <Box display={"flex"} mt="13%">
          <Input color={"green"} w="200px" onChange={(e) => setQuery(e.target.value)} placeholder="Search Location" type={"text"} value={query} ></Input>
          <Button variant={"outline"} ml={"10px"} disabled={loading} onClick={handleSearch} color="green">{loading ? "Loading" : "Search"}</Button>
        </Box>
        <Container className="mapouter">
          <Box className="gmap_canvas">
            <iframe loading="eager" src={`https://maps.google.com/maps?q=${tempo}&t=&z=13&ie=UTF8&iwloc=&output=embed`} width="250" height="150" id="gmap_canvas" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
            <a href="https://2piratebay.org"></a>
            <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          </Box>
        </Container>
      </Container>

      <Container mt={"3%"}>
        <Box display={"flex"} justifyContent="space-between" color={"green"}>
          <Button variant={"outline"} onClick={() => setPage(1)}>First</Button>
          <Button variant={"outline"} disabled={page <= 1} onClick={() => handlePage(-1)}>PREV</Button>
          <Button variant={"outline"} color={"red"} disabled>{page}</Button>
          <Button variant={"outline"} disabled={page === totalPages} onClick={() => handlePage(1)}>NEXT</Button>
          <Button variant={"outline"} onClick={() => setPage(totalPages)}>Last</Button>
          <Select w="100px" onChange={(e) => setLimit(e.target.value)}>
            <option value={3}>3</option>
            <option vlaue={6}>6</option>
            <option value={9}>9</option>
          </Select>
        </Box>
      </Container>
      {loading && <Spinner color="red.500" size={"lg"} />}
      <Box mt={"2%"} display={"grid"} gridTemplateColumns={{ base: "repeat(1,1fr)", '2xl': 'repeat(3,1fr)', xl: 'repeat(3,1fr)', lg: "repeat(3,1fr)", sm: "repeat(2,1fr)" }} gap="20px" p='20px'>
        {data && data.map((ele) =>
          <Box key={ele.id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" pb={'5px'}>
            <Image w="100%" height={"300px"} src={ele.image_url}></Image>
            <Heading fontFamily={"heading"} mt="10%" fontSize="18px">{ele.name}</Heading>
            <Box display={"flex"} justifyContent="space-around" m="10px">
              <Text m="10px 0" color={"green"}>{ele.location}</Text>
              <Text color={"yellow.900"} mb="10px">{`${ele.rating}/10`}</Text>
            </Box>
            <Box display={"flex"} justifyContent="space-around" mb={"5%"}>
              <Text>{ele.isStatus ? <Text color={"green"}>Available</Text> : <Text color={"red"}>Not Available</Text>}</Text>
              <Text color={"goldenrod"} fontFamily="inherit" fontSize={"21px"}>{`₹${ele.price}/night`}</Text>
            </Box>
            <Button color={"green"} fontSize={"25px"} variant={"outline"} m={"1%"} mb="3%" onClick={() => handleToggleStays(ele.id, !ele.isStatus)}><BsToggleOn /></Button>
            <Button color={"red"} fontSize={"25px"} variant={"outline"} m={"1%"} mb="3%" onClick={() => handleDeleteStays(ele.id)}><AiFillDelete /></Button>
            <Button variant={"outline"} colorScheme="teal" size="md" m={"2% 1%"} onClick={() => handleAddToCart(ele)}>Add To Cart</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Stays;

