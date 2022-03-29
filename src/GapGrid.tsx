import React, { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

const GapGrid: FC = () => {
    return (
        <Grid
            container
            flexWrap="wrap"
            sx={{
                padding: 1,
                gap: 3,
                bgcolor: blue[100]
            }}
        >
            <Grid item>
                <Typography sx={{ bgcolor: blue[400] }}>Hello</Typography>
            </Grid>
            <Grid item>
                <Typography sx={{ bgcolor: blue[500] }}>World</Typography>
            </Grid>
        </Grid>
    )
}

export default GapGrid
