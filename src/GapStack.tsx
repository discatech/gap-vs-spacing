import React, { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { green } from '@mui/material/colors'

const GapStack: FC = () => {
    return (
        <Stack padding={1} gap={3} direction="row" bgcolor={green[100]} flexWrap="wrap">
            <Typography sx={{ bgcolor: green[400] }}>Hello</Typography>
            <Typography sx={{ bgcolor: green[500] }}>World</Typography>
        </Stack>
    )
}

export default GapStack
