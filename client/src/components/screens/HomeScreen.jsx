import React from 'react';
import {Box, Container, Typography} from "@material-ui/core";
import CustomTable from "../Table/CustomTable";
import {useQuery} from "@apollo/client";
import {STUDENTS} from "../../queries/queries";

const HomeScreen = () => {
    const {data, loading, error} = useQuery(STUDENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error getting data from server!!</p>;

    const {students} = data;

    return (
        <Container>
            <Box py={5}>
                <Typography variant="h4" align="center">STUDENT TABLE</Typography>
            </Box>
            <Box>
                <CustomTable studentsData={students}/>
            </Box>
        </Container>
    );
};

export default HomeScreen;