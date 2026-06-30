import { useEffect, useState } from "react";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Category = {
    name: string;
    slug: string;
    position: number;
};

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://admin.zdravpopardubice.cz/api/categories', {
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
                setCategories(data);
            } catch (err) {
                console.error("Chyba při API requestu:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (isLoading) {
        return null;
    }

    return (
        <>
            <Header isHidden={false} categories={categories} />
            <Benefits />
            <About />
            <Footer isHidden={false} />
        </>
    )
};
