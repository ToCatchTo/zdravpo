import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";

export default function PaymentInfo() {
    const paymentsFileNames = ['payment_edenred.png', 'payment_cadhoc.png', 'payment_ticket.png', 'payment_ticket_card.png', 'payment_mastercard.png', 'payment_visa.png', 'payment_edenred.png', 'payment_cadhoc.png', 'payment_ticket.png', 'payment_ticket_card.png'];

    return (
        <Grid container spacing={2} columns={14} sx={{ mt: { sm: '100px', xs: '50px' } }}>
            <Grid columns={12} size={{ sm: 12, xs: 14 }} offset={{ sm: 1, xs: 0 }} spacing={2} container sx={{ backgroundColor: colors.button, borderRadius: { lg: '300px', md: '200px', sm: '100px', xs: '86px' }, padding: { sm: '113px 0px 169px 0px', xs: '113px 0px 369px 0px' }, justifyContent: { lg: 'flex-start', xs: 'center' } }}>
                {/* Levá část s textem */}
                <Grid size={{ md: 4, sm: 8, xs: 12 }} offset={{ lg: 2, xs: 0 }} sx={{ p: { sm: '0px', xs: '0px 36px' } }}>
                    <Typography component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '76px', md: '58px', xs: '41px' }, textAlign: { sm: 'left', xs: 'center' } }}>
                        Platební<br /> metody
                    </Typography>
                    <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: '45px' }}>
                        V prodejně <span style={{ fontWeight: '700' }}>ZDRAVPO Pardubice s.r.o.</span> můžete platit pohodlně v hotovosti nebo platební kartou. Firmám, organizacím a státním zařízením nabízíme možnost nákupu na fakturu. Samozřejmostí je také prodej na poukazy včetně ePoukazů.<br /><br /> Pro Vaše pohodlí nabízíme službu <span style={{ fontWeight: '700' }}>ePoukaz online</span> – stačí zadat kód na našem webu a vše vyřídíme za Vás rychle a diskrétně. U vybraného sortimentu lze využít také benefitní programy partnerských společností (viz přehled níže).
                    </Typography>
                    <Grid size={{ md: 4, xs: 12 }} offset={0} sx={{ display: { md: 'none', xs: 'flex' }, gap: '10px', flexWrap: 'wrap', mt: { sm: '80px', xs: '50px' }, alignContent: 'flex-start' }}>
                        {paymentsFileNames.map((payment, index) => (
                            <Box key={`payment-${index}`} sx={{ width: 'calc(50% - 5px)', backgroundColor: colors.secondary, height: '40px', p: '10px 0px', borderRadius: '19px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box component="img" src={`/${payment}`} alt={`Ikona platební metody ${index + 1}`} sx={{ width: 'auto', height: '100%', maxWidth: '100px' }} />
                            </Box>
                        ))}
                    </Grid>
                    <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '41px', xs: '33px' }, mt: { sm: '120px', xs: '90px' }, maxWidth: '405px' }}>
                        Využijte ePoukaz online, snadno rychle a z domova
                    </Typography>
                    {/* Tlačítko */}
                    <Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', maxWidth: { md: '318px', xs: '288px' }, mt: '30px', '&:hover': { filter: 'brightness(0.95)' } }}>
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
                <Grid size={4} offset={1} sx={{ display: { md: 'flex', xs: 'none' }, rowGap: '10px', columnGap: '16px', flexWrap: 'wrap', mt: '80px', alignContent: 'flex-start', flexDirection: { lg: 'row', xs: 'column' } }}>
                    {paymentsFileNames.map((payment, index) => (
                        <Box key={`payment-${index}`} sx={{ width: { lg: 'calc(50% - 8px)', xs: '100%' }, backgroundColor: colors.secondary, height: '40px', p: '10px 0px', borderRadius: '19px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxwidth: '260px', cursor: 'pointer', '&:hover': { filter: 'brightness(0.95)' } }}>
                            <Box component="img" src={`/${payment}`} alt={`Ikona platební metody ${index + 1}`} sx={{ width: 'auto', height: '100%', maxWidth: '100px' }} />
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
};