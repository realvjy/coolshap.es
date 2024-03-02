// Star 5
export default function Star_5(props) {
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
            <g clipPath="url(#clip0_748_4249)">
                <mask
                    id="mask0_748_4249"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M115.13 60.52L100 0 84.87 60.52 46.26 46.26l14.262 38.61L0 100l60.521 15.13-14.26 38.61 38.609-14.261L100 200l15.13-60.522 38.611 14.262-14.261-38.61L200 100l-60.521-15.13 14.261-38.61-38.61 14.26z"
                    ></path>
                </mask>
                <g mask="url(#mask0_748_4249)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_radial_748_4249)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint1_radial_748_4249)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_748_4249"
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
                    id="paint1_radial_748_4249"
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
                <clipPath id="clip0_748_4249">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}