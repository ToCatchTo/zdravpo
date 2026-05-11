import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";

export default function Footer() {

	return (
		<Grid component="footer" container columns={14} spacing={2} sx={{ position: 'relative', gap: '0px', mt: { xl: '132px', xs: '125px' } }}>
			{/* Horní zelená část */}
			<Grid columns={12} size={12} offset={1} spacing={2} container sx={{ backgroundColor: colors.primary, position: 'relative', height: 'fit-content', borderRadius: '60px 60px 0px 0px', zIndex: 1001, justifyContent: 'center', display: { md: 'flex', xs: 'none' } }}>
				<Grid size={{ xxl: 10, xl: 11 }} offset={{ xxl: 1, xl: 0 }} spacing={2} sx={{ pt: '70px', display: 'flex', flexDirection: 'column', pb: { xl: '88px', sm: '38px', maxWidth: '1366px' } }}>
					{/* Logo */}
					<Box component="a" href="#header">
						<Box component="img" src='/logo.png' sx={{ width: '200px', height: 'auto' }} />
					</Box>
					{/* Seznam sekcí s informacemi */}
					<Box sx={{ display: { xxl: 'none', xs: 'flex' }, mt: '66px', flexDirection: { xl: 'row', sm: 'column' }, justifyContent: 'space-between', gap: { xl: '20px', sm: '50px' } }}>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
							{/* Kontakt sekce */}
							<Box>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline' }}>
									Kontakt na prodejnu
								</Typography>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: '15px' }}>
									<Box component="img" src='/phone_icon.svg' alt="Ikona telefonu" sx={{ width: '25px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '7.5px' }} />
									<Box>
										<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '30px' }}>
											+420 739 461 835<br />+420 466 511 693
										</Typography>
									</Box>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: { xl: '37px', sm: '15px' } }}>
									<Box component="img" src='/mail_icon.svg' alt="Ikona emailu" sx={{ width: '30px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '5px' }} />
									<Box component="a" href="mailto:objednavky@zdravpopardubice.cz" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
										<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '30px' }}>
											objednavky@zdravpopardubice.cz
										</Typography>
									</Box>
								</Box>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', mt: '54px', textDecoration: 'underline' }}>
									Fakturace
								</Typography>
								<Typography sx={{ fontSize: '16px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '200', mt: '10px', lineHeight: '21px' }}>
									ZDRAVPO Pardubice s.r.o.<br />17. listopadu 409, 530 02 Pardubice<br />IČ: 25291106, DIČ: CZ25291106<br />ucto@zdravpopardubice.cz
								</Typography>
							</Box>
							{/* Sekce s otevírací dobou */}
							<Box sx={{ width: '100%', maxWidth: '252px' }}>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline' }}>
									Otevírací doba
								</Typography>
								<Box sx={{ display: 'flex', gap: '65px' }}>
									<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', mt: '15px', lineHeight: '30px' }}>
										Pondělí<br />Úterý<br />Středa<br />Čtvrtek<br />Pátek<br />Sobota<br />Neděle
									</Typography>
									<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', mt: '15px', lineHeight: '30px', whiteSpace: 'nowrap' }}>
										8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />ZAVŘENO<br />ZAVŘENO
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', gap: '32px', mt: '43px' }}>
									<Box component="a" href="#" sx={{ textDecoration: 'none' }}>
										<Box component="img" src='/instagram_icon.svg' sx={{ width: '35px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '5px' }} alt='Instagram ikona' />
									</Box>
									<Box component="a" href="#" sx={{ textDecoration: 'none' }}>
										<Box component="img" src='/facebook_icon.svg' sx={{ width: '45px', height: '45px' }} alt="Facebook ikona" />
									</Box>
								</Box>
							</Box>
						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '45px', whiteSpace: 'nowrap', alignItems: 'center' }}>
							{/* Sekce s lokací */}
							<Box sx={{ pl: { xxl: '90px', xl: '0px' }, width: { xxl: '100%', sm: 'fit-content' }, height: 'fit-content' }}>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline' }}>
									Najdete nás na
								</Typography>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '25px', mt: '15px' }}>
									17. listopadu 409<br />530 02 Pardubice
								</Typography>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline', mt: '30px', lineHeight: '25px' }}>
									Nejbližší autobusové<br /> zastávky
								</Typography>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '25px', mt: '15px' }}>
									- Masarykovo náměstí<br />- 17. listopadu
								</Typography>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline', mt: '15px' }}>
									Parkování
								</Typography>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '25px', mt: '10px' }}>
									- Podélné parkování<br />u silnice (30 min.)<br />- OC Palác Pardubice<br />- Parkoviště Parking point
								</Typography>
							</Box>
							{/* Sekce s obrázky */}
							<Box sx={{ mt: { xl: '-94px', sm: '0px' }, display: 'flex', flexDirection: 'column', gap: '30px', width: '100%', maxWidth: '260px', flexShrink: { xxl: 0, sm: 1 } }}>
								<Box component="img" src='/shop_img.png' sx={{ width: '100%', height: 'auto', borderRadius: '28px' }} alt="Obrázek prodejny" />
								<Box component="img" src='/shop_location_img.png' sx={{ width: '100%', height: 'auto', borderRadius: '28px' }} alt="Obrázek lokace z map" />
							</Box>
						</Box>
					</Box>
					<Box sx={{ display: { xxl: 'flex', xs: 'none' }, mt: '66px', flexDirection: { xl: 'row', sm: 'column' }, justifyContent: 'space-between', gap: { xl: '0px', sm: '50px' } }}>
						{/* Kontakt sekce */}
						<Box>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline' }}>
								Kontakt na prodejnu
							</Typography>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: '15px' }}>
								<Box component="img" src='/phone_icon.svg' alt="Ikona telefonu" sx={{ width: '25px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '7.5px' }} />
								<Box>
									<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '30px' }}>
										+420 739 461 835<br />+420 466 511 693
									</Typography>
								</Box>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: '37px' }}>
								<Box component="img" src='/mail_icon.svg' alt="Ikona emailu" sx={{ width: '30px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '5px' }} />
								<Box component="a" href="mailto:objednavky@zdravpopardubice.cz" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
									<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '30px' }}>
										objednavky@zdravpopardubice.cz
									</Typography>
								</Box>
							</Box>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', mt: '54px', textDecoration: 'underline' }}>
								Fakturace
							</Typography>
							<Typography sx={{ fontSize: '16px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '200', mt: '10px', lineHeight: '21px' }}>
								ZDRAVPO Pardubice s.r.o.<br />17. listopadu 409, 530 02 Pardubice<br />IČ: 25291106, DIČ: CZ25291106<br />ucto@zdravpopardubice.cz
							</Typography>
						</Box>
						{/* Sekce s otevírací dobou */}
						<Box sx={{ pl: { xxl: '55px', xl: '0px' }, width: '100%', maxWidth: '252px' }}>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline' }}>
								Otevírací doba
							</Typography>
							<Box sx={{ display: 'flex', gap: '65px' }}>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', mt: '15px', lineHeight: '30px' }}>
									Pondělí<br />Úterý<br />Středa<br />Čtvrtek<br />Pátek<br />Sobota<br />Neděle
								</Typography>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', mt: '15px', lineHeight: '30px', whiteSpace: 'nowrap' }}>
									8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />ZAVŘENO<br />ZAVŘENO
								</Typography>
							</Box>
							<Box sx={{ display: 'flex', gap: '32px', mt: '43px' }}>
								<Box component="a" href="#" sx={{ textDecoration: 'none' }}>
									<Box component="img" src='/instagram_icon.svg' sx={{ width: '35px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '5px' }} alt='Instagram ikona' />
								</Box>
								<Box component="a" href="#" sx={{ textDecoration: 'none' }}>
									<Box component="img" src='/facebook_icon.svg' sx={{ width: '45px', height: '45px' }} alt="Facebook ikona" />
								</Box>
							</Box>
						</Box>
						{/* Sekce s lokací */}
						<Box sx={{ pl: { xxl: '90px', xl: '0px' }, width: { xxl: '100%', xl: 'fit-content' }, whiteSpace: 'nowrap' }}>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline' }}>
								Najdete nás na
							</Typography>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '25px', mt: '15px' }}>
								17. listopadu 409<br />530 02 Pardubice
							</Typography>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline', mt: '30px', lineHeight: '25px' }}>
								Nejbližší autobusové<br /> zastávky
							</Typography>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '25px', mt: '15px' }}>
								- Masarykovo náměstí<br />- 17. listopadu
							</Typography>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline', mt: '15px' }}>
								Parkování
							</Typography>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '25px', mt: '10px' }}>
								- Podélné parkování<br />u silnice (30 min.)<br />- OC Palác Pardubice<br />- Parkoviště Parking point
							</Typography>
						</Box>
						{/* Sekce s obrázky */}
						<Box sx={{ mt: { xl: '-94px', sm: '0px' }, display: 'flex', flexDirection: 'column', gap: '30px', width: '100%', maxWidth: '260px', flexShrink: { xxl: 0, sm: 1 }, pl: '10px' }}>
							<Box component="img" src='/shop_img.png' sx={{ width: '100%', height: 'auto', borderRadius: '28px' }} alt="Obrázek prodejny" />
							<Box component="img" src='/shop_location_img.png' sx={{ width: '100%', height: 'auto', borderRadius: '28px' }} alt="Obrázek lokace z map" />
						</Box>
					</Box>
				</Grid>
				{/* Horní obrázek s merchem */}
				<Box component="img" src='/merch_img.png' alt="Obrázek s merchem" sx={{ width: '144px', height: '144px', border: '3px solid ' + colors.secondary, borderRadius: '50%', position: 'absolute', top: '-75px', left: 'calc(50% - 72px)' }} />
			</Grid>
			{/* Horní zelená část na mobilu */}
			<Grid columns={{ sm: 10, xs: 14 }} size={{ sm: 10, xs: 14 }} offset={{ sm: 2, xs: 0 }} spacing={2} container sx={{ backgroundColor: colors.primary, position: { xl: 'absolute', sm: 'relative' }, height: 'fit-content', bottom: { xl: '50px', sm: '0px' }, borderRadius: '60px 60px 0px 0px', zIndex: 1001, justifyContent: { xxl: 'unset', xs: 'center' }, display: { md: 'none', xs: 'flex' } }}>
				<Box sx={{ pt: '70px', display: 'flex', flexDirection: 'column', pb: { xl: '88px', xs: '38px' }, alignItems: 'center', width: '100%' }}>
					{/* Logo */}
					<Box component="a" href="#header">
						<Box component="img" src='/logo.png' sx={{ width: '200px', height: 'auto', mt: '35px' }} />
					</Box>
					{/* Seznam sekcí s informacemi */}
					<Box sx={{ display: 'flex', mt: { sm: '66px', xs: '48px' }, flexDirection: 'column', width: '100%' }}>
						{/* Kontakt sekce */}
						<Box>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', flexDirection: 'column' }}>
								<Box component="img" src='/phone_icon.svg' alt="Ikona telefonu" sx={{ width: '25px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '7.5px' }} />
								<Box>
									<Typography sx={{ fontSize: '26px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '40px' }}>
										+420 739 461 835<br />+420 466 511 693
									</Typography>
								</Box>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', flexDirection: 'column', m: '40px 36px 0px 36px' }}>
								<Box component="img" src='/mail_icon.svg' alt="Ikona emailu" sx={{ width: '30px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '5px' }} />
								<Box component="a" href="mailto:objednavky@zdravpopardubice.cz" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, color: colors.secondary }}>
									<Typography sx={{ fontSize: '18px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '30px' }}>
										objednavky@zdravpopardubice.cz
									</Typography>
								</Box>
							</Box>
						</Box>
						{/* Sekce s otevírací dobou */}
						<Box sx={{ width: '100%', maxWidth: '252px', mt: '50px', ml: '36px' }}>
							<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline' }}>
								Otevírací doba
							</Typography>
							<Box sx={{ display: 'flex', gap: '10px' }}>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '600', mt: '17px', lineHeight: '30px' }}>
									Pondělí<br />Úterý<br />Středa<br />Čtvrtek<br />Pátek<br />Sobota<br />Neděle
								</Typography>
								<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', mt: '17px', lineHeight: '30px', whiteSpace: 'nowrap' }}>
									8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />ZAVŘENO<br />ZAVŘENO
								</Typography>
							</Box>
						</Box>
						<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline', mt: '45px', ml: '36px' }}>
							Najdete nás na
						</Typography>
						<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '25px', mt: '13px', ml: '36px' }}>
							17. listopadu 409<br />530 02 Pardubice
						</Typography>
						{/* Obrázky prodejny a lokace */}
						<Box component="img" src='/shop_location_img.png' sx={{ borderRadius: '50px', mt: '45px', m: { sm: '45px 36px 0px 36px', xs: '45px 0px 0px 0px' } }} alt="Obrázek lokace z map" />
						<Box sx={{ mt: '57px', display: 'flex', gap: '15px', overflow: 'hidden', justifyContent: 'center', width: '100%' }}>
							<Box component="img" src='/bottom_header_img_mobile.png' sx={{ width: '205px', height: '205px', borderRadius: '50%', border: `3px solid ${colors.secondary}`, objectFit: 'cover' }} alt="Obrázek prodejny" />
							<Box component="img" src='/shop_img.png' sx={{ width: '205px', height: '205px', borderRadius: '50%', border: `3px solid ${colors.secondary}`, objectFit: 'cover' }} alt="Obrázek prodejny" />
							<Box component="img" src='/header_img.png' sx={{ width: '205px', height: '205px', borderRadius: '50%', border: `3px solid ${colors.secondary}`, objectFit: 'cover' }} alt="Obrázek prodejny" />
						</Box>
						{/* Inforamce o lokaci */}
						<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline', mt: '44px', lineHeight: '25px', ml: '36px' }}>
							Nejbližší autobusové zastávky
						</Typography>
						<Typography sx={{ fontSize: '16px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '21px', mt: '10px', ml: '36px' }}>
							- Masarykovo náměstí<br />- 17. listopadu
						</Typography>
						<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', textDecoration: 'underline', mt: '35px', ml: '36px' }}>
							Parkování
						</Typography>
						<Typography sx={{ fontSize: '16px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '300', lineHeight: '21px', mt: '10px', ml: '36px' }}>
							- Podélné parkováníu silnice (30 min.)<br />- OC Palác Pardubice<br />- Parkoviště Parking point
						</Typography>
						{/* Sekce s fakturací */}
						<Typography sx={{ fontSize: '20px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '500', mt: '41px', textDecoration: 'underline', ml: '36px' }}>
							Fakturace
						</Typography>
						<Typography sx={{ fontSize: '16px', color: colors.secondary, fontFamily: 'Onest', fontWeight: '200', mt: '10px', lineHeight: '21px', ml: '36px' }}>
							ZDRAVPO Pardubice s.r.o.<br />17. listopadu 409, 530 02 Pardubice<br />IČ: 25291106, DIČ: CZ25291106<br />ucto@zdravpopardubice.cz
						</Typography>
						{/* Odkazy na sociální sítě */}
						<Box sx={{ display: 'flex', gap: '37px', mt: '41px', ml: '36px' }}>
							<Box component="a" href="#" sx={{ textDecoration: 'none' }}>
								<Box component="img" src='/instagram_icon.svg' sx={{ width: '35px', height: 'auto', backgroundColor: colors.secondary, borderRadius: '50%', padding: '5px' }} alt='Instagram ikona' />
							</Box>
							<Box component="a" href="#" sx={{ textDecoration: 'none' }}>
								<Box component="img" src='/facebook_icon.svg' sx={{ width: '45px', height: '45px' }} alt="Facebook ikona" />
							</Box>
						</Box>
					</Box>
				</Box>
				{/* Horní obrázek s merchem */}
				<Box component="img" src='/merch_img.png' alt="Obrázek s merchem" sx={{ width: { sm: '110px', xs: '90px' }, height: { sm: '110px', xs: '90px' }, border: '3px solid ' + colors.secondary, borderRadius: '50%', position: 'absolute', top: { sm: '-55px', xs: '-45px' }, left: { sm: 'calc(50% - 55px)', xs: 'calc(50% - 45px)' } }} />
			</Grid>
			{/* Dolní černá část */}
			<Grid size={14} sx={{ position: 'relative', height: '50px', zIndex: 1001, backgroundColor: colors.black }}>
				<Grid size={12} offset={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
					{/* Copyright */}
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
						<Box component="img" src='/copyright_icon.svg' sx={{ width: '20px', height: 'auto' }} alt="Ikona copyrightu" />
						<Typography sx={{ fontSize: '10px', color: colors.secondary, fontFamily: 'Onest', display: { sm: 'block', xs: 'none' } }}>
							tvoříme weby s radostí
						</Typography>
						<Typography sx={{ fontSize: '10px', color: colors.secondary, fontFamily: 'Onest', display: { sm: 'none', xs: 'block' } }}>
							copyright 2025, vytvoříme web i vám
						</Typography>
					</Box>
					{/* Logo */}
					<Box component="a" href="https://matfix.cz" target="_blank" sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
						<Box component="img" src='/matfix_logo.svg' sx={{ width: '57px', height: 'auto' }} alt="Logo výrobce webů" />
						<Box component="img" src='/footer_icon.svg' sx={{ width: '20px', height: 'auto' }} alt="Ikona patička" />
					</Box>
				</Grid>
			</Grid>
		</Grid >
	)
};