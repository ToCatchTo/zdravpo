import { Box } from "@mui/material";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import PaymentInfo from "../components/PaymentInfo";
import Header from "../components/Header";
import { useState, useEffect } from "react";

type Category = {
    name: string;
    slug: string;
    position: number;
};

type PaymentMethodImage = {
    name: string;
    image: string;
};

type PaymentMethod = {
    title: string;
    text: string;
    images: PaymentMethodImage[];
}

export default function PaymentMethods() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const responseCategories = await fetch('https://admin.zdravpopardubice.cz/api/categories', {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });
                const response = await fetch('https://admin.zdravpopardubice.cz/api/payment-methods', {
                    method: 'GET',
                    headers: {
                        'X-AUTH-TOKEN': 'DSgqE5I8fKqhgZrJ1n423LM6jOc6TPgN',
                        'Content-Type': 'application/json'
                    }
                });

                if (!responseCategories.ok) {
                    throw new Error(`Nepodařilo se načíst data (Status: ${responseCategories.status})`);
                }
                if (!response.ok) {
                    throw new Error(`Nepodařilo se načíst data (Status: ${response.status})`);
                }

                const dataCategories = await responseCategories.json();
                setCategories(dataCategories);
                const data = await response.json();
                setPaymentMethods(data);
                console.log(data);
                console.log(dataCategories);
            } catch (err) {
                console.error("Chyba při API requestu:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return null;
    }

    return (
        <>
            <Header isHidden={true} categories={categories} />
            <PaymentInfo paymentMethods={paymentMethods} />
            <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                <Benefits />
            </Box>
            <Box sx={{ mt: { lg: '265px', md: '200px', sm: '180px', xs: '-353px' } }}>
                <Footer isHidden={false} />
            </Box>
        </>
    )
};
