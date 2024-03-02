export default function Moon_5(props) {
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
            <g clipPath="url(#clip0_748_4518)">
                <mask
                    id="mask0_748_4518"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="154"
                    x="0"
                    y="23"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M50 102a75 75 0 00150 0H50zM0 98a75 75 0 11150 0H0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4518)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FF6C02"
                        fillOpacity="0.19"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4518)">
                        <path fill="#FF58E4" d="M112-30H-10v130h122V-30z"></path>
                        <path fill="#FFE500" d="M204 71H100v129h104V71z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4518"
                    width="339"
                    height="355"
                    x="-72.5"
                    y="-92.5"
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
                        result="effect1_foregroundBlur_748_4518"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_4518">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}