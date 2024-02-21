// Star 7
export default function Star_7(props) {
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