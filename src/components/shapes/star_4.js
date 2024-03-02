// Star 4
export default function Star_4(props) {
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
            <g clipPath="url(#clip0_748_4239)">
                <mask
                    id="mask0_748_4239"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="201"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M15.535 188.281c40.654-30.669 60.98-46.003 84.465-46.003 23.485 0 43.812 15.334 84.466 46.003L200 200l-11.719-15.534c-30.669-40.654-46.003-60.981-46.003-84.466 0-23.484 15.334-43.811 46.003-84.465L200 0l-15.534 11.72C143.812 42.388 123.485 57.722 100 57.722c-23.484 0-43.811-15.334-84.465-46.003L0 0l11.72 15.535C42.387 56.19 57.721 76.515 57.721 100c0 23.485-15.334 43.812-46.002 84.465L0 200l15.535-11.719z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4239)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
                    <g filter="url(#filter0_f_748_4239)">
                        <ellipse cx="100" cy="130" fill="#FFD749" rx="82" ry="43"></ellipse>
                        <ellipse cx="41" cy="167" fill="#F2371F" rx="82" ry="43"></ellipse>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4239"
                    width="343"
                    height="243"
                    x="-101"
                    y="27"
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
                        result="effect1_foregroundBlur_748_4239"
                        stdDeviation="30"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_4239">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}
