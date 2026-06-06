import { Box } from "@mui/material";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UniversalInfoSection from "../components/UniversalInfoSection";

export default function UniversalInfoPage() {

    return (
        <>
            <Header isHidden={true} />
            <UniversalInfoSection />
            <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <Benefits />
            </Box>
            <Box sx={{ mt: { lg: '265px', md: '200px', sm: '180px', xs: '-389px' } }}>
                <Footer isHidden={false} />
            </Box>
        </>
    )
};
