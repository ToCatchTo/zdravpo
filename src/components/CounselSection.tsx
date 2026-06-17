import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Article = {
    title: string;
    slug: string;
};

export default function CounselSection() {
    const navigate = useNavigate();

    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://admin.zdravpopardubice.cz/api/articles', {
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
                setArticles(data);
            } catch (err) {
                console.error("Chyba při API requestu:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <Grid container spacing={2} columns={14} sx={{ mt: { md: '100px', xs: '50px' } }}>
            <Grid columns={12} size={{ sm: 12, xs: 14 }} offset={{ sm: 1, xs: 0 }} spacing={2} container sx={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: colors.button, borderRadius: { lg: '300px', md: '200px', sm: '100px', xs: '86px' }, padding: { md: '113px 0px 217px 0px', sm: '135px 36px 169px 36px', xs: '135px 36px 369px 36px' }, rowGap: { lg: '90px', md: '60px' }, justifyContent: 'center' }}>
                <Grid size={{ md: 6, sm: 10, xs: 12 }}>
                    <Typography component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '600', lineHeight: { lg: '76px', md: '58px', xs: '41px' }, textAlign: 'center' }}>
                        Poradna - rádi<br /> Vám poradíme
                    </Typography>
                    {/* Načítání stav */}
                    {loading && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px', mt: { md: '70px', sm: '50px', xs: '30px' } }}>
                            {Array.from(new Array(5)).map((_, index) => (
                                <Skeleton variant="rectangular" key={index} width="100%" height={60} sx={{ borderRadius: '20px' }} />
                            ))}
                        </Box>
                    )}
                    {/* Zobrazení načtených článků */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mt: { md: '70px', sm: '50px', xs: '30px' } }}>
                        {!loading && articles.map((article) => (
                            <Box component="a" onClick={() => navigate(`/poradna/${article.slug}`)} key={article.slug} sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.secondary, borderRadius: '20px', padding: '15px', alignItems: 'center', '&:hover': { filter: 'brightness(0.95)' } }}>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Onest', fontWeight: '700', color: colors.text, mr: '10px' }}>
                                    {article.title}
                                </Typography>
                                <Box component="img" src='/arrow_black.svg' alt="Ikona šipky" />
                            </Box>
                        ))}
                    </Box>
                    <Grid size={{ lg: 8, sm: 12 }}>
                        <Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '400', lineHeight: '21px', mt: { md: '88px', xs: '42px' } }}>
                            Víme, že výběr zdravotnických pomůcek nebo vhodné zdravotní obuvi není vždy jednoduchý – zvlášť když řešíte novou nebo citlivou životní situaci. Proto jsme na našem webu připravili poradnu, která Vám pomůže lépe se zorientovat a udělat správné rozhodnutí v klidu a s jistotou.<br /><br /> Ve <span style={{ fontWeight: '700' }}>ZDRAVPO Pardubice s.r.o.</span> jsme tu pro Vás s respektem, trpělivostí a odbornými zkušenostmi. Rádi Vám pomůžeme vybrat vhodné řešení, vše srozumitelně vysvětlíme a společně najdeme cestu, která bude pro Vás nebo Vaše blízké skutečně přínosná.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
};