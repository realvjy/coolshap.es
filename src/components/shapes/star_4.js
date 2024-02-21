// Star 4
export default function Star_4(props) {
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
