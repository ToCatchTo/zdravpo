import { Box } from "@mui/material";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UniversalInfoSection from "../components/UniversalInfoSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type NavCategory = {
    name: string;
    slug: string;
    position: number;
};

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

export default function UniversalInfoPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [navCategories, setNavCategories] = useState<NavCategory[]>([]);
    const { slug } = useParams();
    const [category, setCategory] = useState<Category | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const responseNav = await fetch('https://admin.zdravpopardubice.cz/api/categories', {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });
                const response = await fetch(`https://admin.zdravpopardubice.cz/api/categories/${slug}`, {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`Nepodařilo se načíst data (Status: ${response.status})`);
                }
                if (!responseNav.ok) {
                    throw new Error(`Nepodařilo se načíst data (Status: ${responseNav.status})`);
                }

                const dataNav = await responseNav.json();
                setNavCategories(dataNav);
                const data: Category = await response.json();
                setCategory(data);
            } catch (err) {
                console.error("Chyba při API requestu:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, [slug]);

    if (isLoading) {
        return null;
    }

    return (
        <>
            <Header isHidden={true} categories={navCategories} />
            <UniversalInfoSection category={category} />
            <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <Benefits />
            </Box>
            <Box sx={{ mt: { lg: '265px', md: '200px', sm: '180px', xs: '-389px' } }}>
                <Footer isHidden={false} />
            </Box>
        </>
    )
};
