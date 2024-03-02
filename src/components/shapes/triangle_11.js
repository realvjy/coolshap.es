export default function Triangle_11(props) {
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
            <g clipPath="url(#clip0_748_4895)">
                <mask
                    id="mask0_748_4895"
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
                        d="M100 100L0 42v116l100-58zm0 0L158 0H42l58 100zm0 0l100-58v116l-100-58zm0 0l58 100H42l58-100z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4895)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_748_4895)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4895)">
                        <path fill="#FF37BB" d="M174 34H26v175h148V34z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4895"
                    width="308"
                    height="335"
                    x="-54"
                    y="-46"
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
                        result="effect1_foregroundBlur_748_4895"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4895"
                    x1="158.5"
                    x2="29"
                    y1="12.5"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF"></stop>
                    <stop offset="1" stopColor="#00F0FF"></stop>
                </linearGradient>
                <clipPath id="clip0_748_4895">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}