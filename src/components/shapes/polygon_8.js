export default function Polygon_8(props) {
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
            <g mask="url(#mask0_748_4346)">
                <mask
                    id="mask0_748_4346"
                    style={{ maskType: "alpha" }}
                    width="175"
                    height="200"
                    x="13"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M100.397 0l87 50v100l-87 50-87-50V50l87-50z"
                    ></path>
                </mask>
                <path fill="#00B2FF" d="M200 0H0v200h200V0z"></path>
                <path
                    fill="url(#paint0_radial_748_4346)"
                    d="M200 0H0v200h200V0z"
                ></path>
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_748_4346"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-83.01 163.01 43.495) scale(184.874)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F7C617"></stop>
                    <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>
    );
}