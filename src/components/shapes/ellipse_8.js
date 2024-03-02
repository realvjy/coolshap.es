export default function Ellipse_8(props) {
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
            <g clipPath="url(#clip0_748_4745)">
                <mask
                    id="mask0_748_4745"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M139 39c0 21.54-17.461 39-39 39-21.54 0-39-17.46-39-39S78.46 0 100 0c21.539 0 39 17.46 39 39zM139 161c0 21.539-17.461 39-39 39-21.54 0-39-17.461-39-39s17.46-39 39-39c21.539 0 39 17.461 39 39zM161 139c-21.539 0-39-17.461-39-39 0-21.54 17.461-39 39-39s39 17.46 39 39c0 21.539-17.461 39-39 39zM39 139c-21.54 0-39-17.461-39-39 0-21.54 17.46-39 39-39s39 17.46 39 39c0 21.539-17.46 39-39 39z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4745)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_748_4745)"
                        fillOpacity="0.55"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4745)">
                        <path fill="#06F" d="M213 69H93v141h120V69z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4745"
                    width="245"
                    height="266"
                    x="30.5"
                    y="6.5"
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
                        result="effect1_foregroundBlur_748_4745"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4745"
                    x1="162"
                    x2="49.5"
                    y1="38"
                    y2="150.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF1F00"></stop>
                    <stop offset="1" stopColor="#FF58E4"></stop>
                </linearGradient>
                <clipPath id="clip0_748_4745">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}