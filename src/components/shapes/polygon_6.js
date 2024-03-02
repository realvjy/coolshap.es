export default function Polygon_6(props) {
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
            <g mask="url(#mask0_748_4364)">
                <mask
                    id="mask0_748_4364"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="190"
                    x="0"
                    y="5"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M100 5l100 72.573L161.803 195H38.197L0 77.573 100 5z"
                    ></path>
                </mask>
                <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                <path
                    fill="url(#paint0_linear_748_4364)"
                    fillOpacity="0.55"
                    d="M200 0H0v200h200V0z"
                ></path>
                <g filter="url(#filter0_f_748_4364)">
                    <path fill="#00F0FF" d="M158 113H11v90h147v-90z"></path>
                    <path fill="#18A0FB" d="M123 72H-20v108h143V72z"></path>
                    <ellipse
                        cx="62.382"
                        cy="69.794"
                        fill="#FFD749"
                        rx="60.387"
                        ry="39.91"
                        transform="rotate(-33.875 62.382 69.794)"
                    ></ellipse>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4364"
                    width="298"
                    height="300.438"
                    x="-80"
                    y="-37.438"
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
                        result="effect1_foregroundBlur_748_4364"
                        stdDeviation="30"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint0_linear_748_4364"
                    x1="200"
                    x2="0"
                    y1="0"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF1F00"></stop>
                    <stop offset="1" stopColor="#FFD600"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}