import { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { colors } from './../utils/globalVariables';

{/* Obsah benefitů */ }
const benefits = [
	{
		icon: '/counceling_icon.svg',
		alt: 'Ikona odborného poradenství',
		text: 'odborné<br />poradenství',
	},
	{
		icon: '/personal_approach_icon.svg',
		alt: 'Ikona osobního přístupu',
		text: 'osobní<br />přístup',
	},
	{
		icon: '/wide_selection_icon.svg',
		alt: 'Ikona širokého výběru',
		text: 'široký<br />výběr',
	},
	{
		icon: '/fksp_icon.svg',
		alt: 'Ikona FKSP',
		text: 'FKSP<br />a benefity',
	},
	{
		icon: '/company_teamwork_icon.svg',
		alt: 'Ikona firemní spolupráce',
		text: 'firemní<br />spolupráce',
	},
];

export default function Benefits() {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.8 }
		);
		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<Grid container columns={14} size={14} spacing={2} sx={{ mt: { xl: '173px', lg: '150px', md: '120px', xs: '110px' }, justifyContent: { sm: 'unset', xs: 'center' } }} ref={sectionRef}>
			<Grid size={{ xl: 10, sm: 12 }} offset={{ xl: 2, sm: 1 }} spacing={2} sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, justifyContent: { xl: 'space-between', sm: 'center' }, flexWrap: 'wrap', gap: { xl: '0px', xs: '35px' }, alignItems: { sm: 'center', xs: 'flex-start' } }}>
				{benefits.map((benefit, index) => (
					<Box key={benefit.icon} sx={{ display: 'flex', gap: { sm: '14px', xs: '22px' }, alignItems: 'center', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', transition: 'opacity 0.5s ease, transform 0.5s ease', transitionDelay: `${index * 150}ms` }}>
						<Box component="img" src={benefit.icon} sx={{ width: '50px', height: '50px' }} alt={benefit.alt} />
						<Typography sx={{ fontSize: '26px', color: colors.primary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '33px' }} dangerouslySetInnerHTML={{ __html: benefit.text }} />
					</Box>
				))}
			</Grid>
		</Grid>
	);
};