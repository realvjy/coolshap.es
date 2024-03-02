export default function Flower_5(props) {
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
            <g clipPath="url(#clip0_748_4458)">
                <mask
                    id="mask0_748_4458"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M200 0c0 110.457-89.543 200-200 200C0 89.543 89.543 0 200 0z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4458)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path fill="#F2371F" fillOpacity="0.2" d="M200 0H0v200h200V0z"></path>
                    <g filter="url(#filter0_f_748_4458)">
                        <path fill="#00C5DF" d="M176.75 67.875H60v118h116.75v-118z"></path>
                        <path fill="#FFC700" d="M175.75 73H24v100.5h151.75V73z"></path>
                        <path fill="#1BC47D" d="M222.125 26H90v101.75h132.125V26z"></path>
                        <path
                            fill="#00C5DF"
                            d="M205.375 91.625H78.25v124.5h127.125v-124.5z"
                        ></path>
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_f_748_4458"
                    width="323.125"
                    height="315.125"
                    x="-38.5"
                    y="-36.5"
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
                        result="effect1_foregroundBlur_748_4458"
                        stdDeviation="31.25"
                    ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_748_4458">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}