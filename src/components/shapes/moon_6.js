export default function Flower_10(props) {
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
            <g clipPath="url(#clip0_748_4508)">
                <mask
                    id="mask0_748_4508"
                    style={{ maskType: "alpha" }}
                    width="170"
                    height="200"
                    x="15"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M155.71 170.711A100.003 100.003 0 0184.999 200v-99.629A69.999 69.999 0 0115 170V30a70 70 0 0169.999 69.629V0a100 100 0 0170.711 170.711z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4508)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FFC700"
                        fillOpacity="0.112"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_748_4508)">
                        <path fill="#FFC700" d="M197.75 48.25H38v107h159.75v-107z"></path>
                        <path fill="#18A0FB" d="M116.125 9H-10v104h126.125V9z"></path>
                        <path fill="#EE46D3" d="M208 100H51v119h157V100z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4508"
                    width="318"
                    height="310"
                    x="-60"
                    y="-41"
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
                        result="effect1_foregroundBlur_748_4508"
                        stdDeviation="25"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_4508">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}