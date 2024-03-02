export default function Misc_9(props) {
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
            <g clipPath="url(#clip0_748_4999)">
                <mask
                    id="mask0_748_4999"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M8.475 78.884C27.008 22.9 70.833 4.108 89.905 1.464c110.239-15.283 132.313 92.87 90.046 148.772-36.448 48.204-100.638 57.186-139.16 44.676C6.86 183.894-11.983 140.686 8.475 78.884z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4999)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_748_4999)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4999)">
                        <ellipse
                            cx="143.777"
                            cy="167.536"
                            fill="#FF58E4"
                            rx="91.994"
                            ry="58.126"
                            transform="rotate(-33.875 143.777 167.536)"
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
                    id="filter0_f_748_4999"
                    width="384.137"
                    height="412.095"
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
                        result="effect1_foregroundBlur_748_4999"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4999"
                    x1="158.5"
                    x2="29"
                    y1="12.5"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF"></stop>
                    <stop offset="1" stopColor="#00F0FF"></stop>
                </linearGradient>
                <clipPath id="clip0_748_4999">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}