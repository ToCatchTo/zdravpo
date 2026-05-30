import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";
import { useNavigate } from "react-router-dom";

export default function UniversalInfoSection() {
    const navigate = useNavigate();

    // Připraveno pro napojení
    const textSection = {
        title: 'Zdravotnické<br /> potřeby',
        text: '<span style="font-weight: 700;">ZDRAVPO Pardubice s.r.o.</span> je od roku 2025 nově pod vedením nové majitelky specializovaná prodejna zdravotnických potřeb a zdravotní obuvi v Pardubicích. Jsme tu pro všechny, kteří hledají odborné poradenství, kvalitní produkty a lidský přístup – bez ohledu na věk či aktuální zdravotní situaci. Nabízíme volný prodej i výdej pomůcek na poukaz.<br /><br /> Pomáháme lidem v náročných životních obdobích i těm, kteří chtějí svému zdraví předcházet s respektem a péčí. Naší hlavní působností je město Pardubice a celý Pardubický kraj.'
    };
    const subpages = [
        { name: 'Inkontinence', link: '/universalInfoSubpage' },
        { name: 'Kompresní sortiment', link: '/universalInfoSubpage' },
        { name: 'Kompenzační pomůcky', link: '/universalInfoSubpage' },
        { name: 'Vše o inkontinenci', link: '/universalInfoSubpage' },
        { name: 'Správný výběr epitézy', link: '/universalInfoSubpage' }
    ];
    const imgSrc = '/top_header_img_mobile.png';

    return (
        <Grid container spacing={2} columns={14} sx={{ mt: { md: '100px', xs: '50px' } }}>
            <Grid columns={12} size={{ sm: 12, xs: 14 }} offset={{ sm: 1, xs: 0 }} spacing={2} container sx={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: colors.button, borderRadius: { lg: '300px', md: '200px', sm: '100px', xs: '86px' }, padding: { md: '113px 0px 169px 0px', sm: '135px 36px 169px 36px', xs: '135px 36px 369px 36px' }, rowGap: { lg: '90px', md: '60px' }, justifyContent: { lg: 'flex-start', md: 'center', sm: 'flex-start' } }}>
                {/* Info sekce */}
                <Grid size={{ md: 4, sm: 10, xs: 12 }} offset={{ lg: 2, sm: 1, xs: 0 }} sx={{ flexDirection: 'column' }}>
                    <Typography dangerouslySetInnerHTML={{ __html: textSection.title }} component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '76px', md: '58px', xs: '41px' }, textAlign: { md: 'left', xs: 'center' } }} />
                    <Typography dangerouslySetInnerHTML={{ __html: textSection.text }} sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { md: '45px', xs: '30px' } }} />
                </Grid>
                {/* Seznam podstránek */}
                <Grid size={{ lg: 3, md: 4, sm: 10, xs: 12 }} offset={{ sm: 1, xs: 0 }} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mt: { md: '80px', xs: '30px' } }}>
                    {subpages.map((subpage, index) => (
                        <Box component="a" onClick={() => navigate(subpage.link)} key={`subpage-${index}`} sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', '&:hover': { filter: 'brightness(0.95)' } }}>
                            <Typography sx={{ fontSize: '18px', fontFamily: 'Onest', fontWeight: '700', color: colors.text, mr: '10px' }}>
                                {subpage.name}
                            </Typography>
                            <Box component="img" src='/arrow_black.svg' alt="Ikona šipky" />
                        </Box>
                    ))}
                </Grid>
                {/* Obrázek */}
                <Grid size={{ xl: 3, md: 4, sm: 10, xs: 12 }} offset={{ lg: 2, sm: 1, xs: 0 }} sx={{ borderRadius: '76px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', height: 'fit-content', alignSelf: 'center', mt: { md: '0px', xs: '60px' } }}>
                    <Box component="img" src={imgSrc} alt='Obrázek informační sekce' sx={{ width: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />
                </Grid>
                {/* Služba ePoukaz online - desktop viditelná */}
                <Grid size={{ md: 4, sm: 10, xs: 12 }} offset={{ sm: 1, xs: 0 }} sx={{ display: { md: 'flex', xs: 'none' }, flexDirection: 'column' }}>
                    <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '41px', xs: '33px' }, maxWidth: '405px', mt: '70px' }}>
                        Využijte ePoukaz online, snadno rychle a z domova
                    </Typography>
                    {/* Tlačítko */}
                    <Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', maxWidth: { md: '318px', xs: '288px' }, mt: '30px', '&:hover': { filter: 'brightness(0.95)' } }}>
                        <Typography sx={{ fontSize: '18px', fontFamily: 'Onest', fontWeight: '700', color: colors.text, mr: '10px' }}>
                            Zadat ePoukaz online
                        </Typography>
                        <Box component="img" src='/arrow_black.svg' alt="Ikona šipky" />
                    </Box>
                    <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { sm: '38px', xs: '28px' } }}>
                        Služba <span style={{ fontWeight: '700' }}>ePoukaz online</span> Vám umožní vyřídit zdravotnické pomůcky jednoduše z domova. Na našem webu klikněte na ePoukaz online, zadejte kód poukazu, vyplňte své údaje a formulář odešlete.<br /><br /> Poukaz zkontrolujeme a co nejdříve se Vám ozveme s dalším postupem, termínem vyřízení a případným doplatkem.
                    </Typography>
                </Grid>
                {/* Adresa */}
                <Grid size={{ lg: 3, md: 9, sm: 10, xs: 12 }} offset={{ lg: 2, sm: 1, xs: 0 }} sx={{ mt: { md: '0px', xs: '76px' } }}>
                    <Box>
                        <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '700', lineHeight: { lg: '41px', xs: '33px' } }}>
                            Navštivte nás
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { md: '50px', xs: '20px' } }}>
                            ZDRAVPO Pardubice s.r.o.<br /><span style={{ fontWeight: '700' }}>Ulice 17. listopadu 409, Pardubice</span>
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline', mt: '35px', lineHeight: '21px' }}>
                            Nejbližší autobusové zastávky
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: '10px' }}>
                            - Masarykovo náměstí<br />- 17. listopadu
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline', mt: '35px', lineHeight: '21px' }}>
                            Parkování
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: '10px' }}>
                            - Podélné parkování u silnice (30 min.)<br />- OC Palác Pardubice<br />- Parkoviště Parking point
                        </Typography>
                    </Box>
                </Grid>
                {/* Služba ePoukaz online - mobile viditelná */}
                <Grid size={{ md: 4, sm: 10, xs: 12 }} offset={{ sm: 1, xs: 0 }} sx={{ display: { md: 'none', xs: 'flex' }, flexDirection: 'column' }}>
                    <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '41px', xs: '33px' }, maxWidth: '405px', mt: '70px' }}>
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