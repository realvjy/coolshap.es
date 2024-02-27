// DynamicIconRenderer.js
import React from 'react';
// import { CoolShapes } from '@/lib/data/cool-shapes';

import { Coolshape, Star1, Star2 } from "react-coolshapes"

const ShapeRenderer = ({ iconName, showNoise }) => {
    console.log(showNoise);
    return (
        <>
            <Coolshape shape={iconName} noise={showNoise} size={150} />
        </>
    )
};

export default ShapeRenderer;