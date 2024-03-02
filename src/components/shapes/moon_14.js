export default function Flower_2(props) {
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
            <g clipPath="url(#clip0_748_4428)">
                <mask
                    id="mask0_748_4428"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M34.315 0A117.157 117.157 0 10200 165.685L34.315 0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4428)">
                    <path fill="#000" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#EE46D3"
                        fillOpacity="0.79"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4428)">
                        <path fill="#FFC700" d="M137 60H26v140h111V60z"></path>
                        <path fill="#1BC47D" d="M236 106H78v136h158V106z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4428"
                    width="335"
                    height="307"
                    x="-36.5"
                    y="-2.5"
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
                        result="effect1_foregroundBlur_748_4428"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_4428">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}