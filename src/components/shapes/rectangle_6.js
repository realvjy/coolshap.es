export default function Rectangle_6(props) {
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
            <g clipPath="url(#clip0_748_5083)">
                <mask
                    id="mask0_748_5083"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M150 0v50H50V0h100zM50 150V50H0v100h50zM150 150V50h50v100h-50zM150 150H50v50h100v-50z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_5083)">
                    <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_linear_748_5083)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_748_5083"
                    x1="38"
                    x2="119"
                    y1="14.5"
                    y2="181.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE500"></stop>
                    <stop offset="1" stopColor="#07FFE1"></stop>
                </linearGradient>
                <clipPath id="clip0_748_5083">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}