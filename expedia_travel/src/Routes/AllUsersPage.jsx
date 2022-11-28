import React, { useContext, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Box, Button, Image, Spinner } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';

let totalPages = 3;
const AllUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);
  const { email } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    fetch('https://reqres.in/api/users?page=' + page)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page: page,
      key: "value",
      limit: 10,
    });
  }, [page])


  // console.log(users, typeof (users));
  if (loading) {
    return <Spinner color="red.500" size="lg" />
  }
  if (error) {
    return <h1>Please Check Your Code Once!😒</h1>
  }
  if (email !== "pushpendra1697@gmail.com") {
    return;
  }
  return (
    <Box w={"50%"} margin="auto">
      {users.map((ele) =>
        <Box key={ele.id} style={{ border: "1px solid black", margin: '5%', padding: "20px", color: "green", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Image ml={"40%"} src={ele.avatar
          } alt="fake Album"></Image>
          <h4>{`${ele.first_name} ${ele.last_name}`}</h4>
          <h2>{ele.email}</h2>
          <br />
          <Link style={{ textDecoration: "none", color: "red", }} to={`/users/${ele.id}`}> Show More Details</Link>
        </Box>
      )}
      <Box color={"green"}>
        <Button onClick={() => setPage(1)}>First</Button>
        <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>PRE</Button>
        <Button disabled={true} color={"red"}>{page}</Button>
        <Button disabled={page === 10} onClick={() => setPage(page + 1)}>NEXT</Button>
        <Button onClick={() => setPage(totalPages)} disabled={page > 3}>Last</Button>
      </Box>
    </Box>
  );
}

export default AllUsersPage;