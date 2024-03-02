export default function Polygon_3(props) {
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
            <g clipPath="url(#clip0_748_4387)">
                <mask
                    id="mask0_748_4387"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M130.537 0a26.002 26.002 0 0118.395 7.598l43.372 43.285a26.004 26.004 0 017.634 18.379l.062 61.275a26 26 0 01-7.598 18.395l-43.285 43.372a26.002 26.002 0 01-18.379 7.634L69.463 200a26.001 26.001 0 01-18.395-7.598L7.696 149.117a26 26 0 01-7.634-18.379L0 69.463a26.003 26.003 0 017.598-18.395L50.883 7.696A26.003 26.003 0 0169.262.062L130.537 0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4387)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_748_4387)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4387)">
                        <ellipse
                            cx="143.611"
                            cy="184.18"
                            fill="#FF58E4"
                            rx="114.679"
                            ry="58.126"
                            transform="rotate(-33.875 143.611 184.18)"
                        ></ellipse>
                        <ellipse
                            cx="68.482"
                            cy="38.587"
                            fill="#00F0FF"
                            rx="69.531"
                            ry="47.75"
                            transform="rotate(-26.262 68.482 38.587)"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4387"
                    width="401.584"
                    height="438.421"
                    x="-77.372"
                    y="-94.144"
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
                        result="effect1_foregroundBlur_748_4387"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4387"
                    x1="158.5"
                    x2="29"
                    y1="12.5"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF"></stop>
                    <stop offset="1" stopColor="#00F0FF"></stop>
                </linearGradient>
                <clipPath id="clip0_748_4387">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}