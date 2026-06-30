import { Box } from "@mui/material";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CounselSection from "../components/CounselSection";
import { useEffect, useState } from "react";

type Category = {
    name: string;
    slug: string;
    position: number;
};

type Article = {
    title: string;
    slug: string;
};

export default function Counseling() {
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://admin.zdravpopardubice.cz/api/categories', {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });
                const responseArticles = await fetch('https://admin.zdravpopardubice.cz/api/articles', {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`Nepodařilo se načíst data (Status: ${response.status})`);
                }
                if (!responseArticles.ok) {
                    throw new Error(`Nepodařilo se načíst data (Status: ${responseArticles.status})`);
                }

                const data = await response.json();
                setCategories(data);
                const dataArticles = await responseArticles.json();
                setArticles(dataArticles);
            } catch (err) {
                console.error("Chyba při API requestu:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return null;
    }

    return (
        <>
            <Header isHidden={true} categories={categories} />
            <CounselSection articles={articles} />
            <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <Benefits />
            </Box>
            <Box sx={{ mt: { lg: '265px', md: '200px', sm: '180px', xs: '-352px' } }}>
                <Footer isHidden={false} />
            </Box>
        </>
    )
};
