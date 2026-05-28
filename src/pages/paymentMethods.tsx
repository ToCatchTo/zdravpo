import { Box } from "@mui/material";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import PaymentInfo from "../components/PaymentInfo";
import Header from "../components/Header";

export default function PaymentMethods() {

    return (
        <>
            <Header isHidden={true} />
            <PaymentInfo />
            <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <Benefits />
            </Box>
            <Box sx={{ mt: { lg: '265px', md: '200px', sm: '180px', xs: '-353px' } }}>
                <Footer />
            </Box>
        </>
    )
};
