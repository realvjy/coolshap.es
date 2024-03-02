export default function Rectangle_4(props) {
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
            <g clipPath="url(#clip0_748_5099)">
                <mask
                    id="mask0_748_5099"
                    style={{ maskType: "alpha" }}
                    width="201"
                    height="201"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M200.001 100L100 0 0 100l100 100.001L200.001 100zM140 64a4 4 0 00-4-4H64a4 4 0 00-4 4v72a4 4 0 004 4h72a4 4 0 004-4V64z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_5099)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FFF500"
                        fillOpacity="0.23"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_5099)">
                        <path fill="#06F" d="M189 120H41v120h148V120z"></path>
                        <ellipse cx="56" cy="92" fill="#07FFE1" rx="84" ry="56"></ellipse>
                        <ellipse
                            cx="112"
                            cy="32.5"
                            fill="#FF00D6"
                            fillOpacity="0.7"
                            rx="88"
                            ry="49.5"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_5099"
                    width="388"
                    height="417"
                    x="-108"
                    y="-97"
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
                        result="effect1_foregroundBlur_748_5099"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_5099">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}