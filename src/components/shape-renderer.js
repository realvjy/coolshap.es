// DynamicIconRenderer.js
import React from 'react';
import { CoolShapes } from '@/lib/data/cool-shapes';

const ShapeRenderer = ({ iconName, ...iconProps }) => {
    const SVGData = CoolShapes.find((config) => config.slug === iconName).svg;

    if (!SVGData) {
        return null;
    }
    return <SVGData {...iconProps} />;
};

export default ShapeRenderer;