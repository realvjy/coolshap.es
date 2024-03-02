export default function Rectangle_2(props) {
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
            <g clipPath="url(#clip0_748_5121)">
                <mask
                    id="mask0_748_5121"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <rect width="200" height="200" fill="#fff" rx="32"></rect>
                </mask>
                <g mask="url(#mask0_748_5121)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
                    <g filter="url(#filter0_f_748_5121)">
                        <path fill="#FF58E4" d="M196 148H0v104h196V148z"></path>
                        <ellipse
                            cx="125.54"
                            cy="65.794"
                            fill="#00C5DF"
                            rx="89.568"
                            ry="61.511"
                            transform="rotate(-26.262 125.54 65.794)"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_5121"
                    width="370.372"
                    height="414.134"
                    x="-80"
                    y="-82.134"
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
                        result="effect1_foregroundBlur_748_5121"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_5121">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}