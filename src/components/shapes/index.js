import * as React from "react";

export const Star_1 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
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
                        baseFrequency="0.6"
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


// Star 2
export const Star_2 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2150)">
                <mask
                    id="mask0_620_2150"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="190"
                    x="0"
                    y="5"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M100 5l27.194 67.642L200 77.573l-56 46.737L161.803 195 100 156.242 38.197 195 56 124.31 0 77.573l72.806-4.93L100 5z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2150)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_620_2150)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_620_2150)">
                        <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
                        <path
                            fill="#0CE548"
                            fillOpacity="0.35"
                            d="M196 91H82v102h114V91z"
                        ></path>
                        <path
                            fill="#FFE500"
                            fillOpacity="0.74"
                            d="M113 80H28v120h85V80z"
                        ></path>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2150)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS02)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_620_2150"
                    width="278"
                    height="310"
                    x="-27"
                    y="-55"
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
                        result="effect1_foregroundBlur_620_2150"
                        stdDeviation="27.5"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_620_2150"
                    x1="186.5"
                    x2="37"
                    y1="37"
                    y2="186.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
                    <stop offset="1" stopColor="#00F0FF" stopOpacity="0.59"></stop>
                </linearGradient>
                <filter
                    id="feTurbS02"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_620_2150">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

// Star 3
export const Star_3 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2190)">
                <mask
                    id="mask0_620_2190"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M58.579 0L100 31.485 141.421 0l7.027 51.552L200 58.58 168.515 100 200 141.421l-51.552 7.027L141.421 200 100 168.515 58.579 200l-7.027-51.552L0 141.421 31.485 100 0 58.579l51.552-7.027L58.58 0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2190)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FFF500"
                        fillOpacity="0.44"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_620_2190)">
                        <ellipse
                            cx="106"
                            cy="22.5"
                            fill="#FF00D6"
                            rx="88"
                            ry="49.5"
                        ></ellipse>
                        <ellipse
                            cx="64.5"
                            cy="155"
                            fill="#07FFE1"
                            rx="64.5"
                            ry="45"
                        ></ellipse>
                        <path fill="#06F" d="M218 126H100v120h118V126z"></path>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2190)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS03)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_620_2190"
                    width="378"
                    height="433"
                    x="-80"
                    y="-107"
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
                        result="effect1_foregroundBlur_620_2190"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="feTurbS03"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_620_2190">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}


// Star 3
export const Star_4 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2213)">
                <mask
                    id="mask0_620_2213"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M15.535 188.281c40.654-30.669 60.98-46.003 84.465-46.003 23.485 0 43.812 15.334 84.466 46.003L200 200l-11.719-15.534c-30.669-40.654-46.003-60.981-46.003-84.466 0-23.484 15.334-43.811 46.003-84.465L200 0l-15.534 11.72C143.812 42.388 123.485 57.722 100 57.722c-23.484 0-43.811-15.334-84.465-46.003L0 0l11.72 15.535C42.387 56.19 57.721 76.515 57.721 100c0 23.485-15.334 43.812-46.002 84.465L0 200l15.535-11.719z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2213)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_radial_620_2213)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint1_radial_620_2213)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint2_radial_620_2213)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2213)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS04)"
                    />
                )}
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_620_2213"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-135.99 120.877 57.303) scale(143.21)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF00D6"></stop>
                    <stop offset="0.423" stopColor="#FF6CE7"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1_radial_620_2213"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-45.616 231.53 74.976) scale(263.059)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF6C02"></stop>
                    <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint2_radial_620_2213"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(46.063 -3.673 22.392) scale(209.693)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.276" stopColor="#07FFE1"></stop>
                    <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
                </radialGradient>
                <filter
                    id="feTurbS04"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_620_2213">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

// Star 5
export const Star_5 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2234)">
                <mask
                    id="mask0_620_2234"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M115.13 60.52L100 0 84.87 60.52 46.26 46.26l14.262 38.61L0 100l60.521 15.13-14.26 38.61 38.609-14.261L100 200l15.13-60.522 38.611 14.262-14.261-38.61L200 100l-60.521-15.13 14.261-38.61-38.61 14.26z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2234)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_radial_620_2234)"
                        fillOpacity="0.88"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint1_radial_620_2234)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2234)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS05)"
                    />
                )}
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_620_2234"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(45 -60.922 127.765) scale(111.723)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF3216"></stop>
                    <stop offset="0.46" stopColor="#FF3216" stopOpacity="0.68"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1_radial_620_2234"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-142.824 97.362 40.443) scale(93.5013)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF"></stop>
                    <stop offset="0.516" stopColor="#4F65FF" stopOpacity="0.68"></stop>
                    <stop offset="1" stopColor="#8F5BFF" stopOpacity="0"></stop>
                </radialGradient>
                <filter
                    id="feTurbS05"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_620_2234">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

// Star 5
export const Star_6 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2247)">
                <mask
                    id="mask0_620_2247"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M120 80L100 0 80 80 0 100l80 20 20 80 20-80 80-20-80-20z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2247)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FF6C02"
                        fillOpacity="0.19"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_620_2247)">
                        <path fill="#FF3216" d="M223 77H57v121h166V77z"></path>
                        <path fill="#FF58E4" d="M163-10H42v89h121v-89z"></path>
                        <path fill="#FFE500" d="M204 77H100v129h104V77z"></path>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2247)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS06)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_620_2247"
                    width="306"
                    height="341"
                    x="-20.5"
                    y="-72.5"
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
                        result="effect1_foregroundBlur_620_2247"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="feTurbS06"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_620_2247">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

// Star 5
export const Star_7 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2260)">
                <mask
                    id="mask0_620_2260"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="201"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M149.921 50C122.336 50.086 100 72.44 100 100c0-27.561-22.336-49.915-49.921-50C77.664 49.915 100 27.562 100 0c0 27.562 22.336 49.915 49.921 50zM99.842 100c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50 27.585-.085 49.921-22.438 49.921-50 0 27.562 22.336 49.915 49.921 50zM200 100c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50 27.585-.085 49.921-22.438 49.921-50 0 27.562 22.336 49.915 49.921 50zM149.921 150c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50C77.664 149.915 100 127.562 100 100c0 27.562 22.336 49.915 49.921 50z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2260)">
                    <path fill="#FFFDEA" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_radial_620_2260)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint1_radial_620_2260)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint2_radial_620_2260)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint3_radial_620_2260)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#clip0_620_2260)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS07)"
                    />
                )}
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_620_2260"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(81.99998 6 -6 81.99998 11.5 100)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00C5DF"></stop>
                    <stop offset="1" stopColor="#0CE548" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1_radial_620_2260"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(73.352 43.022 75.99) scale(162.304)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF58E4"></stop>
                    <stop offset="0.383" stopColor="#FF7776"></stop>
                    <stop offset="1" stopColor="#FFE500" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint2_radial_620_2260"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-86.927 139.95 32.493) scale(74.6073)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.355" stopColor="#00F0FF"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint3_radial_620_2260"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-123.011 105.927 34.745) scale(93.6122)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE500"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </radialGradient>
                <filter
                    id="feTurbS07"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_620_2260">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

// Star 5
export const Star_8 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2273)">
                <mask
                    id="mask0_620_2273"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M100 0c12.424 62.382 37.256 87.456 100 100-62.759 12.544-87.591 37.618-100 100-12.424-62.382-37.256-87.471-100-100C62.758 87.456 87.591 62.382 100 0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2273)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_620_2273)"
                        fillOpacity="0.55"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_620_2273)">
                        <path fill="#06F" d="M213 69H93v141h120V69z"></path>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2273)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS08)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_620_2273"
                    width="245"
                    height="266"
                    x="30.5"
                    y="6.5"
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
                        result="effect1_foregroundBlur_620_2273"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_620_2273"
                    x1="162"
                    x2="49.5"
                    y1="38"
                    y2="150.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF1F00"></stop>
                    <stop offset="1" stopColor="#FF58E4"></stop>
                </linearGradient>
                <filter
                    id="feTurbS08"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_620_2273">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

// Star 9
export const Star_9 = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            className="coolshapes"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_620_2286)">
                <mask
                    id="mask0_620_2286"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M199.686.315C144.773 55.57 144.877 144.877 200 200c-55.123-55.123-144.432-55.229-199.686-.315C55.227 144.432 55.123 55.123 0 0c55.123 55.123 144.432 55.23 199.686.315z"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2286)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_620_2286)"
                        fillOpacity="0.55"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_620_2286)">
                        <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
                        <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
                        <ellipse
                            cx="153.682"
                            cy="64.587"
                            fill="#FFD749"
                            rx="83"
                            ry="57"
                            transform="rotate(-33.875 153.682 64.587)"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2286)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS09)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_620_2286"
                    width="361.583"
                    height="346.593"
                    x="-72"
                    y="-61.593"
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
                        result="effect1_foregroundBlur_620_2286"
                        stdDeviation="30"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_620_2286"
                    x1="200"
                    x2="0"
                    y1="0"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF1F00"></stop>
                    <stop offset="1" stopColor="#FFD600"></stop>
                </linearGradient>
                <filter
                    id="feTurbS09"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_620_2286">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export const Test = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_627_189)">
                <mask
                    id="mask0_627_189"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="url(#paint0_linear_627_189)"
                        fillRule="evenodd"
                        d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.797c8.22 8.22 20.701 9.966 45.664 13.461L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.665z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask0_627_189)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint1_radial_627_189)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint2_radial_627_189)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint3_radial_627_189)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_627_189)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbT01)"
                    />
                )}
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_627_189"
                    x1="126"
                    x2="-5"
                    y1="-3"
                    y2="128"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF856"></stop>
                    <stop offset="1" stopColor="#FF58E4"></stop>
                </linearGradient>
                <radialGradient
                    id="paint1_radial_627_189"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-110.50017 -145.49948 325.46274 -247.17399 134.5 190.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.013" stopColor="#FF00D6"></stop>
                    <stop offset="1" stopColor="#FFF856" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint2_radial_627_189"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(127.225 74.965 66.165) scale(177.703)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF500"></stop>
                    <stop offset="1" stopColor="#FF58E4" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint3_radial_627_189"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(35.782 -18.123 65.71) scale(163.329)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#07FFE1"></stop>
                    <stop offset="1" stopColor="#FFE500" stopOpacity="0"></stop>
                </radialGradient>
                <filter
                    id="feTurbT01"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
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
                <clipPath id="clip0_627_189">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}