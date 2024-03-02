export default function Rectangle_5(props) {
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
            <g clipPath="url(#clip0_748_5088)">
                <mask
                    id="mask0_748_5088"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M130 0H70v70H0v60h70v70h60v-70h70V70h-70V0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_5088)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_radial_748_5088)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint1_radial_748_5088)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_5088)">
                        <path fill="#00F0FF" d="M151 82H49v110h102V82z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_5088"
                    width="262"
                    height="270"
                    x="-31"
                    y="2"
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
                        result="effect1_foregroundBlur_748_5088"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <radialGradient
                    id="paint0_radial_748_5088"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(116.694 71.023 87.946) scale(199.234)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF500"></stop>
                    <stop offset="1" stopColor="#FF00D6" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1_radial_748_5088"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(48.452 -12.085 35.502) scale(223.143)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF00D6"></stop>
                    <stop offset="0.461" stopColor="#FF7171" stopOpacity="0.84"></stop>
                    <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
                </radialGradient>
                <clipPath id="clip0_748_5088">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}