import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";
import { useNavigate } from "react-router-dom";

export default function UniversalInfoSubpageSection() {
    const navigate = useNavigate();

    const soloPicture = '/subpage_solo.png';
    const otherPictures = ['/subpage_1.png', '/subpage_2.png'];

    return (
        <Grid container spacing={2} columns={14} sx={{ mt: { md: '100px', xs: '50px' } }}>
            <Grid columns={12} size={{ sm: 12, xs: 14 }} offset={{ sm: 1, xs: 0 }} spacing={2} container sx={{ flexDirection: 'column', backgroundColor: colors.button, borderRadius: { lg: '300px', md: '200px', sm: '100px', xs: '86px' }, padding: { md: '113px 0px 169px 0px', sm: '135px 36px 169px 36px', xs: '56px 36px 369px 36px' }, justifyContent: { lg: 'flex-start', md: 'center', sm: 'flex-start' } }}>
                {/* Tlačítko zpět */}
                <Grid size={1} offset={{ md: 2, sm: 1, xs: 0 }} sx={{ backgroundColor: colors.primary, borderRadius: '24px', cursor: 'pointer', '&:hover': { filter: 'brightness(0.95)' }, display: 'flex', alignItems: 'center', p: '9px', gap: '15px', minWidth: '122px' }} onClick={() => navigate('/universalInfoPage')}>
                    <Box component="img" src='/arrow.svg' alt="Ikona šipky" sx={{ transform: 'scaleX(-1)' }} />
                    <Typography sx={{ color: colors.secondary, fontSize: '18px', fontFamily: 'Onest', fontWeight: '600', lineHeight: '22px' }}>
                        Zpět
                    </Typography>
                </Grid>
                {/* Nadpis */}
                <Grid size={{ lg: 5, md: 6, sm: 10, xs: 6 }} offset={{ md: 2, sm: 1 }} sx={{ mt: { sm: '49px', xs: '44px' } }}>
                    <Typography component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '76px', md: '58px', xs: '41px' } }}>
                        Co dodat do LDN
                    </Typography>
                </Grid>
                {/* Text 1 */}
                <Grid size={{ md: 6, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: { sm: '50px', xs: '35px' } }}>
                    <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px' }}>
                        <span style={{ fontWeight: '700' }}>ZDRAVPO Pardubice s.r.o.</span> je od roku 2025 nově pod vedením nové majitelky specializovaná prodejna zdravotnických potřeb a zdravotní obuvi v Pardubicích. Jsme tu pro všechny, kteří hledají odborné poradenství, kvalitní produkty a lidský přístup – bez ohledu na věk či aktuální zdravotní situaci. Nabízíme volný prodej i výdej pomůcek na poukaz.<br /><br /> Pomáháme lidem v náročných životních obdobích i těm, kteří chtějí svému zdraví předcházet s respektem a péčí. Naší hlavní působností je město Pardubice a celý Pardubický kraj.
                    </Typography>
                </Grid>
                {/* Obrázky 1 */}
                <Grid size={{ md: 8, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: { sm: '40px', xs: '45px' }, columnGap: '42px', rowGap: '30px', display: { sm: 'flex', xs: 'none' }, flexWrap: 'wrap', justifyContent: { md: 'flex-start', xs: 'center' } }}>
                    <Box component="img" src={soloPicture} alt="Obrázek solo" sx={{ width: '100%', height: 'auto', maxWidth: { md: '335px', xs: '318px' }, borderRadius: '76px', flex: '1' }} />
                    {otherPictures.map((picture, index) => (
                        <Box component="img" src={picture} alt={`Obrázek ${index + 1}`} key={`subpagePicture-${index}`} sx={{ width: '100%', height: 'auto', maxWidth: { md: '335px', xs: '318px' }, borderRadius: '76px', flex: '1' }} />
                    ))}
                </Grid>
                <Grid size={{ md: 8, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: '40px', columnGap: '42px', rowGap: '30px', display: { sm: 'none', xs: 'flex' }, flexWrap: 'wrap', justifyContent: { md: 'flex-start', xs: 'center' } }}>
                    <Box component="img" src={soloPicture} alt="Obrázek solo" sx={{ width: '100%', height: 'auto', maxWidth: { sm: '335px', xs: '318px' }, borderRadius: '76px' }} />
                </Grid>
                {/* Text 2 */}
                <Grid size={{ md: 6, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: { sm: '100px', xs: '45px' } }}>
                    <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px' }}>
                        <span style={{ fontWeight: '700' }}>ZDRAVPO Pardubice s.r.o.</span> je od roku 2025 nově pod vedením nové majitelky specializovaná prodejna zdravotnických potřeb a zdravotní obuvi v Pardubicích. Jsme tu pro všechny, kteří hledají odborné poradenství, kvalitní produkty a lidský přístup – bez ohledu na věk či aktuální zdravotní situaci. Nabízíme volný prodej i výdej pomůcek na poukaz.<br /><br /> Pomáháme lidem v náročných životních obdobích i těm, kteří chtějí svému zdraví předcházet s respektem a péčí. Naší hlavní působností je město Pardubice a celý Pardubický kraj.
                    </Typography>
                </Grid>
                {/* Obrázky 2 */}
                <Grid size={{ md: 8, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: { sm: '40px', xs: '45px' }, columnGap: '42px', rowGap: '25px', display: { sm: 'none', xs: 'flex' }, flexWrap: 'wrap', justifyContent: { md: 'flex-start', xs: 'center' } }}>
                    {otherPictures.map((picture, index) => (
                        <Box component="img" src={picture} alt={`Obrázek ${index + 1}`} key={`subpagePicture-${index}`} sx={{ width: '100%', height: 'auto', maxWidth: { sm: '335px', xs: '318px' }, borderRadius: '76px' }} />
                    ))}
                </Grid>
                {/* Tlačítko zpět */}
                <Grid size={1} offset={{ md: 2, sm: 1, xs: 0 }} sx={{ backgroundColor: colors.primary, borderRadius: '24px', cursor: 'pointer', '&:hover': { filter: 'brightness(0.95)' }, display: { sm: 'none', xs: 'flex' }, alignItems: 'center', p: '9px', gap: '15px', minWidth: '122px', mt: '105px' }} onClick={() => navigate('/universalInfoPage')}>
                    <Box component="img" src='/arrow.svg' alt="Ikona šipky" sx={{ transform: 'scaleX(-1)' }} />
                    <Typography sx={{ color: colors.secondary, fontSize: '18px', fontFamily: 'Onest', fontWeight: '600', lineHeight: '22px' }}>
                        Zpět
                    </Typography>
                </Grid>
                {/* Služba ePoukaz online - mobile viditelná */}
                <Grid size={{ xl: 4, md: 5, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: '120px', display: { sm: 'block', xs: 'none' } }}>
                    <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '41px', xs: '33px' }, maxWidth: '405px' }}>
                        Využijte ePoukaz online, snadno rychle a z domova
                    </Typography>
                    {/* Tlačítko */}
                    <Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', maxWidth: { md: '318px', xs: '288px' }, mt: { md: '30px', xs: '20px' }, '&:hover': { filter: 'brightness(0.95)' } }}>
                        <Typography sx={{ fontSize: '18px', fontFamily: 'Onest', fontWeight: '700', color: colors.text, mr: '10px' }}>
                            Zadat ePoukaz online
                        </Typography>
                        <Box component="img" src='/arrow_black.svg' alt="Ikona šipky" />
                    </Box>
                    <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { sm: '38px', xs: '28px' } }}>
                        Služba <span style={{ fontWeight: '700' }}>ePoukaz online</span> Vám umožní vyřídit zdravotnické pomůcky jednoduše z domova. Na našem webu klikněte na ePoukaz online, zadejte kód poukazu, vyplňte své údaje a formulář odešlete.<br /><br /> Poukaz zkontrolujeme a co nejdříve se Vám ozveme s dalším postupem, termínem vyřízení a případným doplatkem.
                    </Typography>
                </Grid>
            </Grid>
        </Grid >
    )
};