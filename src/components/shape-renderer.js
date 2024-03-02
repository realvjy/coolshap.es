// DynamicIconRenderer.js
import { useEffect, useState } from "react";
// import { CoolShapes } from '@/lib/data/cool-shapes';

import { Coolshape, Star1, Star2 } from "react-coolshapes"
import { renderToString } from 'react-dom/server'
import svgToJsx from 'svg-to-jsx';

const ShapeRenderer = ({ iconName, showNoise }) => {
    const [svgCode, setSvgCode] = useState(null);
    const str = renderToString(<Coolshape shape={iconName} noise={showNoise} size={140} />)

    useEffect(() => {
        const svgCode = renderToString(<Coolshape shape={iconName} noise={showNoise} size={140} />)
        setSvgCode(svgCode);
    }, [])

    svgToJsx(svgCode, function (error, jsx) {
        // console.log(jsx);
    });

    return (
        <>

            <Coolshape shape={iconName} noise={showNoise} size={140} />
        </>
    )
};

export default ShapeRenderer;