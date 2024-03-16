import { lazy, useEffect, useState } from "react";
// import { CoolShapes } from '@/lib/data/cool-shapes';
import ReactDOMServer from 'react-dom/server';
import dynamic from 'next/dynamic';


import { Coolshape, Star1, Star2 } from "react-coolshapes"
import { renderToString } from 'react-dom/server'

const Shappp = lazy(() => import('react-coolshapes').then((module) => ({ default: module.Coolshape })));



const ShapeRenderer = ({ type, showNoise, index }) => {
    const [svgCode, setSvgCode] = useState(null);


    return (
        <>
            <Coolshape type={type} index={index} noise={showNoise} size={140} />
        </>
    )
};

export default ShapeRenderer;