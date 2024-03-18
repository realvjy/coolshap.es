import { useEffect, useState } from "react";
import { Coolshape, Star1, Star2 } from "coolshapes-react"

const ShapeRenderer = ({ type, showNoise, index, size }) => {

    return (
        <>
            <Coolshape type={type} index={index} noise={showNoise} size={size} />
        </>
    )
};

export default ShapeRenderer;