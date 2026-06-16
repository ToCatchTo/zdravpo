import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type ArticleBlock = {
    type: "text" | "image";
    heading?: string;
    text?: string;
    images?: string[];
};

type ArticleDetail = {
    title: string;
    slug: string;
    publishedAt: string;
    blocks: ArticleBlock[];
};

export default function CounselingDetailSection() {
    const navigate = useNavigate();
    const [article, setArticle] = useState<ArticleDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const detailResponse = await fetch(`https://admin.zdravpopardubice.cz/api/articles/${slug}`, {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });

                if (!detailResponse.ok) {
                    throw new Error(`Nepodařilo se načíst článek (Status: ${detailResponse.status})`);
                }

                const detailData: ArticleDetail = await detailResponse.json();
                setArticle(detailData);
            } catch (err) {
                console.error("Chyba při API requestu:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
    }, []);

    return (
        <Grid container spacing={2} columns={14} sx={{ mt: { md: '100px', xs: '50px' } }}>
            <Grid columns={12} size={{ sm: 12, xs: 14 }} offset={{ sm: 1, xs: 0 }} spacing={2} container sx={{ flexDirection: 'column', backgroundColor: colors.button, borderRadius: { lg: '300px', md: '200px', sm: '100px', xs: '86px' }, padding: { md: '94px 0px 94px 0px', sm: '94px 36px 94px 36px', xs: '56px 36px 369px 36px' }, justifyContent: { lg: 'flex-start', md: 'center', sm: 'flex-start' }, gap: '0px' }}>
                {/* Tlačítko zpět */}
                <Grid size={1} offset={{ md: 2, sm: 1, xs: 0 }} sx={{ backgroundColor: colors.primary, borderRadius: '24px', cursor: 'pointer', '&:hover': { filter: 'brightness(0.95)' }, display: 'flex', alignItems: 'center', p: { sm: '9px', xs: '7px 10px' }, gap: { sm: '15px', xs: '13px' }, minWidth: { sm: '122px', xs: '90px' }, maxWidth: '122px' }} onClick={() => { navigate('/poradna'); window.scrollTo(0, 0); }}>
                    <Box component="img" src='/arrow.svg' alt="Ikona šipky" sx={{ transform: 'scaleX(-1)', width: { sm: '31px', xs: '15px' }, height: { sm: '31px', xs: '15px' } }} />
                    <Typography sx={{ color: colors.secondary, fontSize: { sm: '18px', xs: '12px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: '22px' }}>
                        Zpět
                    </Typography>
                </Grid>
                {/* Nadpis */}
                <Grid size={{ lg: 5, md: 6, sm: 10, xs: 7 }} offset={{ md: 2, sm: 1 }} sx={{ mt: { sm: '49px', xs: '44px' } }}>
                    {loading ?
                        <Skeleton variant="text" height={60} width="100%" sx={{ borderRadius: '20px' }} /> :
                        <Typography component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '76px', md: '58px', xs: '41px' } }}>
                            {article?.title}
                        </Typography>}
                </Grid>

                {loading ?
                    <Grid size={{ md: 6, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ display: 'flex', flexDirection: 'column', mt: { sm: '40px', xs: '45px' } }}>
                        <Skeleton variant="text" width="100%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="100%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="100%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="100%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="100%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="80%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="80%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="rectangular" width="100%" height='calc(100vw - 72px)' sx={{ aspectRatio: '1/1', borderRadius: '76px', m: '45px 0px', maxHeight: '335px', maxWidth: '335px' }} />
                        <Skeleton variant="text" width="100%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="100%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="100%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                        <Skeleton variant="text" width="80%" height={32} sx={{ fontSize: '16px', lineHeight: '21px' }} />
                    </Grid> :
                    article?.blocks.map((block) => (
                        block.type === 'text' ?
                            <Grid key={block.heading} size={{ md: 6, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: { sm: '50px', xs: '35px' } }}>
                                <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px' }} dangerouslySetInnerHTML={{ __html: block.text || '' }} />
                            </Grid> :
                            <Grid size={{ md: 8, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: { sm: '40px', xs: '45px' }, columnGap: '42px', rowGap: '25px', display: 'flex', flexWrap: 'wrap', justifyContent: { md: 'flex-start', xs: 'center' } }}>
                                {block.images?.map((picture, index) => <Box component="img" src={picture} alt={`Obrázek ${index}`} key={`subpagePicture-${index}`} sx={{ width: '100%', height: 'auto', maxWidth: { md: '335px', xs: '318px' }, borderRadius: { xl: '76px', xs: '20%' }, flex: '1', minWidth: { md: '0px', xs: 'unset' }, aspectRatio: '1/1', display: 'flex' }} />)}
                            </Grid>
                    ))}
                {/* Tlačítko zpět */}
                <Grid size={1} offset={{ md: 2, sm: 1, xs: 0 }} sx={{ backgroundColor: colors.primary, borderRadius: '24px', cursor: 'pointer', '&:hover': { filter: 'brightness(0.95)' }, display: { sm: 'none', xs: 'flex' }, alignItems: 'center', p: { sm: '9px', xs: '7px 10px' }, gap: { sm: '15px', xs: '13px' }, minWidth: { sm: '122px', xs: '90px' }, mt: '105px' }} onClick={() => { navigate('/poradna'); window.scrollTo(0, 0); }}>
                    <Box component="img" src='/arrow.svg' alt="Ikona šipky" sx={{ transform: 'scaleX(-1)', width: { sm: '31px', xs: '15px' }, height: { sm: '31px', xs: '15px' } }} />
                    <Typography sx={{ color: colors.secondary, fontSize: { sm: '18px', xs: '12px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: '22px' }}>
                        Zpět
                    </Typography>
                </Grid>
                {/* Služba ePoukaz online - mobile viditelná */}
                <Grid size={{ xl: 4, md: 5, sm: 10 }} offset={{ md: 2, sm: 1 }} sx={{ mt: '120px', display: { sm: 'block', xs: 'none' } }}>
                    <Typography component="h2" sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '41px', xs: '33px' }, maxWidth: '405px' }}>Využijte ePoukaz online, snadno rychle a z domova</Typography>
                    {/* Tlačítko */}
                    <Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', maxWidth: { md: '318px', xs: '288px' }, mt: { md: '30px', xs: '20px' }, '&:hover': { filter: 'brightness(0.95)' } }}>
                        <Typography sx={{ fontSize: '18px', fontFamily: 'Onest', fontWeight: '700', color: colors.text, mr: '10px' }}>Zadat ePoukaz online</Typography>
                        <Box component="img" src='/arrow_black.svg' alt="Ikona šipky" />
                    </Box>
                    <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { sm: '38px', xs: '28px' } }}>Služba <span style={{ fontWeight: '700' }}>ePoukaz online</span> Vám umožní vyřídit zdravotnické pomůcky jednoduše z domova. Na našem webu klikněte na ePoukaz online, zadejte kód poukazu, vyplňte své údaje a formulář odešlete.<br /><br /> Poukaz zkontrolujeme a co nejdříve se Vám ozveme s dalším postupem, termínem vyřízení a případným doplatkem.</Typography>
                </Grid>
            </Grid>
        </Grid >
    );
};