import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { colors } from './../utils/globalVariables';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Category = {
	name: string;
	slug: string;
	position: number;
};

export default function Header({ isHidden }: { isHidden: boolean }) {
	const [isOpened, setIsOpened] = useState(false);
	const navigate = useNavigate();
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
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
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

	const dynamicCategories = categories.map(category => ({
		name: category.name,
		link: `/kategorie/${category.slug}`
	}));

	const mobileMenuItems = [
		{ name: 'ePoukaz online', link: 'https://app.epoukazonline.cz/c/c3fa0aef1889' },
		...dynamicCategories.slice(0, 2),
		{ name: 'Poradna', link: '/poradna' },
		...dynamicCategories.slice(2),
		{ name: 'Platební metody', link: '/platebni-metody' },
		{ name: 'Kontakt', link: '/kontakt' }
	];

	const menuItems = [
		{ name: 'ePoukaz online', link: 'https://app.epoukazonline.cz/c/c3fa0aef1889' },
		...dynamicCategories.slice(0, 2),
		{ name: 'Poradna', link: '/poradna' },
		...dynamicCategories.slice(2, 3),
		{ name: 'Kontakt', link: '/kontakt' }
	];

	const menuItemsExtended = [
		...dynamicCategories.slice(3, 6),
		{ name: 'Platební metody', link: '/platebni-metody' },
	];

	const handleOpenButtonClick = () => {
		setIsOpened(!isOpened);
	}

	return (
		<Box id='header' sx={{ height: isHidden ? 'auto' : { sm: '100vh', xs: 'auto' } }}>
			{/* Desktop header */}
			<Grid component="header" columns={14} size={14} container spacing={2} sx={{ display: { sm: 'flex', xs: 'none' } }}>
				{/* Levá část */}
				<Grid size={7} spacing={2} container columns={7} sx={{ backgroundColor: colors.primary, color: colors.text, height: '100vh', borderRadius: { lg: '0px 0px 300px 0px', md: '0px 0px 200px 0px', sm: '0px 0px 100px 0px' }, zIndex: 999, transform: isHidden ? (isOpened ? 'translateX(0)' : 'translateX(-100vw)') : 'translateX(0)', transition: 'transform 0.5s ease', position: 'absolute' }}>
					<Grid size={{ md: 3, sm: 4 }} spacing={2} offset={{ xl: 3, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
						<Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: { md: '40px', sm: '10px' }, '@media (min-width: 1536px)': { gap: '65px' }, '@media (min-width: 1700px)': { gap: '100px' } }}>
							{/* Logo */}
							<Box component="img" src='/logo_white.svg' sx={{ width: '100%', height: 'auto' }} alt='Logo ZDRAVPO' />
							{/* Základní navigace */}
							{loading ? (
								<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
									<Skeleton variant="rectangular" sx={{ width: '100%', height: { lg: '70px', md: '60px', sm: '40px' }, borderRadius: '20px' }} />
									<Skeleton variant="rectangular" sx={{ width: '100%', height: { lg: '70px', md: '60px', sm: '40px' }, borderRadius: '20px' }} />
									<Skeleton variant="rectangular" sx={{ width: '100%', height: { lg: '70px', md: '60px', sm: '40px' }, borderRadius: '20px' }} />
									<Skeleton variant="rectangular" sx={{ width: '100%', height: { lg: '70px', md: '60px', sm: '40px' }, borderRadius: '20px' }} />
									<Skeleton variant="rectangular" sx={{ width: '100%', height: { lg: '70px', md: '60px', sm: '40px' }, borderRadius: '20px' }} />
									<Skeleton variant="rectangular" sx={{ width: '100%', height: { lg: '70px', md: '60px', sm: '40px' }, borderRadius: '20px' }} />
								</Box>
							) : (
								<Box sx={{ width: '100%' }}>
									{menuItems.map((item, i) => (
										<Box component="a" target={item.name == 'ePoukaz online' ? '_blank' : '_self'} href={item.name == 'ePoukaz online' ? item.link : undefined} onClick={() => { navigate(item.name == 'ePoukaz online' ? '' : item.link); window.scrollTo(0, 0) }} key={`navlink-${i}`} sx={{ gap: '50px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: i === menuItems.length - 1 ? 'none' : `2px solid ${colors.secondary}`, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '&:hover': { textDecoration: 'underline' }, color: colors.secondary, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
											<Typography dangerouslySetInnerHTML={{ __html: item.name }} sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }} />
											<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
										</Box>
									))}
								</Box>
							)}
						</Box>
					</Grid>
				</Grid>
				{/* Pravá část */}
				<Grid size={5} spacing={2} columns={5} offset={7} container sx={{ display: isHidden ? 'none' : 'flex' }}>
					<Grid size={5} spacing={2} sx={{ ml: -2, display: 'flex', flexDirection: 'column' }}>
						{/* Obrázek headeru */}
						<Box component="img" src='header_img.png' alt='Obrázek výdeje léků' sx={{ width: '100%', height: 'auto', maxHeight: '539px' }} />
						{/* Nadpis */}
						<Box sx={{ mt: { lg: '50px', sm: '30px' }, ml: { lg: '55px', sm: '25px' }, '@media (min-width: 1380px)': { mt: '60px', ml: '65px' }, '@media (min-width: 1536px)': { mt: '80px', ml: '85px' } }}>
							<Typography variant='h1' sx={{ color: colors.primary, fontFamily: 'Onest', fontWeight: '700', maxWidth: '535px', fontSize: { md: '32px', sm: '21px' }, lineHeight: { md: '42px', sm: '27px' }, '@media (min-width: 1200px)': { fontSize: '42px', lineHeight: '52px' }, '@media (min-width: 1380px)': { fontSize: '48px', lineHeight: '60px' }, '@media (min-width: 1536px)': { fontSize: '52px', lineHeight: '65px' }, '@media (min-width: 1700px)': { fontSize: '60px', lineHeight: '76px' } }}>
								Vaše zdravotnické potřeby a obuv<br /> v Pardubicích
							</Typography>
						</Box>
						{/* Fixní tlačítko pro navigaci */}
						<Grid size={1} offset={4} component="a" href="#header" onClick={handleOpenButtonClick} sx={{ zIndex: 1000, backgroundColor: 'transparent', border: 'none', cursor: 'pointer', position: 'fixed', height: { xl: '119px', lg: '100px', md: '90px', sm: '70px' }, width: { xl: '119px', lg: '100px', md: '90px', sm: '70px' }, lg: '100px', p: '0px', right: { md: 'calc((100vw / 14) * 2 + 16px)', sm: 'calc((100vw / 14) * 2 + 16px)' }, bottom: { xl: '65px', lg: '30px', sm: '20px' } }}>
							{isOpened ?
								<Box component="img" src='floating_menu_close.svg' alt='Ikona zavření navigace' sx={{ width: '100%', height: '100%', '&:hover': { filter: 'brightness(0.95)' } }} />
								:
								<Box component="img" src='floating_menu_open.svg' alt='Ikona otevření navigace' sx={{ width: '100%', height: '100%', '&:hover': { filter: 'brightness(0.95)' } }} />
							}
						</Grid>
					</Grid>
				</Grid>
				{/* Rozšířená navigace */}
				<Grid size={13} spacing={2} container columns={13} sx={{ backgroundColor: colors.primary, color: colors.text, height: '100vh', borderRadius: { lg: '0px 0px 300px 0px', md: '0px 0px 200px 0px', sm: '0px 0px 100px 0px' }, ml: '-16px', zIndex: 998, position: 'absolute', transform: isOpened ? 'translateX(0)' : (isHidden ? 'translateX(-100vw)' : 'translateX(-50vw)'), transition: 'transform 0.5s ease' }}>
					<Grid size={{ md: 3, sm: 4 }} offset={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: { md: '40px', sm: '10px' }, '@media (min-width: 1536px)': { gap: '65px' }, '@media (min-width: 1700px)': { gap: '100px' } }}>
							<Box component="img" src='/logo_white.svg' sx={{ width: '100%', height: 'auto', opacity: '0' }} alt='Logo ZDRAVPO' />
							<Box>
								{menuItemsExtended.map((item, i) => (
									<Box component="a" onClick={() => { navigate(item.link); window.scrollTo(0, 0) }} key={`navlinkExtended-${i}`} sx={{ gap: '50px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: i === menuItemsExtended.length - 1 ? 'none' : `2px solid ${colors.secondary}`, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '&:hover': { textDecoration: 'underline' }, color: colors.secondary, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
										<Typography dangerouslySetInnerHTML={{ __html: item.name }} sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }} />
										<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
									</Box>
								))}
								{menuItems.length == menuItemsExtended.length ? (null) : (
									Array.from({ length: menuItems.length - menuItemsExtended.length }).map((_, i) => (
										<Box component="a" key={`navlinkExtended-${i}`} sx={{ gap: '50px', opacity: 0, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: i === menuItems.length - menuItemsExtended.length - 1 ? 'none' : `2px solid ${colors.secondary}`, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '&:hover': { textDecoration: 'underline' }, color: colors.secondary, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
											<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }} />
											<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
										</Box>
									)))}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			{/* Mobilní header */}
			<Box component="header" sx={{ display: { sm: 'none', xs: isHidden ? 'none' : 'flex' }, gap: '0px', flexDirection: 'column' }}>
				{/* Logo */}
				<Box component="img" src='/logo_green.svg' alt='Logo ZDRAVPO' sx={{ width: '318px', height: 'auto', position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '85px', zIndex: 1 }} />
				{/* Fixní tlačítko pro navigaci */}
				<Box component="a" href="#header" onClick={handleOpenButtonClick} sx={{ zIndex: 1002, backgroundColor: 'transparent', cursor: 'pointer', position: 'fixed', height: '80px', width: '80px', right: '36px', top: '24vh', display: isOpened ? 'none' : 'unset', '&:hover': { filter: 'brightness(0.95)' } }}>
					<Box component="img" src='/floating_menu_open_mobile.svg' alt='Ikona otevření navigace' sx={{ width: '100%', height: '100%' }} />
				</Box>
				{/* První část odkazů */}
				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
					<Box component="img" src='/top_header_img_mobile.png' alt='Obrázek výdeje léků' sx={{ width: '100%', height: 'calc(100dvh - 399px)', objectFit: 'cover' }} />
					<Box sx={{ backgroundColor: colors.primary, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pt: '69px', zIndex: 2 }}>
						<Box component="a" target="_blank" href="https://app.epoukazonline.cz/c/c3fa0aef1889" sx={{ gap: '50px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, borderTop: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
							<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>ePoukaz online</Typography>
							<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
						</Box>
						{loading &&
							<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', mt: '20px' }}>
								<Skeleton variant="rectangular" sx={{ width: '280px', height: '72px', borderRadius: '20px' }} />
								<Skeleton variant="rectangular" sx={{ width: '280px', height: '72px', borderRadius: '20px' }} />
							</Box>}
						{!loading && dynamicCategories.slice(0, 2).map((item, i) => (
							<Box component="a" key={i} onClick={() => { navigate(item.link); window.scrollTo(0, 0) }} sx={{ gap: '50px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
								<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>{item.name}</Typography>
								<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
							</Box>
						))}
						<Box component="img" src='decor_line.svg' alt='Dekorační linka' sx={{ maxWidth: '280px', pt: '45px', pb: '31px' }} />
					</Box>
				</Box>
				{/* Druhá část odkazů */}
				<Box sx={{ backgroundColor: colors.primary, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pb: '69px', mt: '-1px' }}>
					<Box component="a" onClick={() => { navigate('/poradna'); window.scrollTo(0, 0) }} sx={{ gap: '50px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, borderTop: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
						<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>Poradna</Typography>
						<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
					</Box>
					{dynamicCategories[2] && (
						<Box component="a" onClick={() => { navigate(dynamicCategories[2].link); window.scrollTo(0, 0) }} sx={{ gap: '50px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
							<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>{dynamicCategories[2].name}</Typography>
							<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
						</Box>
					)}
					<Box component="a" onClick={() => { navigate('/kontakt'); window.scrollTo(0, 0) }} sx={{ gap: '50px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
						<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>Kontakt</Typography>
						<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
					</Box>
				</Box>
				<Box component="img" src='bottom_header_img_mobile.png' alt='Obrázek prodeje obuvy' sx={{ width: '100%', height: '452px', objectFit: 'cover', borderRadius: '0px 0px 110px 0px', top: '1220px' }} />
			</Box>
			{/* Kompletní navigace */}
			<Box sx={{ display: { sm: 'none', xs: 'unset' } }}>
				<Box sx={{ position: 'fixed', width: '100vw', height: '100vh', backgroundColor: colors.primary, zIndex: 1002, top: 0, left: 0, display: 'flex', alignItems: 'center', flexDirection: 'column', overflow: 'auto', transform: isOpened ? 'translateY(0)' : 'translateY(-100vh)', transition: 'transform 0.5s ease' }}>
					<Box component="img" src='/logo_short.svg' sx={{ width: '200px', height: 'auto', mt: '80px' }} alt='Logo ZDRAVPO' />
					<Box sx={{ backgroundColor: colors.primary, width: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pt: '69px' }}>
						{mobileMenuItems.map((item, i) => (
							<Box component="a" target={item.name == 'ePoukaz online' ? '_blank' : '_self'} href={item.name == 'ePoukaz online' ? item.link : undefined} onClick={() => { navigate(item.name == 'ePoukaz online' ? '' : item.link); window.scrollTo(0, 0) }} key={`navlinkMobile-${i}`} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: i === mobileMenuItems.length - 1 ? 'none' : `1px solid ${colors.secondary}`, borderTop: i === 0 ? `1px solid ${colors.secondary}` : 'none', height: '65px', width: '100%', mb: i === mobileMenuItems.length - 1 ? '60px' : '0px', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
								<Typography dangerouslySetInnerHTML={{ __html: item.name }} sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', lineHeight: '25px' }} />
							</Box>
						))}
					</Box>
				</Box>
				{/* Fixní tlačítko pro navigaci */}
				<Box component="a" href="#header" onClick={handleOpenButtonClick} sx={{ zIndex: 1003, backgroundColor: colors.secondary, cursor: 'pointer', position: 'fixed', height: '80px', width: '80px', right: '36px', bottom: '56px', display: isOpened ? 'flex' : 'none', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', color: colors.primary, fontFamily: 'Onest', fontWeight: '600', fontSize: '16px', opacity: 0.7, '&:hover': { filter: 'brightness(0.95)' } }}>
					ZAVŘÍT
				</Box>
			</Box>
			{/* Logo - skrytá verze */}
			<Grid container columns={14} size={14} sx={{ mt: { sm: '116px', xs: '80px' }, justifyContent: { sm: 'flex-start', xs: 'center' }, display: isHidden ? 'flex' : 'none' }}>
				<Grid offset={{ sm: 3, xs: 0 }} onClick={() => navigate('/')} component="img" src='/logo_green.svg' alt='Obrázek loga' sx={{ width: '100%', height: 'auto', maxWidth: { md: '400px', sm: '250px', xs: '45%' }, display: isHidden ? 'unset' : 'none', cursor: 'pointer', '&:hover': { filter: 'brightness(0.95)' } }} />
			</Grid>
			{/* Fixní tlačítko pro navigaci - skrytá verze */}
			<Box component="a" href="#header" onClick={handleOpenButtonClick} sx={{ zIndex: 1000, backgroundColor: 'transparent', border: 'none', cursor: 'pointer', position: 'fixed', height: { xl: '119px', lg: '100px', md: '90px', sm: '70px' }, width: { xl: '119px', lg: '100px', md: '90px', sm: '70px' }, lg: '100px', p: '0px', right: { md: 'calc((100vw / 14) * 2 + 32px)', sm: 'calc((100vw / 14) * 2 + 16px)' }, top: { xl: '100px', lg: '109px', md: '114px', sm: '110px' }, display: isHidden ? { sm: 'unset', xs: 'none' } : 'none' }}>
				{isOpened ?
					<Box component="img" src='/floating_menu_close.svg' alt='Ikona zavření navigace' sx={{ width: '100%', height: '100%', '&:hover': { filter: 'brightness(0.95)' } }} />
					:
					<Box component="img" src='/floating_menu_open.svg' alt='Ikona otevření navigace' sx={{ width: '100%', height: '100%', '&:hover': { filter: 'brightness(0.95)' } }} />
				}
			</Box>
			{/* Fixní tlačítko pro navigaci - skrytá verze */}
			<Box component="a" href="#header" onClick={handleOpenButtonClick} sx={{ zIndex: 1002, backgroundColor: 'transparent', cursor: 'pointer', position: 'fixed', height: '80px', width: '80px', right: '36px', top: '204px', display: isOpened ? 'none' : (isHidden ? { sm: 'none', xs: 'unset' } : 'none'), '&:hover': { filter: 'brightness(0.95)' } }}>
				<Box component="img" src='/floating_menu_open_mobile.svg' alt='Ikona otevření navigace' sx={{ width: '100%', height: '100%' }} />
			</Box>
		</Box >
	)
};
