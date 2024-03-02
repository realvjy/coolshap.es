export default function Ellipse_1(props) {
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
            <g clipPath="url(#clip0_748_4808)">
                <mask
                    id="mask0_748_4808"
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
                        d="M0 100C0 44.772 44.772 0 100 0s100 44.772 100 100-44.772 100-100 100S0 155.228 0 100z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4808)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_748_4808)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4808)">
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
            <defs>
                <filter
                    id="filter0_f_748_4808"
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
                        result="effect1_foregroundBlur_748_4808"
                        stdDeviation="27.5"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4808"
                    x1="186.5"
                    x2="37"
                    y1="37"
                    y2="186.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
                    <stop offset="1" stopColor="#00F0FF" stopOpacity="0.59"></stop>
                </linearGradient>
                <clipPath id="clip0_748_4808">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}