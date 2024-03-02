export default function Polygon_4(props) {
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
            <g clipPath="url(#clip0_748_4379)">
                <mask
                    id="mask0_748_4379"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M141.304 0l58.613 58.495.083 82.809-58.495 58.613-82.809.083L.083 141.505 0 58.696 58.495.083 141.304 0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4379)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_748_4379)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4379)">
                        <ellipse
                            cx="162.682"
                            cy="0.587"
                            fill="#FFD749"
                            rx="83"
                            ry="57"
                            transform="rotate(-33.875 162.682 .587)"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4379"
                    width="291.802"
                    height="272.361"
                    x="16.781"
                    y="-135.593"
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
                        result="effect1_foregroundBlur_748_4379"
                        stdDeviation="35"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4379"
                    x1="38"
                    x2="119"
                    y1="14.5"
                    y2="181.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE500"></stop>
                    <stop offset="1" stopColor="#07FFE1"></stop>
                </linearGradient>
                <clipPath id="clip0_748_4379">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg >
    );
}