// Star 9
export default function Star_9(props) {
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