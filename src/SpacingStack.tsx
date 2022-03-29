import React, { FC } from 'react'
import { red } from '@mui/material/colors'
import { Stack, Typography } from '@mui/material'

const SpacingStack: FC = () => {
    return (
        <Stack padding={1} spacing={3} direction="row" bgcolor={red[200]} flexWrap="wrap">
            <Typography sx={{ bgcolor: red[400] }}>Hello</Typography>
            <Typography sx={{ bgcolor: red[500] }}>World</Typography>
        </Stack>
    )
}

export default SpacingStack
