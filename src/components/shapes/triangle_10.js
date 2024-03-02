export default function Triangle_10(props) {
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
            <g clipPath="url(#clip0_748_4905)">
                <mask
                    id="mask0_748_4905"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="174"
                    x="0"
                    y="13"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill="#fff" d="M100 13l100 174H0L100 13z"></path>
                </mask>
                <g mask="url(#mask0_748_4905)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FF6C02"
                        fillOpacity="0.19"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4905)">
                        <path fill="#FF58E4" d="M160 0H39v89h121V0z"></path>
                        <path fill="#FFE500" d="M158 115H41v105h117V115z"></path>
                        <path
                            fill="url(#paint0_linear_748_4905)"
                            d="M156-9H45v121h111V-9z"
                        ></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4905"
                    width="246"
                    height="354"
                    x="-23.5"
                    y="-71.5"
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
                        result="effect1_foregroundBlur_748_4905"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4905"
                    x1="132.967"
                    x2="48.334"
                    y1="-1.438"
                    y2="88.212"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF"></stop>
                    <stop offset="1" stopColor="#00F0FF"></stop>
                </linearGradient>
                <clipPath id="clip0_748_4905">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}