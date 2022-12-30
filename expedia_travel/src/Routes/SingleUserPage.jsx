import { Box, Container, Image, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function getUserById(id) {
  return fetch(`https://reqres.in/api/users/${id}`).then((res) => res.json());
}

const SingleUserPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  // console.log("params", params) //gives unique id;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    getUserById(params.user_id)
      .then((res) => {
        setData(res.data)
        setLoading(false)
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [])
  // console.log(data, typeof (data));

  if (loading) {
    return <Spinner color="red.500" size="lg" />
  }
  if (error) {
    return <h1>Something went Wrong😒</h1>
  }
  return (
    <Container>
      <Box style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "10px" }}>
        <Image ml={"25%"} src={data.avatar} alt={params.user_id} width="200px" />
        <Text color={"goldenrod"}>User ID : {params.user_id}</Text>
        <h3>{data.email}</h3>
        <h2>{`${data.first_name} ${data.last_name}`}</h2>
        <br />
        <Link style={{ textDecoration: "none", color: "green" }} to='/users'>Go Back</Link>
      </Box>
    </Container>
  );
}

export default SingleUserPage;