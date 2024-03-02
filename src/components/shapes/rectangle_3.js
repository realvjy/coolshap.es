export default function Rectangle_3(props) {
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
            <g clipPath="url(#clip0_748_5109)">
                <mask
                    id="mask0_748_5109"
                    style={{ maskType: "alpha" }}
                    width="202"
                    height="201"
                    x="-1"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill="#fff" d="M100 0l100 100-100 100.001L0 100 100 0z"></path>
                </mask>
                <g mask="url(#mask0_748_5109)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path fill="#FFF2AF" d="M200 0H0v200h200V0z"></path>
                    <g filter="url(#filter0_f_748_5109)">
                        <path
                            fill="#EE46D3"
                            d="M163.125 45.75H28.375v148.5h134.75V45.75z"
                        ></path>
                        <path
                            fill="#FFC700"
                            d="M121.25 13.625H8V144.75h113.25V13.625z"
                        ></path>
                        <path fill="#F2371F" d="M174.875 5h-120v146.375h120V5z"></path>
                        <path
                            fill="#FFC700"
                            d="M164.25 43.125H20.625v112H164.25v-112z"
                        ></path>
                        <path fill="#00C5DF" d="M200 85H61v105h139V85z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_5109"
                    width="317"
                    height="314.25"
                    x="-54.5"
                    y="-57.5"
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
                        result="effect1_foregroundBlur_748_5109"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_5109">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}