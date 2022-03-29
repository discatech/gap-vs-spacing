import React, { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'

const SpacingGrid: FC = () => {
    return (
        <Grid
            container
            flexWrap="wrap"
            spacing={3}
            sx={{
                padding: 1,
                bgcolor: orange[100]
            }}
        >
            <Grid item>
                <Typography sx={{ bgcolor: orange[400] }}>Hello</Typography>
            </Grid>
            <Grid item>
                <Typography sx={{ bgcolor: orange[500] }}>World</Typography>
            </Grid>
        </Grid>
    )
}

export default SpacingGrid
