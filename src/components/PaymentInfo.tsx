import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";
import { useEffect, useState } from "react";

type PaymentMethod = {
    name: string;
    image: string;
}

export default function PaymentInfo() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
    const [loading, setLoading] = useState(true);

    const handlePayment = () => {

    }

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://admin.zdravpopardubice.cz/api/payment-methods', {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`Nepodařilo se načíst data (Status: ${response.status})`);
                }

                const data = await response.json();
                setPaymentMethods(data.images);
                setTitle(data.title);
                setText(data.text);
            } catch (err) {
                console.error("Chyba při API requestu:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <Grid container spacing={2} columns={14} sx={{ mt: { sm: '100px', xs: '50px' } }}>
            <Grid columns={12} size={{ sm: 12, xs: 14 }} offset={{ sm: 1, xs: 0 }} spacing={2} container sx={{ backgroundColor: colors.button, borderRadius: { lg: '300px', md: '200px', sm: '100px', xs: '86px' }, padding: { sm: '113px 0px 169px 0px', xs: '113px 0px 369px 0px' }, justifyContent: { lg: 'flex-start', xs: 'center' } }}>
                {/* Levá část s textem */}
                <Grid size={{ md: 4, sm: 8, xs: 12 }} offset={{ lg: 2, xs: 0 }} sx={{ p: { sm: '0px', xs: '0px 36px' } }}>
                    {loading ? (
                        <>
                            <Skeleton variant="text" width="50%" sx={{ fontSize: { lg: '60px', md: '48px', xs: '32px' } }} />
                            <Skeleton variant="text" width="45%" sx={{ fontSize: { lg: '60px', md: '48px', xs: '32px' } }} />
                        </>
                    ) : (
                        <Typography component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '76px', md: '58px', xs: '41px' }, textAlign: { sm: 'left', xs: 'center' }, whiteSpace: 'pre-line' }}>
                            {title.replace(' ', '\n')}
                        </Typography>
                    )}
                    {loading ? (
                        <>
                            <Skeleton variant="text" width="100%" sx={{ fontSize: '16px', mt: '45px' }} />
                            <Skeleton variant="text" width="100%" sx={{ fontSize: '16px' }} />
                            <Skeleton variant="text" width="100%" sx={{ fontSize: '16px' }} />
                            <Skeleton variant="text" width="100%" sx={{ fontSize: '16px' }} />
                            <Skeleton variant="text" width="100%" sx={{ fontSize: '16px' }} />
                            <Skeleton variant="text" width="80%" sx={{ fontSize: '16px' }} />
                        </>
                    ) : (
                        <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: '45px' }} dangerouslySetInnerHTML={{ __html: text }} />
                    )}
                    {/* Část s platebními metodami - mobilní verze */}
                    {loading ? (
                        <Grid size={{ md: 4, xs: 12 }} offset={0} sx={{ display: { md: 'none', xs: 'flex' }, gap: '10px', flexWrap: 'wrap', mt: { sm: '80px', xs: '50px' }, alignContent: 'flex-start' }}>
                            <Skeleton variant="rectangular" width='calc(50% - 5px)' height={60} sx={{ borderRadius: '19px' }} />
                            <Skeleton variant="rectangular" width='calc(50% - 5px)' height={60} sx={{ borderRadius: '19px' }} />
                            <Skeleton variant="rectangular" width='calc(50% - 5px)' height={60} sx={{ borderRadius: '19px' }} />
                        </Grid>
                    ) : (
                        <Grid size={{ md: 4, xs: 12 }} offset={0} sx={{ display: { md: 'none', xs: 'flex' }, gap: '10px', flexWrap: 'wrap', mt: { sm: '80px', xs: '50px' }, alignContent: 'flex-start' }}>
                            {paymentMethods.map((paymentMethod, index) => (
                                <Box key={paymentMethod.name} onClick={handlePayment} sx={{ width: 'calc(50% - 5px)', backgroundColor: colors.secondary, height: '40px', p: '10px 0px', borderRadius: '19px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', '&:hover': { filter: 'brightness(0.95)' } }}>
                                    <Box component="img" src={paymentMethod.image} alt={`Ikona platební metody ${index + 1}`} sx={{ width: 'auto', height: '100%', maxWidth: '100px' }} />
                                </Box>
                            ))}
                        </Grid>)}
                    <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '41px', xs: '33px' }, mt: { sm: '120px', xs: '90px' }, maxWidth: '405px' }}>
                        Využijte ePoukaz online, snadno rychle a z domova
                    </Typography>
                    {/* Tlačítko */}
                    <Box component="a" href='https://app.epoukazonline.cz/c/c3fa0aef1889' target='_blank' sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', maxWidth: { md: '318px', xs: '288px' }, mt: '30px', '&:hover': { filter: 'brightness(0.95)' } }}>
                        <Typography sx={{ fontSize: '18px', fontFamily: 'Onest', fontWeight: '700', color: colors.text }}>
                            Zadat ePoukaz online
                        </Typography>
                        <Box component="img" src='/arrow_black.svg' alt="Ikona šipky" />
                    </Box>
                    <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { sm: '38px', xs: '28px' } }}>
                        Služba <span style={{ fontWeight: '700' }}>ePoukaz online</span> Vám umožní vyřídit zdravotnické pomůcky jednoduše z domova. Na našem webu klikněte na ePoukaz online, zadejte kód poukazu, vyplňte své údaje a formulář odešlete.<br /><br /> Poukaz zkontrolujeme a co nejdříve se Vám ozveme s dalším postupem, termínem vyřízení a případným doplatkem.
                    </Typography>
                </Grid>
                {/* Pravá část s platebními metodami */}
                {loading ? (
                    <Grid size={4} offset={1} sx={{ display: { md: 'flex', xs: 'none' }, rowGap: '10px', columnGap: '16px', flexWrap: 'wrap', mt: '80px', alignContent: 'flex-start', flexDirection: { lg: 'row', xs: 'column' } }}>
                        <Skeleton variant="rectangular" height={60} sx={{ width: { lg: 'calc(50% - 8px)', xs: '100%' }, borderRadius: '19px' }} />
                        <Skeleton variant="rectangular" height={60} sx={{ width: { lg: 'calc(50% - 8px)', xs: '100%' }, borderRadius: '19px' }} />
                        <Skeleton variant="rectangular" height={60} sx={{ width: { lg: 'calc(50% - 8px)', xs: '100%' }, borderRadius: '19px' }} />
                        <Skeleton variant="rectangular" height={60} sx={{ width: { lg: 'calc(50% - 8px)', xs: '100%' }, borderRadius: '19px' }} />
                        <Skeleton variant="rectangular" height={60} sx={{ width: { lg: 'calc(50% - 8px)', xs: '100%' }, borderRadius: '19px' }} />
                        <Skeleton variant="rectangular" height={60} sx={{ width: { lg: 'calc(50% - 8px)', xs: '100%' }, borderRadius: '19px' }} />
                    </Grid>
                ) : (
                    <Grid size={4} offset={1} sx={{ display: { md: 'flex', xs: 'none' }, rowGap: '10px', columnGap: '16px', flexWrap: 'wrap', mt: '80px', alignContent: 'flex-start', flexDirection: { lg: 'row', xs: 'column' } }}>
                        {paymentMethods.map((paymentMethod, index) => (
                            <Box key={paymentMethod.name} onClick={handlePayment} sx={{ width: { lg: 'calc(50% - 8px)', xs: '100%' }, backgroundColor: colors.secondary, height: '40px', p: '10px 0px', borderRadius: '19px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxwidth: '260px', cursor: 'pointer', '&:hover': { filter: 'brightness(0.95)' } }}>
                                <Box component="img" src={paymentMethod.image} alt={`Ikona platební metody ${index + 1}`} sx={{ width: 'auto', height: '100%', maxWidth: '100px' }} />
                            </Box>
                        ))}
                    </Grid>)}
            </Grid>
        </Grid>
    )
};