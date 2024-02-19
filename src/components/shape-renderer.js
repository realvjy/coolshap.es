// DynamicIconRenderer.js
import React from 'react';
import { CoolShapes } from '@/lib/data/cool-shapes';

const ShapeRenderer = ({ iconName, ...iconProps }) => {
    const SvgData = CoolShapes.find((config) => config.slug === iconName).svg;

    if (!SvgData) {
        return null;
    }
    return <SvgData {...iconProps} />;
};

export default ShapeRenderer;