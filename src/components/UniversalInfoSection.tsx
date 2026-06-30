import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";
import { useNavigate, useParams } from "react-router-dom";

type Category = {
    name: string;
    slug: string;
    photo: string;
    blocks?: CategoryBlock[];
    subcategories?: Subcategory[];
};

type CategoryBlock = {
    type?: "text" | "image";
    heading?: string;
    text?: string;
    images?: string[];
}

type Subcategory = {
    name: string;
    slug: string;
}

export default function UniversalInfoSection({ category }: { category: Category | null }) {
    const navigate = useNavigate();
    const { slug } = useParams();

    return (
        <Grid container spacing={2} columns={14} sx={{ mt: { md: '100px', xs: '50px' } }}>
            <Grid columns={12} size={{ sm: 12, xs: 14 }} offset={{ sm: 1, xs: 0 }} spacing={2} container sx={{ backgroundColor: colors.button, borderRadius: { lg: '300px', md: '200px', sm: '100px', xs: '86px' }, padding: { md: '113px 0px 169px 0px', sm: '135px 36px 169px 36px', xs: '135px 36px 369px 36px' }, justifyContent: { lg: 'flex-start', xs: 'center' } }}>
                <Grid columns={{ xl: 8, md: 10, sm: 8, xs: 12 }} size={{ xl: 8, md: 10, sm: 8, xs: 12 }} offset={{ md: 2, sm: 1, xs: 0 }} spacing={2} container sx={{ flexDirection: 'row', flexWrap: 'wrap', rowGap: { lg: '90px !important', md: '60px !important' } }}>
                    {/* Info sekce */}
                    <Grid size={{ md: 4, sm: 10, xs: 12 }} sx={{ flexDirection: 'column' }}>
                        <Typography dangerouslySetInnerHTML={{ __html: category?.name || '' }} component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '76px', md: '58px', xs: '41px' }, textAlign: { md: 'left', xs: 'center' } }} />
                        <Typography dangerouslySetInnerHTML={{ __html: category?.blocks?.[0]?.text || '' }} sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { md: '45px', xs: '30px' } }} />
                    </Grid>
                    {/* Seznam podstránek */}
                    <Grid size={{ lg: 3, md: 4, sm: 10, xs: 12 }} offset={{ md: 1, xs: 0 }} sx={{ display: category?.subcategories?.length === 0 ? 'none' : 'flex', flexDirection: 'column', gap: '10px', mt: { md: '80px', xs: '30px' } }}>
                        {category?.subcategories?.map((subcategory, index) => (
                            <Box component="a" onClick={() => { navigate(`/podkategorie/${subcategory.slug}`, { state: { from: slug } }); window.scrollTo(0, 0) }} key={`${subcategory.slug}-${index}`} sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', '&:hover': { filter: 'brightness(0.95)' } }}>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Onest', fontWeight: '700', color: colors.text, mr: '10px' }}>
                                    {subcategory.name}
                                </Typography>
                                <Box component="img" src='/arrow_black.svg' alt="Ikona šipky" />
                            </Box>
                        ))}
                    </Grid>
                    {/* Bloky obsahu */}
                    {category?.blocks?.slice(1).map((block, index) => (
                        block.type === 'text' ?
                            <Grid key={`${block.heading}-${index}`} size={{ md: 4, sm: 10, xs: 12 }} offset={index % 2 == 0 ? 0 : { md: 1, xs: 0 }} sx={{ flexDirection: 'column' }}>
                                <Typography dangerouslySetInnerHTML={{ __html: block.heading || '' }} component="h1" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '700', lineHeight: { lg: '41px', xs: '33px' }, mt: { md: '0px', xs: '60px' } }} />
                                <Typography dangerouslySetInnerHTML={{ __html: block.text || '' }} sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { md: '45px', xs: '30px' } }} />
                            </Grid> :
                            <Grid key={`Obrázek-${index}`} size={{ xl: 3, md: 4, sm: 10, xs: 12 }} offset={index % 2 == 0 ? 0 : { md: 1, xs: 0 }} sx={{ borderRadius: '76px', overflow: 'hidden', display: block.images ? 'flex' : 'none', alignItems: 'flex-start', height: 'fit-content', alignSelf: 'center', mt: { md: '0px', xs: '60px' } }}>
                                <Box component="img" src={block.images?.[0]} alt='Obrázek informační sekce' sx={{ width: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />
                            </Grid>
                    ))}
                    {/* Služba ePoukaz online - desktop viditelná */}
                    <Grid size={{ md: category?.blocks?.[category?.blocks?.length - 1]?.type == 'text' ? 3 : 4, sm: 10, xs: 12 }} offset={{ md: (((category?.blocks?.length ?? 0) + ((category?.subcategories?.length ?? 0) > 0 ? 0 : 1)) % 2 === 0) ? 1 : 0, sm: 0, xs: 0 }} sx={{ display: { md: 'flex', xs: 'none' }, flexDirection: 'column' }}>
                        <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '41px', xs: '33px' }, maxWidth: '405px' }}>
                            Využijte ePoukaz online, snadno rychle a z domova
                        </Typography>
                        {/* Tlačítko */}
                        <Box component="a" href='https://app.epoukazonline.cz/c/c3fa0aef1889' target='_blank' sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', maxWidth: { md: '318px', xs: '288px' }, mt: '30px', '&:hover': { filter: 'brightness(0.95)' } }}>
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
                    <Grid size={{ lg: 3, md: 3, sm: 10, xs: 12 }} offset={{ sm: (((category?.blocks?.length ?? 0) + ((category?.subcategories?.length ?? 0) > 0 ? 0 : 1)) % 2 === 0) ? 0 : 1, xs: 0 }} sx={{ mt: { md: '0px', xs: '76px' } }}>
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
                    <Grid size={{ md: 4, sm: 10, xs: 12 }} offset={{ md: 1, xs: 0 }} sx={{ display: { md: 'none', xs: 'flex' }, flexDirection: 'column' }}>
                        <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '41px', xs: '33px' }, maxWidth: '405px', mt: '95px' }}>
                            Využijte ePoukaz online, snadno rychle a z domova
                        </Typography>
                        {/* Tlačítko */}
                        <Box component="a" href='https://app.epoukazonline.cz/c/c3fa0aef1889' target='_blank' sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', maxWidth: { md: '318px', xs: '288px' }, mt: { md: '30px', xs: '20px' }, '&:hover': { filter: 'brightness(0.95)' } }}>
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
            </Grid>
        </Grid >
    )
};