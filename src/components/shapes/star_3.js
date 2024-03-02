// Star 3
export default function Star_3(props) {
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
            <g clipPath="url(#clip0_748_4229)">
                <mask
                    id="mask0_748_4229"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M58.579 0L100 31.485 141.421 0l7.027 51.552L200 58.58 168.515 100 200 141.421l-51.552 7.027L141.421 200 100 168.515 58.579 200l-7.027-51.552L0 141.421 31.485 100 0 58.579l51.552-7.027L58.58 0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4229)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FFF500"
                        fillOpacity="0.44"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4229)">
                        <ellipse
                            cx="106"
                            cy="22.5"
                            fill="#FF00D6"
                            rx="88"
                            ry="49.5"
                        ></ellipse>
                        <ellipse
                            cx="64.5"
                            cy="155"
                            fill="#07FFE1"
                            rx="64.5"
                            ry="45"
                        ></ellipse>
                        <path fill="#06F" d="M218 126H100v120h118V126z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4229"
                    width="378"
                    height="433"
                    x="-80"
                    y="-107"
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
                        result="effect1_foregroundBlur_748_4229"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_4229">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}