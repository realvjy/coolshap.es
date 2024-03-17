export default function Wheel_6(props) {
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
            <g clipPath="url(#clip0_748_4819)">
                <mask
                    id="mask0_748_4819"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M75.863 110H0V90h75.853L35.855 50l14.142-14.142L90 75.863V0h20v75.861l40.002-40.004L164.144 50l-39.998 40H200v20h-75.864l40.008 40.01-14.142 14.142L110 124.148V200H90v-75.853l-40.003 40.005-14.142-14.142L75.863 110z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4819)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_radial_748_4819)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint1_radial_748_4819)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_748_4819"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(116.694 71.023 87.946) scale(199.234)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF500"></stop>
                    <stop offset="1" stopColor="#FF00D6" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1_radial_748_4819"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(48.452 -12.085 35.502) scale(223.143)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF00D6"></stop>
                    <stop offset="0.461" stopColor="#FF7171" stopOpacity="0.84"></stop>
                    <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
                </radialGradient>
                <clipPath id="clip0_748_4819">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}