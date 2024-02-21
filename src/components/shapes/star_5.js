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
            <g clipPath="url(#clip0_620_2234)">
                <mask
                    id="mask0_620_2234"
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
                <g mask="url(#mask0_620_2234)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint0_radial_620_2234)"
                        fillOpacity="0.88"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint1_radial_620_2234)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2234)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS05)"
                    />
                )}
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_620_2234"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(45 -60.922 127.765) scale(111.723)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF3216"></stop>
                    <stop offset="0.46" stopColor="#FF3216" stopOpacity="0.68"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1_radial_620_2234"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-142.824 97.362 40.443) scale(93.5013)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0E6FFF"></stop>
                    <stop offset="0.516" stopColor="#4F65FF" stopOpacity="0.68"></stop>
                    <stop offset="1" stopColor="#8F5BFF" stopOpacity="0"></stop>
                </radialGradient>
                <filter
                    id="feTurbS05"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        baseFrequency="0.6"
                        numOctaves="5"
                        result="out1"
                        seed="4"
                    ></feTurbulence>
                    <feComposite
                        in="out1"
                        in2="SourceGraphic"
                        operator="in"
                        result="out2"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="out2"
                        mode="overlay"
                        result="out3"
                    ></feBlend>
                </filter>
                <clipPath id="clip0_620_2234">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}