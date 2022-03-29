import React, { FC } from 'react'
import { Grid, Stack, Typography } from '@mui/material'

interface TestProps {
    color: any
    component: 'stack' | 'grid'
    type: 'gap' | 'spacing'
}

const Test: FC<TestProps> = ({ color, component, type }) => {
    let element = <Grid container spacing={type === 'spacing' ? 3 : undefined} gap={type === 'gap' ? 3 : undefined} />

    if (component === 'stack') {
        element = (
            <Stack direction="row" spacing={type === 'spacing' ? 3 : undefined} gap={type === 'gap' ? 3 : undefined} />
        )
    }

    let children = [
        <Typography key="hello" sx={{ bgcolor: color[400] }}>
            Hello
        </Typography>,
        <Typography key="world" sx={{ bgcolor: color[500] }}>
            World
        </Typography>
    ]

    if (component === 'grid') {
        children = children.map((child) => {
            return (
                <Grid item sx={{ width: 'fit-content' }}>
                    {child}
                </Grid>
            )
        })
    }

    return React.cloneElement(element, {
        sx: {
            ...element.props?.sx,
            padding: 1,
            bgcolor: color[100],
            flexWrap: 'wrap'
        },
        children
    })
}

export default Test
