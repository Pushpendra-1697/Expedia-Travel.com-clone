import React from 'react';
import { Box, Input, Select } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


const initState = {
    image_url: '',
    name: '',
    location: '',
    rating: '',
    price: '',
    isStatus: ''
}

const StayItem = ({ handleAddStays }) => {
    const [formData, setFormData] = useState(initState);
    const { email } = useContext(AuthContext);
    // console.log(email)

    if (email !== "pushpendra1697@gmail.com") {
        return;
    }
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === 'checkbox' ? checked : value;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleAddStays(formData);
        setFormData({ image_url: '', name: '', location: '', rating: '', price: '', isStatus: "" })
    }
    const { image_url, name, location, rating, price, isStatus } = formData;


    return (
        <>
            <Box w={"40%"} m="auto" padding="20px 10px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                <form onSubmit={onSubmit}>
                    <label>Image url</label>
                    <Input color="green" ml={"10px"} w={"40%"} onChange={handleChange} type={"url"} name="image_url" value={image_url} placeholder='Hotel Image'></Input>
                    <br></br>
                    <br></br>
                    <label>Hotel Name</label>
                    <Input color="green" ml={"10px"} w={"40%"} onChange={handleChange} type={"text"} name="name" value={name} placeholder="Hotel Name"></Input>
                    <br></br>
                    <br></br>
                    <Select color="green" m={"auto"} w={"40%"} onChange={handleChange} name='location' value={location}>
                        <option value={''}>Select Location</option>
                        <option value={'Kanpur'}>Kanpur</option>
                        <option value={'Lucknow'}>Lucknow</option>
                        <option value={'Mumbai'}>Mumbai</option>
                        <option value={'New Delhi'}>New Delhi</option>
                        <option value={'Dubai'}>Dubai</option>
                        <option value={'Bengaluru'}>Bengaluru</option>
                        <option value={'Pune'}>Pune</option>
                    </Select>
                    <br></br>
                    <label>Rating</label>
                    <Input color="green" ml={"10px"} w={"40%"} onChange={handleChange} type={"number"} name="rating" value={rating} placeholder='Rating'></Input>
                    <br></br>
                    <br></br>
                    <label>Price</label>
                    <Input color="green" ml={"10px"} w={"40%"} onChange={handleChange} type={"number"} name="price" value={price} placeholder='Price'></Input>
                    <br></br>
                    <br></br>
                    <label>Availability Status</label>
                    <input onChange={handleChange} type={"checkbox"} name="isStatus" checked={isStatus}></input>
                    <br></br>
                    <br></br>
                    <Input color="white" bg="blue" w={"20%"} type={"submit"} value="Add Product"></Input>
                </form>
            </Box>
        </>
    );
}

export default StayItem;