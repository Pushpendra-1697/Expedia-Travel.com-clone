import StayItem from "./StayItem";
import { addStays, deleteStays, getStays, ToggleStatus } from "./api";
import { useState, useEffect } from "react";
import { Container, Spinner, Image, Box, Heading, Text, Button } from "@chakra-ui/react";


let totalPages = 10;
const Stays = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



  const handleGetStays = (page, value) => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    getStays({
      page: page,
      limit: 10,
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
    handleGetStays(page)
  }, [page]);

  const handleAddStays = (data) => {
    addStays(data);
    alert(`New Product has been added`);
    handleGetStays(page);
  };

  const handleDeleteStays = (id) => {
    deleteStays(id);
    alert(`A Product has been deleted`);
    handleGetStays(page);
  };
  const handleToggleStays = (id, newStatus) => {
    ToggleStatus(id, newStatus);
    alert(`Status has been Toggled`);
    handleGetStays(page);
  };

  const handlePage = (val) => {
    let value = val + page;
    setPage(value);
  };

  const handleChange = (e) => {
    let { value } = e.target;
    handleGetStays(page, value);
  }

  return (
    <>
      {error && <h1>Something Went Wrong Please Check Onces😒</h1>}
      {loading && <Spinner color="green.500" size={"lg"} />}
      <StayItem handleAddStays={handleAddStays} />

      <select onChange={handleChange}>
        <option value={''}>Sort By Price</option>
        <option value={"asc"}>Low_to_High</option>
        <option value={"desc"}>High_to_Low</option>
      </select>
      <Container>
        {data.map((ele) =>
          <Box key={ele.id}>
            <Image src={ele.image_url}></Image>
            <Heading>{ele.name}</Heading>
            <Text>{ele.location}</Text>
            <Text>{`${ele.rating}/5`}</Text>
            <Box display={"flex"}>
              <Text>{ele.isStatus ? "Available" : "Not Available"}</Text>
              <Text>{`₹ ${ele.price}/night`}</Text>
            </Box>
            <Button onClick={() => handleToggleStays(ele.id, !ele.isStatus)}>Toggle</Button>
            <Button onClick={() => handleDeleteStays(ele.id)}>Delete</Button>
          </Box>
        )}
        <Box>
          <Button onClick={setPage(1)}>First</Button>
          <Button disabled={page <= 1} onClick={() => handlePage(-1)}>PREV</Button>
          <Button disabled>{page}</Button>
          <Button disabled={page === totalPages} onClick={() => handlePage(1)}>NEXT</Button>
          <Button onClick={setPage(totalPages)}>Last</Button>
        </Box>
      </Container>
    </>
  );
}

export default Stays;









//hotels, serach button and apply github code sendbox filter example in this page and sorting and pagination
//codesend box link 'https://codesandbox.io/s/axios-forked-qg2rf2?file=/src/Components/Github.jsx';
//google map
//Admin Side means Should able to add some data/ product so use json-server;
//only Admin can add some data/product by json server/localhost