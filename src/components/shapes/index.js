import * as React from "react";

export const Star_1 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="uilogos-heart"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2128)">
                <mask
                    id="mask0_620_2128"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.797c8.22 8.22 20.701 9.966 45.664 13.461L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.665z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2128)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FFF9C5"
                        fillOpacity="0.44"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_620_2128)">
                        <path
                            fill="#00F0FF"
                            fillOpacity="0.85"
                            d="M158 22H15v108h143V22z"
                        ></path>
                        <path fill="#FF58E4" d="M209 101H52v116h157V101z"></path>
                        <ellipse
                            cx="156"
                            cy="80"
                            fill="#FFE500"
                            fillOpacity="0.79"
                            rx="83"
                            ry="57"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2128)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS01)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_620_2128"
                    width="344"
                    height="315"
                    x="-45"
                    y="-38"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_620_2128"
                        stdDeviation="30"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="feTurbS01"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.7"
                        numOctaves="5"
                        result="out1"
                        seed="4"
                    ></feTurbulence>
                    <feComposite
                        in="out1"
                        in2="SourceGraphic"
                        operator="in"
                        result="out2"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="out2"
                        mode="overlay"
                        result="out3"
                    ></feBlend>
                </filter>
                <clipPath id="clip0_620_2128">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export const Star_2 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="uilogos-heart"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_617_1875)">
                <mask
                    id="mask0_617_1875"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#D9D9D9"
                        d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50h100c27.614 0 50-22.386 50-50s-22.386-50-50-50c27.614 0 50-22.386 50-50S177.614 0 150 0H50z"
                    ></path>
                </mask>
                <g mask="url(#mask0_617_1875)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FFC700"
                        fillOpacity="0.112"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_617_1875)">
                        <path fill="#FFC700" d="M197.75 48.25H38v107h159.75v-107z"></path>
                        <path
                            fill="#18A0FB"
                            d="M129.25 18.375H3.125v104H129.25v-104z"
                        ></path>
                        <path
                            fill="#EE46D3"
                            d="M233.625 80.75H76.25v102.625h157.375V80.75z"
                        ></path>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_36_3348)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50h100c27.614 0 50-22.386 50-50s-22.386-50-50-50c27.614 0 50-22.386 50-50S177.614 0 150 0H50z"
                        filter="url(#feTurb03)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_617_1875"
                    width="310.5"
                    height="245"
                    x="-36.875"
                    y="-21.625"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_617_1875"
                        stdDeviation="20"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="feTurb03"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.7"
                        numOctaves="5"
                        result="out1"
                        seed="4"
                    ></feTurbulence>
                    <feComposite
                        in="out1"
                        in2="SourceGraphic"
                        operator="in"
                        result="out2"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="out2"
                        mode="overlay"
                        result="out3"
                    ></feBlend>
                </filter>
                <clipPath id="clip0_617_1875">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export const Star_3 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_617_2071)">
                <mask
                    id="mask0_617_2071"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <g clipPath="url(#clip1_617_2071)">
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.797c8.22 8.22 20.701 9.966 45.664 13.461L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.665z"
                            clipRule="evenodd"
                        ></path>
                    </g>
                </mask>
                <g mask="url(#mask0_617_2071)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FFF500"
                        fillOpacity="0.337"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_617_2071)">
                        <path
                            fill="#00C5DF"
                            d="M237.5 100.25H98.625V218H237.5V100.25z"
                        ></path>
                        <path fill="#FFC700" d="M228.625 0H71v109.875h157.625V0z"></path>
                        <path fill="#F2371F" d="M150 93H34v125h116V93z"></path>
                        <path fill="#18A0FB" d="M218 110h-94v135h94V110z"></path>
                        <path fill="#FF53EE" d="M160 39H48v120h112V39z"></path>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_36_3348)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50h100c27.614 0 50-22.386 50-50s-22.386-50-50-50c27.614 0 50-22.386 50-50S177.614 0 150 0H50z"
                        filter="url(#feTurb02)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_617_2071"
                    width="333.5"
                    height="375"
                    x="-31"
                    y="-65"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_617_2071"
                        stdDeviation="32.5"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="feTurb02"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.7"
                        numOctaves="5"
                        result="out1"
                        seed="4"
                    ></feTurbulence>
                    <feComposite
                        in="out1"
                        in2="SourceGraphic"
                        operator="in"
                        result="out2"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="out2"
                        mode="overlay"
                        result="out3"
                    ></feBlend>
                </filter>
                <clipPath id="clip1_617_2071">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export const Shape4 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_617_2043)">
                <mask
                    id="mask0_617_2043"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <g clipPath="url(#clip1_617_2043)">
                        <path
                            fill="#fff"
                            d="M15.535 188.281c40.654-30.669 60.98-46.003 84.465-46.003 23.485 0 43.812 15.334 84.466 46.003L200 200l-11.719-15.534c-30.669-40.654-46.003-60.981-46.003-84.466 0-23.484 15.334-43.811 46.003-84.465L200 0l-15.534 11.72C143.812 42.388 123.485 57.722 100 57.722c-23.484 0-43.811-15.334-84.465-46.003L0 0l11.72 15.535C42.387 56.19 57.721 76.515 57.721 100c0 23.485-15.334 43.812-46.002 84.465L0 200l15.535-11.719z"
                        ></path>
                    </g>
                </mask>
                <g mask="url(#mask0_617_2043)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path fill="red" fillOpacity="0.337" d="M200 0H0v200h200V0z"></path>
                    <g filter="url(#filter0_f_617_2043)">
                        <path fill="#00C5DF" d="M234 87H95v121h139V87z"></path>
                        <path
                            fill="#06F"
                            d="M226.375 59.75H92.125v135.5h134.25V59.75z"
                        ></path>
                        <path fill="#FFD600" d="M240 5.875H82.375V115.75H240V5.875z"></path>
                        <path fill="#00D67C" d="M172 93H72v105h100V93z"></path>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_36_3348)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50h100c27.614 0 50-22.386 50-50s-22.386-50-50-50c27.614 0 50-22.386 50-50S177.614 0 150 0H50z"
                        filter="url(#feTurb05)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_617_2043"
                    width="293"
                    height="327.125"
                    x="9.5"
                    y="-56.625"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_617_2043"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="feTurb05"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.7"
                        numOctaves="5"
                        result="out1"
                        seed="4"
                    ></feTurbulence>
                    <feComposite
                        in="out1"
                        in2="SourceGraphic"
                        operator="in"
                        result="out2"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="out2"
                        mode="overlay"
                        result="out3"
                    ></feBlend>
                </filter>
                <clipPath id="clip0_617_2043">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}