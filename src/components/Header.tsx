import { Box, Grid, Typography } from '@mui/material';
import { colors } from './../utils/globalVariables';
import { useState } from 'react';

export default function Header() {
	const [isOpened, setIsOpened] = useState(false);
	const mobileMenuItems = ['ePoukaz online', 'Zdravotnické potřeby', 'Obuv', 'Poradna', 'Pro subjekty', 'Doplňkový sortiment', 'Rozvoz', 'Dárkové poukazy', 'Platební metody', 'Kontakt'];

	const handleOpenButtonClick = () => {
		setIsOpened(!isOpened);
	}

	return (
		<Box id='header'>
			{/* Desktop header */}
			<Grid component="header" columns={14} size={14} container spacing={2} sx={{ display: { sm: 'flex', xs: 'none' } }}>
				{/* Levá část */}
				<Grid size={{ md: 7, sm: 7 }} spacing={2} container columns={{ md: 7, sm: 7 }} sx={{ backgroundColor: colors.primary, color: colors.text, height: '100vh', borderRadius: { lg: '0px 0px 300px 0px', md: '0px 0px 200px 0px', sm: '0px 0px 100px 0px' }, zIndex: 999 }}>
					<Grid size={{ md: 3, sm: 4 }} spacing={2} offset={{ xl: 3, sm: 2 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
						<Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: { md: '40px', sm: '10px' }, '@media (min-width: 1536px)': { gap: '65px' }, '@media (min-width: 1700px)': { gap: '100px' } }}>
							{/* Logo */}
							<Box component="img" src='/logo.png' sx={{ width: '100%', height: 'auto' }} alt='Logo ZDRAVPO' />
							{/* Základní navigace */}
							<Box sx={{ width: '100%' }}>
								<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
									<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>ePoukaz online</Typography>
									<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
								</Box>
								<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
									<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Zdravotnické<br />potřeby</Typography>
									<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
								</Box>
								<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
									<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Obuv</Typography>
									<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
								</Box>
								<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
									<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Poradna</Typography>
									<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
								</Box>
								<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
									<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Pro subjekty</Typography>
									<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
								</Box>
								<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
									<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Kontakt</Typography>
									<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
				{/* Pravá část */}
				<Grid size={5} spacing={2} columns={5} container>
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
								<Box component="img" src='floating_menu_close.svg' alt='Ikona zavření navigace' sx={{ width: '100%', height: '100%' }} />
								:
								<Box component="img" src='floating_menu_open.svg' alt='Ikona otevření navigace' sx={{ width: '100%', height: '100%' }} />
							}
						</Grid>
					</Grid>
				</Grid>
				{/* Rozšířená navigace */}
				{isOpened && (
					<Grid size={13} spacing={2} container columns={13} sx={{ backgroundColor: colors.primary, color: colors.text, height: '100vh', borderRadius: { lg: '0px 0px 300px 0px', md: '0px 0px 200px 0px', sm: '0px 0px 100px 0px' }, ml: '-16px', zIndex: 998, position: 'absolute' }}>
						<Grid size={{ md: 3, sm: 4 }} offset={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: { md: '40px', sm: '10px' }, '@media (min-width: 1536px)': { gap: '65px' }, '@media (min-width: 1700px)': { gap: '100px' } }}>
								<Box component="img" src='/logo.png' sx={{ width: '100%', height: 'auto', opacity: '0' }} alt='Logo ZDRAVPO' />
								<Box sx={{ pb: { lg: '144px', md: '124px', sm: '84px' }, '@media (min-width: 1536px)': { pb: '164px' }, '@media (min-width: 1700px)': { pb: '184px' } }}>
									<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
										<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Doplňkový<br />sortiment</Typography>
										<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
									</Box>
									<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
										<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Rozvoz</Typography>
										<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
									</Box>
									<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
										<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Dárkové poukazy</Typography>
										<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
									</Box>
									<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', pr: { md: '15px', sm: '5px' }, height: { lg: '70px', md: '60px', sm: '40px' }, '@media (min-width: 1536px)': { height: '80px' }, '@media (min-width: 1700px)': { height: '90px' } }}>
										<Typography sx={{ fontSize: { xl: '32px', lg: '24px', md: '20px', sm: '16px' }, color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: { xl: '35px', lg: '30px', md: '22px', sm: '16px' } }}>Platební metody</Typography>
										<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: { lg: '31px', sm: '25px' }, height: { lg: '31px', sm: '25px' } }}></Box>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				)}
			</Grid>
			{/* Mobilní header */}
			<Box component="header" sx={{ display: { sm: 'none', xs: 'flex' }, gap: '0px', flexDirection: 'column' }}>
				{/* Logo */}
				<Box component="img" src='logo_green.svg' alt='Logo ZDRAVPO' sx={{ width: '318px', height: 'auto', position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '85px', zIndex: 1 }} />
				{/* Fixní tlačítko pro navigaci */}
				<Box component="a" href="#header" onClick={handleOpenButtonClick} sx={{ zIndex: 1002, backgroundColor: 'transparent', cursor: 'pointer', position: 'fixed', height: '80px', width: '80px', right: '36px', top: '24vh', display: isOpened ? 'none' : 'unset' }}>
					<Box component="img" src='floating_menu_open_mobile.svg' alt='Ikona otevření navigace' sx={{ width: '100%', height: '100%' }} />
				</Box>
				{/* První část odkazů */}
				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
					<Box component="img" src='top_header_img_mobile.png' alt='Obrázek výdeje léků' sx={{ width: '100%', height: 'calc(100vh - 399px)', objectFit: 'cover' }} />
					<Box sx={{ backgroundColor: colors.primary, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pt: '69px', zIndex: 2 }}>
						<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, borderTop: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px' }}>
							<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>ePoukaz online</Typography>
							<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
						</Box>
						<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px' }}>
							<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>Zdravotnické<br />potřeby</Typography>
							<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
						</Box>
						<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px' }}>
							<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>Obuv</Typography>
							<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
						</Box>
						<Box component="img" src='decor_line.svg' alt='Dekorační linka' sx={{ maxWidth: '280px', pt: '45px', pb: '31px' }} />
					</Box>
				</Box>
				{/* Druhá část odkazů */}
				<Box sx={{ backgroundColor: colors.primary, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pb: '69px', mt: '-1px' }}>
					<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, borderTop: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px' }}>
						<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>Poradna</Typography>
						<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
					</Box>
					<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px' }}>
						<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>Pro subjekty</Typography>
						<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
					</Box>
					<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', borderBottom: '2px solid ' + colors.secondary, pr: '15px', height: '90px', width: '280px' }}>
						<Typography sx={{ fontSize: '32px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '35px' }}>Kontakt</Typography>
						<Box component="img" src='/arrow.svg' alt='Ikona Šipky' sx={{ width: '31px', height: '31px' }}></Box>
					</Box>
				</Box>
				<Box component="img" src='bottom_header_img_mobile.png' alt='Obrázek prodeje obuvy' sx={{ width: '100%', height: '452px', objectFit: 'cover', borderRadius: '0px 0px 110px 0px', top: '1220px' }} />
			</Box>
			{/* Kompletní navigace */}
			{isOpened && (
				<Box sx={{ display: { sm: 'none', xs: 'unset' } }}>
					<Box sx={{ position: 'fixed', width: '100vw', height: '100vh', backgroundColor: colors.primary, zIndex: 999, top: 0, left: 0, display: 'flex', alignItems: 'center', flexDirection: 'column', overflow: 'auto' }}>
						<Box component="img" src='/logo_short.png' sx={{ width: '200px', height: 'auto', mt: '80px' }} alt='Logo ZDRAVPO' />
						<Box sx={{ backgroundColor: colors.primary, width: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pt: '69px' }}>
							{mobileMenuItems.map((item, i) => (
								<Box component="a" href='#' key={i} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: i === mobileMenuItems.length - 1 ? 'none' : `1px solid ${colors.secondary}`, borderTop: i === 0 ? `1px solid ${colors.secondary}` : 'none', height: '65px', width: '100%', mb: i === mobileMenuItems.length - 1 ? '60px' : '0px' }}>
									<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '25px' }}>{item}</Typography>
								</Box>
							))}
						</Box>
					</Box>
					{/* Fixní tlačítko pro navigaci */}
					<Box component="a" href="#header" onClick={handleOpenButtonClick} sx={{ zIndex: 1000, backgroundColor: colors.secondary, cursor: 'pointer', position: 'fixed', height: '80px', width: '80px', right: '36px', bottom: '56px', display: isOpened ? 'flex' : 'none', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', color: colors.primary, fontFamily: 'Onest', fontWeight: '600', fontSize: '16px', opacity: 0.7 }}>
						ZAVŘÍT
					</Box>
				</Box>
			)}
		</Box >
	)
};
