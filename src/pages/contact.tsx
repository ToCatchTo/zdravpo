import { Box } from "@mui/material";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

export default function Contact() {

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Header isHidden={true} />
            <ContactSection />
            <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <Benefits />
            </Box>
            <Box sx={{ mt: { sm: '190px', xs: '0px' } }}>
                <Footer isHidden={true} />
            </Box>
        </Box>
    )
};
