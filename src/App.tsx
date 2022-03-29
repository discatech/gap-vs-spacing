import * as React from 'react'
import Container from '@mui/material/Container'
import GapGrid from './GapGrid'
import GapStack from './GapStack'
import SpacingStack from './SpacingStack'
import SpacingGrid from './SpacingGrid'
import { Stack } from '@mui/material'

export default function App() {
    return (
        <Container maxWidth="sm">
            <Stack sx={{ my: 4 }} gap={3}>
                Spacing - Grid
                <SpacingGrid />
                Gap - Grid
                <GapGrid />
            </Stack>
        </Container>
    )
}
