import { Box } from "@mui/material";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CounselingDetailSection from "../components/CounselingDetailSection";

export default function CounselingDetailPage() {

    return (
        <>
            <Header isHidden={true} />
            <CounselingDetailSection />
            <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <Benefits />
            </Box>
            <Box sx={{ mt: { lg: '265px', md: '200px', sm: '180px', xs: '-330px' } }}>
                <Footer isHidden={false} />
            </Box>
        </>
    )
};
