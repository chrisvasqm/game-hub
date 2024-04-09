import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <Box padding={4}>
                <Heading>Oops!</Heading>
                {isRouteErrorResponse(error) ?
                    <Text>An error ocurred</Text> : <Text>Invalid page</Text>}
            </Box>
        </>
    )
}

export default ErrorPage;