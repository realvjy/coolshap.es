// Star 2
export default function Star_2(props) {
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
            <g clipPath="url(#clip0_748_4335)">
                <mask
                    id="mask0_748_4335"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="190"
                    x="0"
                    y="5"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M100 5l27.194 67.642L200 77.573l-56 46.737L161.803 195 100 156.242 38.197 195 56 124.31 0 77.573l72.806-4.93L100 5z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4335)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_748_4335)"
                        fillOpacity="0.55"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4335)">
                        <path fill="#06F" d="M224 5H96v113h128V5z"></path>
                        <path fill="#FF00D6" d="M99 72H0v97h99V72z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4335"
                    width="364"
                    height="304"
                    x="-70"
                    y="-65"
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
                        result="effect1_foregroundBlur_748_4335"
                        stdDeviation="35"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4335"
                    x1="162"
                    x2="49.5"
                    y1="38"
                    y2="150.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF1F00"></stop>
                    <stop offset="1" stopColor="#FF58E4"></stop>
                </linearGradient>
                <clipPath id="clip0_748_4335">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}