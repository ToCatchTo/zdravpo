import { Box } from "@mui/material";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UniversalInfoSubpageSection from "../components/UniversalInfoSubpageSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Category = {
    name: string;
    slug: string;
    position: number;
};

type SubcategoryBlock = {
    type: "text" | "image";
    heading?: string;
    text?: string;
    images?: string[];
};

type Subcategory = {
    name: string;
    slug: string;
}

type SubcategoryDetail = {
    name: string;
    slug: string;
    photo: string;
    blocks: SubcategoryBlock[];
    subcategories?: Subcategory[];
};

export default function UniversalInfoSubpage() {
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);
    const [subcategory, setSubcategory] = useState<SubcategoryDetail | null>(null);
    const { slug } = useParams();

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
                const detailResponse = await fetch(`https://admin.zdravpopardubice.cz/api/categories/${slug}`, {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`Nepodařilo se načíst data (Status: ${response.status})`);
                }
                if (!detailResponse.ok) {
                    throw new Error(`Nepodařilo se načíst podkategorii (Status: ${detailResponse.status})`);
                }

                const data = await response.json();
                setCategories(data);
                const detailData: SubcategoryDetail = await detailResponse.json();
                setSubcategory(detailData);
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
            <UniversalInfoSubpageSection subcategory={subcategory} />
            <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <Benefits />
            </Box>
            <Box sx={{ mt: { lg: '265px', md: '200px', sm: '180px', xs: '-330px' } }}>
                <Footer isHidden={false} />
            </Box>
        </>
    )
};
