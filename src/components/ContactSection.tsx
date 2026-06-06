import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";

export default function ContactSection() {

    return (
        <Grid container spacing={2} columns={14} sx={{ mt: { md: '100px', xs: '50px' }, mb: { sm: '0px', xs: '-125px' } }}>
            <Grid columns={12} size={{ sm: 12, xs: 14 }} offset={{ sm: 1, xs: 0 }} spacing={2} container sx={{ backgroundColor: colors.button, borderRadius: { xl: '300px', lg: '250px', md: '200px', sm: '100px', xs: '86px 86px 0px 0px' }, padding: { md: '109px 0px 133px 0px', sm: '94px 36px 94px 36px', xs: '136px 0px 37px 0px' }, gap: '0px' }}>
                {/* Levá horní část */}
                <Grid size={{ xl: 3, lg: 4, sm: 10, xs: 14 }} offset={{ xl: 2, sm: 1, xs: 0 }} spacing={2} sx={{ mr: '16px', alignItems: { lg: 'flex-start', sm: 'center', xs: 'center' }, display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '700', lineHeight: { lg: '76px', md: '58px', xs: '41px' }, textAlign: { md: 'left', xs: 'center' } }}>
                        Kontakty
                    </Typography>
                    <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline', mt: '53px', display: { sm: 'unset', xs: 'none' } }}>
                        Kontakt na prodejnu
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mt: { sm: '25px', xs: '48px' }, flexDirection: { lg: 'row', xs: 'column' }, width: 'fit-content' }}>
                        <Box component="img" src='/phone_icon_gray.svg' alt="Ikona telefonu" sx={{ width: '25px', height: '25px', backgroundColor: colors.text, borderRadius: '50%', padding: '7.5px' }} />
                        <Box>
                            <Box sx={{ fontSize: { sm: '20px', xs: '26px' }, color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: { sm: '30px', xs: '36px' }, display: { lg: 'inline-flex', xs: 'flex' }, whiteSpace: 'nowrap', flexDirection: { lg: 'row', xs: 'column' } }}>
                                <Box component="a" href="tel:+420739461835" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, color: colors.text }}>+420 739 461 835</Box>
                                <Typography sx={{ color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: '30px', fontSize: '20px', display: { lg: 'inline', xs: 'none' } }}>,&nbsp;</Typography>
                                <Box component="a" href="tel:+420466511693" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, color: colors.text }}>+420 466 511 693</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { sm: '16px', xs: '10px' }, mt: { xl: '37px', sm: '15px', xs: '45px' }, flexDirection: { lg: 'row', xs: 'column' } }}>
                        <Box component="img" src='/mail_icon_gray.svg' alt="Ikona emailu" sx={{ width: '30px', height: '30px', backgroundColor: colors.text, borderRadius: '50%', padding: '5px' }} />
                        <Box component="a" href="mailto:objednavky@zdravpopardubice.cz" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, color: colors.text }}>
                            <Typography sx={{ fontSize: { sm: '20px', xs: '18px' }, color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: '30px' }}>
                                objednavky@zdravpopardubice.cz
                            </Typography>
                        </Box>
                    </Box>
                    {/* Sekce s otevírací dobou */}
                    <Box sx={{ width: '100%', maxWidth: '252px', mt: { sm: '45px', xs: '48px' }, alignSelf: { lg: 'flex-start', sm: 'center', xs: 'flex-start' }, ml: { sm: '0px', xs: '36px' } }}>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline' }}>
                            Otevírací doba
                        </Typography>
                        <Box sx={{ display: 'flex', gap: { sm: '62px', xs: '10px' } }}>
                            <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '700', mt: { sm: '10px', xs: '13px' }, lineHeight: { sm: '29px', xs: '30px' } }}>
                                Pondělí<br />Úterý<br />Středa<br />Čtvrtek<br />Pátek<br />Sobota<br />Neděle
                            </Typography>
                            <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', mt: { sm: '10px', xs: '13px' }, lineHeight: { sm: '29px', xs: '30px' }, whiteSpace: 'nowrap' }}>
                                8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />8:00 - 17:00<br />ZAVŘENO<br />ZAVŘENO
                            </Typography>
                        </Box>
                    </Box>
                    {/* Fakturace */}
                    <Box sx={{ display: { sm: 'unset', xs: 'none' } }}>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', mt: '47px', textDecoration: 'underline' }}>
                            Fakturace
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', mt: '6px', lineHeight: '25px', whiteSpace: 'nowrap' }}>
                            ZDRAVPO Pardubice s.r.o.<br />17. listopadu 409, 530 02 Pardubice<br />IČ: 25291106, DIČ: CZ25291106
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', mt: '20px', lineHeight: '25px' }}>
                            ucto@zdravpopardubice.cz
                        </Typography>
                    </Box>
                    {/* Sociální sítě */}
                    <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', mt: '50px', textDecoration: 'underline', display: { sm: 'unset', xs: 'none' } }}>
                        Sledujte nás
                    </Typography>
                    <Box sx={{ display: { sm: 'flex', xs: 'none' }, gap: '32px', mt: '10px' }}>
                        <Box component="a" href="#" sx={{ textDecoration: 'none', '&:hover': { filter: 'brightness(0.95)' } }}>
                            <Box component="img" src='/instagram_icon_gray.svg' sx={{ width: '35px', height: 'auto', backgroundColor: colors.text, borderRadius: '50%', padding: '5px' }} alt='Instagram ikona' />
                        </Box>
                        <Box component="a" href="#" sx={{ textDecoration: 'none', '&:hover': { filter: 'brightness(0.95)' } }}>
                            <Box component="img" src='/facebook_icon_gray.svg' sx={{ width: '45px', height: '45px' }} alt="Facebook ikona" />
                        </Box>
                    </Box>
                </Grid>
                {/* Pravá horní část */}
                <Grid size={{ lg: 4, sm: 10, xs: 14 }} offset={{ xl: 1, lg: 2, sm: 1, xs: 0 }} spacing={2} sx={{ alignItems: { lg: 'flex-start', xs: 'center' }, display: 'flex', flexDirection: 'column' }}>
                    <Typography component="h1" sx={{ color: colors.primary, fontSize: { lg: '60px', md: '48px', xs: '32px' }, fontFamily: 'Onest', fontWeight: '700', lineHeight: { lg: '76px', md: '58px', xs: '41px' }, textAlign: { md: 'left', xs: 'center' }, visibility: 'hidden', display: { lg: 'unset', xs: 'none' } }}>
                        Kontakty
                    </Typography>
                    {/* Sekce s lokací */}
                    <Box sx={{ width: { xxl: '100%', xl: 'fit-content' }, whiteSpace: 'nowrap', mt: { sm: '53px', xs: '40px' }, alignSelf: { lg: 'flex-start', sm: 'center', xs: 'flex-start' }, ml: { sm: '0px', xs: '36px' } }}>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline' }}>
                            Najdete nás na
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: '24px', mt: '10px' }}>
                            17. listopadu 409<br />530 02 Pardubice
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline', mt: '30px', lineHeight: '23px', display: { sm: 'block', xs: 'none' } }}>
                            Nejbližší autobusové<br /> zastávky
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: '24px', mt: '18px', display: { sm: 'block', xs: 'none' } }}>
                            - Masarykovo náměstí<br />- 17. listopadu
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline', mt: '15px', display: { sm: 'block', xs: 'none' } }}>
                            Parkování
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: '24px', mt: '10px', display: { sm: 'block', xs: 'none' } }}>
                            - Podélné parkování<br />&nbsp;&nbsp;&nbsp;u silnice (30 min.)<br />- OC Palác Pardubice<br />- Parkoviště Parking point
                        </Typography>
                    </Box>
                    {/* Mapa */}
                    <Box
                        component="iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.8014213381243!2d15.769805190460307!3d50.03537402360793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dcc9509cc39bb%3A0xb9ffedbe24d8f6e!2sZDRAVPO%20Pardubice%20s.r.o.!5e0!3m2!1scs!2scz!4v1779884861082!5m2!1scs!2scz"
                        sx={{ border: 'none', width: '100%', borderRadius: { lg: '70px', sm: '45px', xs: '50px' }, mt: { sm: '65px', xs: '53px' }, minHeight: { sm: '326px', xs: '354px' }, mr: { sm: '0px', xs: '-36px' }, ml: { sm: '0px', xs: '-36px' } }}
                        allowFullScreen
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></Box>
                </Grid>
                {/* Spodní část */}
                <Grid size={{ xl: 8, lg: 10, sm: 10, xs: 14 }} offset={{ xl: 2, sm: 1, xs: 0 }} spacing={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'flex-start', xs: 'center' } }}>
                    <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', mt: '43px', textDecoration: 'underline', textAlign: { md: 'left', xs: 'center' }, display: { sm: 'unset', xs: 'none' } }}>
                        Naše prodejna
                    </Typography>
                    {/* Obrázky prodejny */}
                    <Box sx={{ mt: '43px', display: { sm: 'flex', xs: 'none' }, gap: { lg: '42px', sm: '20px' }, width: { md: '100%', sm: '70%' }, flexDirection: { md: 'row', xs: 'column' } }}>
                        <Box component="img" src='/shop_img.png' sx={{ width: '100%', height: '100%', borderRadius: { lg: '70px', sm: '50px' }, objectFit: 'cover', flex: 1, maxWidth: '100%', minWidth: '0px', aspectRatio: '1/1' }} alt="Obrázek prodejny" />
                        <Box component="img" src='/top_header_img_mobile.png' sx={{ width: '100%', height: '100%', borderRadius: { lg: '70px', sm: '50px' }, objectFit: 'cover', flex: 1, maxWidth: '100%', minWidth: '0px', aspectRatio: '1/1' }} alt="Obrázek prodejny" />
                        <Box component="img" src='/bottom_header_img_mobile.png' sx={{ width: '100%', height: '100%', borderRadius: { lg: '70px', sm: '50px' }, objectFit: 'cover', flex: 1, maxWidth: '100%', minWidth: '0px', aspectRatio: '1/1' }} alt="Obrázek prodejny" />
                    </Box>
                    {/* Obrázky prodejny - mobilní verze */}
                    <Box sx={{ mt: '57px', display: { sm: 'none', xs: 'flex' }, gap: '15px', overflow: 'hidden', justifyContent: 'center', width: '100%' }}>
                        <Box component="img" src='/bottom_header_img_mobile.png' sx={{ width: '205px', height: '205px', borderRadius: '50%', border: `3px solid ${colors.secondary}`, objectFit: 'cover' }} alt="Obrázek prodejny" />
                        <Box component="img" src='/shop_img.png' sx={{ width: '205px', height: '205px', borderRadius: '50%', border: `3px solid ${colors.secondary}`, objectFit: 'cover' }} alt="Obrázek prodejny" />
                        <Box component="img" src='/header_img.png' sx={{ width: '205px', height: '205px', borderRadius: '50%', border: `3px solid ${colors.secondary}`, objectFit: 'cover' }} alt="Obrázek prodejny" />
                    </Box>
                    {/* Sekce s lokací - mobilní verze */}
                    <Box sx={{ width: { xxl: '100%', xl: 'fit-content' }, whiteSpace: 'nowrap', mt: { sm: '53px', xs: '8px' }, display: { sm: 'none', xs: 'block' }, alignSelf: { sm: 'center', xs: 'flex-start' }, ml: { sm: '0px', xs: '36px' } }}>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline', mt: '30px', lineHeight: '23px' }}>
                            Nejbližší autobusové zastávky
                        </Typography>
                        <Typography sx={{ fontSize: { sm: '20px', xs: '16px' }, color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: { sm: '24px', xs: '21px' }, mt: { sm: '18px', xs: '10px' } }}>
                            - Masarykovo náměstí<br />- 17. listopadu
                        </Typography>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', textDecoration: 'underline', mt: { sm: '15px', xs: '35px' } }}>
                            Parkování
                        </Typography>
                        <Typography sx={{ fontSize: { sm: '20px', xs: '16px' }, color: colors.text, fontFamily: 'Onest', fontWeight: '400', lineHeight: { sm: '24px', xs: '21px' }, mt: { sm: '18px', xs: '10px' } }}>
                            - Podélné parkování u silnice (30 min.)<br />- OC Palác Pardubice<br />- Parkoviště Parking point
                        </Typography>
                    </Box>
                    {/* Fakturace - mobilní verze */}
                    <Box sx={{ display: { sm: 'none', xs: 'unset' }, alignSelf: { sm: 'center', xs: 'flex-start' }, ml: { sm: '0px', xs: '36px' } }}>
                        <Typography sx={{ fontSize: '20px', color: colors.text, fontFamily: 'Onest', fontWeight: '600', mt: { sm: '47px', xs: '38px ' }, textDecoration: 'underline' }}>
                            Fakturace
                        </Typography>
                        <Typography sx={{ fontSize: { sm: '20px', xs: '16px' }, color: colors.text, fontFamily: 'Onest', fontWeight: '400', mt: { sm: '6px', xs: '9px' }, lineHeight: { sm: '25px', xs: '21px' }, whiteSpace: 'nowrap' }}>
                            ZDRAVPO Pardubice s.r.o.<br />17. listopadu 409, 530 02 Pardubice<br />IČ: 25291106, DIČ: CZ25291106
                        </Typography>
                        <Typography sx={{ fontSize: { sm: '20px', xs: '16px' }, color: colors.text, fontFamily: 'Onest', fontWeight: '400', mt: { sm: '20px', xs: '0px' }, lineHeight: { sm: '25px', xs: '21px' } }}>
                            ucto@zdravpopardubice.cz
                        </Typography>
                    </Box>
                    {/* Sociální sítě - mobilní verze */}
                    <Box sx={{ display: { sm: 'none', xs: 'flex' }, gap: '35px', mt: '45px', alignSelf: { sm: 'center', xs: 'flex-start' }, ml: { sm: '0px', xs: '36px' } }}>
                        <Box component="a" href="#" sx={{ textDecoration: 'none', '&:hover': { filter: 'brightness(0.95)' } }}>
                            <Box component="img" src='/instagram_icon_gray.svg' sx={{ width: '35px', height: 'auto', backgroundColor: colors.text, borderRadius: '50%', padding: '5px' }} alt='Instagram ikona' />
                        </Box>
                        <Box component="a" href="#" sx={{ textDecoration: 'none', '&:hover': { filter: 'brightness(0.95)' } }}>
                            <Box component="img" src='/facebook_icon_gray.svg' sx={{ width: '45px', height: '45px' }} alt="Facebook ikona" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid >
    )
};