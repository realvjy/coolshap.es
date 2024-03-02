export default function Wheel_1(props) {
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
            <g clipPath="url(#clip0_748_4854)">
                <mask
                    id="mask0_748_4854"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M117 0H83l12.468 89.06L41.31 17.269 17.268 41.31 89.06 95.468 0 83v34l89.06-12.468-71.791 54.158 24.041 24.042 54.158-71.792L83 200h34l-12.468-89.06 54.158 71.792 24.041-24.042-71.791-54.158L200 117V83l-89.06 12.468 71.792-54.158-24.042-24.042-54.158 71.792L117 0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4854)">
                    <path fill="#fff" d="M200.001 0h-200v200h200V0z"></path>
                    <path fill="#0E6FFF" d="M200.001 0h-200v200h200V0z"></path>
                    <g filter="url(#filter0_f_748_4854)">
                        <path fill="#8F5BFF" d="M231 114H9v116h222V114z"></path>
                        <ellipse
                            cx="53.016"
                            cy="0.222"
                            fill="#00F0FF"
                            rx="111.935"
                            ry="76.871"
                            transform="rotate(-15 53.016 .222)"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4854"
                    width="407.938"
                    height="429.502"
                    x="-116.938"
                    y="-139.502"
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
                        result="effect1_foregroundBlur_748_4854"
                        stdDeviation="30"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_4854">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}