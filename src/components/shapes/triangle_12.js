export default function Triangle_12(props) {
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
            <g clipPath="url(#clip0_748_4884)">
                <mask
                    id="mask0_748_4884"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M0 0l66.445 200H0V0zM66.777 0l66.446 200H66.777V0zM200 200L133.555 0v200H200z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4884)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path fill="#06F" d="M200 0H0v200h200V0z"></path>
                    <g filter="url(#filter0_f_748_4884)">
                        <path fill="#FFE500" d="M162 76H-7v150h169V76z"></path>
                        <ellipse
                            cx="108.777"
                            cy="175.536"
                            fill="#FF58E4"
                            rx="91.994"
                            ry="58.126"
                            transform="rotate(-33.875 108.777 175.536)"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4884"
                    width="358.765"
                    height="329.95"
                    x="-87"
                    y="-4"
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
                        result="effect1_foregroundBlur_748_4884"
                        stdDeviation="40"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_4884">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}