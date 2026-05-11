import { Box, Grid, Typography } from '@mui/material';
import { colors } from './../utils/globalVariables';

export default function Benefits() {
	return (
		<Grid container columns={14} size={14} spacing={2} sx={{ mt: { xl: '173px', lg: '150px', md: '120px', xs: '110px' }, justifyContent: { sm: 'unset', xs: 'center' } }}>
			{/* List benefitů */}
			<Grid size={{ xl: 10, sm: 12 }} offset={{ xl: 2, sm: 1 }} spacing={2} sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, justifyContent: { xl: 'space-between', sm: 'center' }, flexWrap: 'wrap', gap: { xl: '0px', xs: '35px' }, alignItems: { sm: 'center', xs: 'flex-start' } }}>
				{/* Benefit */}
				<Box sx={{ display: 'flex', gap: { sm: '14px', xs: '22px' }, alignItems: 'center' }}>
					<Box component="img" src='/counceling_icon.svg' sx={{ width: '50px', height: '50px' }} alt="Ikona odborného poradenství" />
					<Typography sx={{ fontSize: '26px', color: colors.primary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '33px' }}>
						odborné<br />poradenství
					</Typography>
				</Box>
				{/* Benefit */}
				<Box sx={{ display: 'flex', gap: { sm: '14px', xs: '22px' }, alignItems: 'center' }}>
					<Box component="img" src='/personal_approach_icon.svg' sx={{ width: '50px', height: '50px' }} alt="Ikona osobního přístupu" />
					<Typography sx={{ fontSize: '26px', color: colors.primary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '33px' }}>
						osobní<br />přístup
					</Typography>
				</Box>
				{/* Benefit */}
				<Box sx={{ display: 'flex', gap: { sm: '14px', xs: '22px' }, alignItems: 'center' }}>
					<Box component="img" src='/wide_selection_icon.svg' sx={{ width: '50px', height: '50px' }} alt="Ikona širokého výběru" />
					<Typography sx={{ fontSize: '26px', color: colors.primary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '33px' }}>
						široký<br />výběr
					</Typography>
				</Box>
				{/* Benefit */}
				<Box sx={{ display: 'flex', gap: { sm: '14px', xs: '22px' }, alignItems: 'center' }}>
					<Box component="img" src='/fksp_icon.svg' sx={{ width: '50px', height: '50px' }} alt="Ikona FKSP" />
					<Typography sx={{ fontSize: '26px', color: colors.primary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '33px' }}>
						FKSP<br />a benefity
					</Typography>
				</Box>
				{/* Benefit */}
				<Box sx={{ display: 'flex', gap: { sm: '14px', xs: '22px' }, alignItems: 'center' }}>
					<Box component="img" src='/company_teamwork_icon.svg' sx={{ width: '50px', height: '50px' }} alt="Ikona firemní spolupráce" />
					<Typography sx={{ fontSize: '26px', color: colors.primary, fontFamily: 'Onest', fontWeight: '600', lineHeight: '33px' }}>
						firemní<br />spolupráce
					</Typography>
				</Box>
			</Grid>
		</Grid>
	)
};