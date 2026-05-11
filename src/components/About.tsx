import { Box, Grid, Typography } from "@mui/material";
import { colors } from "../utils/globalVariables";

export default function About() {

	return (
		<Grid container columns={14} size={14} spacing={2} sx={{ mt: { lg: '151px', xs: '100px' } }}>
			<Box sx={{ position: 'relative', display: 'flex', gap: { xl: '85px', sm: '65px' }, flexDirection: { md: 'row', xs: 'column' }, width: '100%' }}>
				{/* Levá část s obrázkem */}
				<Grid size={7} component="img" src="/about_img.png" sx={{ display: { md: 'unset', xs: 'none' }, borderRadius: { xl: '0px 300px 300px 0px', sm: '0px 200px 200px 0px' }, objectFit: 'cover', position: 'absolute', bottom: { xxl: '-815px', xs: '50%' }, transform: { xxl: 'translateY(0%)', xs: 'translateY(50%)' }, height: { xxl: 'unset', xs: '100%' }, maxHeight: '1948px' }} alt="Obrázek prodejny" />
				{/* Pravá část */}
				<Grid size={{ lg: 5, md: 6, xs: 12 }} offset={{ md: 7, xs: 1 }} sx={{ justifyContent: 'center', display: 'flex', pl: { lg: '85px', md: '45px', xs: '0px' } }}>
					<Box sx={{ width: 'fit-content' }}>
						{/* Nadpis */}
						<Typography sx={{ color: colors.primary, fontSize: { lg: '32px', xs: '26px' }, fontWeight: '600', fontFamily: 'Onest', lineHeight: { lg: '41px', xs: '33px' }, maxWidth: { sm: 'unset', xs: '318px' }, width: 'fit-content' }}>
							Využijte ePoukaz online,<br />snadno rychle a z domova
						</Typography>
						{/* Tlačítko */}
						<Box component="a" href='#' sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: colors.button, borderRadius: '20px', padding: '15px', alignItems: 'center', maxWidth: { md: '318px', xs: '288px' }, mt: { md: '30px', xs: '20px' }, '&:hover': { filter: 'brightness(0.95)' } }}>
							<Typography sx={{ fontSize: '18px', fontFamily: 'Onest', fontWeight: '600', color: colors.text }}>
								Zadat ePoukaz online
							</Typography>
							<Box component="img" src='/arrow_black.svg' alt="Ikona šipky" />
						</Box>
						{/* Sekce textu na mobil */}
						<Typography sx={{ display: { md: 'none', xs: 'block' }, color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '500', maxWidth: { sm: '536px', xs: '318px' }, pl: { md: '10px', xs: '0px' }, pt: '28px', lineHeight: '21px' }}>
							Služba <span style={{ fontWeight: '700' }}>ePoukaz online</span> Vám umožní vyřídit zdravotnické pomůcky jednoduše z domova. Na našem webu klikněte na ePoukaz online, zadejte kód poukazu, vyplňte své údaje a formulář odešlete.<br /><br /> Poukaz zkontrolujeme a co nejdříve se Vám ozveme s dalším postupem, termínem vyřízení a případným doplatkem.
						</Typography>
						{/* Sekce textu */}
						<Typography sx={{ color: colors.primary, fontSize: '26px', fontWeight: '600', fontFamily: 'Onest', lineHeight: '33px', mt: { xl: '143px', xs: '110px' }, maxWidth: { sm: 'unset', xs: '318px' }, width: 'fit-content' }}>
							Zdravotnické potřeby Pardubice –<br /> ZDRAVPO Pardubice s.r.o.
						</Typography>
						<Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '500', maxWidth: { sm: '536px', xs: '318px' }, pl: { md: '10px', xs: '0px' }, pt: '20px', lineHeight: '21px' }}>
							<span style={{ fontWeight: '700' }}>ZDRAVPO Pardubice s.r.o.</span> je od roku 2025 nově pod vedením nové majitelky specializovaná prodejna zdravotnických potřeb a zdravotní obuvi v Pardubicích. Jsme tu pro všechny, kteří hledají odborné poradenství, kvalitní produkty a lidský přístup – bez ohledu na věk či aktuální zdravotní situaci. Nabízíme volný prodej i výdej pomůcek na poukaz.<br /><br /> Pomáháme lidem v náročných životních obdobích i těm, kteří chtějí svému zdraví předcházet s respektem a péčí. Naší hlavní působností je město Pardubice a celý Pardubický kraj.
						</Typography>
						{/* Sekce textu */}
						<Typography sx={{ color: colors.primary, fontSize: '26px', fontWeight: '600', fontFamily: 'Onest', lineHeight: '33px', mt: { md: '50px', xs: '40px' }, maxWidth: { sm: 'unset', xs: '318px' }, width: 'fit-content' }}>
							Odborná prodejna zdravotnických<br /> potřeb v Pardubicích
						</Typography>
						<Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '500', maxWidth: { sm: '540px', xs: '318px' }, pl: { md: '10px', xs: '0px' }, pt: '20px', lineHeight: '21px' }}>
							Nabízíme <span style={{ fontWeight: '700' }}>široký sortiment zdravotnických pomůcek a zdravotní obuvi</span> pro děti, dospělé, seniory i pro firmy nebo státní zařízení. Každému zákazníkovi věnujeme individuální pozornost – víme, že zdravotní potřeby nejsou běžným nákupem, ale často součástí citlivé životní situace.
						</Typography>
						{/* Sekce textu */}
						<Typography sx={{ color: colors.primary, fontSize: '26px', fontWeight: '600', fontFamily: 'Onest', lineHeight: '33px', mt: { md: '50px', xs: '40px' }, maxWidth: { sm: 'unset', xs: '318px' }, width: 'fit-content' }}>
							Jsme tu pro Vás
						</Typography>
						<Typography sx={{ color: colors.text, fontSize: '16px', fontFamily: 'Onest', fontWeight: '500', maxWidth: { sm: '536px', xs: '318px' }, pl: { md: '10px', xs: '0px' }, pt: '20px', lineHeight: '21px' }}>
							Zdraví je citlivé téma. A my si toho vážíme.<Box component="br" sx={{ display: { sm: 'unset', xs: 'none' } }} /> V ZDRAVPO Pardubice s.r.o. věříme, že profesionální služba může být zároveň lidská, vstřícná a důstojná.<br /><br /> Pokud hledáte <span style={{ fontWeight: '700' }}>zdravotnické potřeby v Pardubicích</span>, kvalitní zdravotní obuv nebo odborné poradenství, rádi Vás přivítáme osobně v naší prodejně v ulici 17. listopadu 409.<br /><br /><span style={{ fontWeight: '700' }}> ZDRAVPO Pardubice s.r.o. – odborná péče o Vaše zdraví v Pardubicích a Pardubickém kraji.</span>
						</Typography>
					</Box>
				</Grid>
			</Box>
		</Grid>
	)
};
