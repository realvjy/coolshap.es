export default function Star_1(props) {
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
            <g clipPath="url(#clip0_620_2128)">
                <mask
                    id="mask0_620_2128"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.797c8.22 8.22 20.701 9.966 45.664 13.461L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.665z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask0_620_2128)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="#FFF9C5"
                        fillOpacity="0.44"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <g filter="url(#filter0_f_620_2128)">
                        <path
                            fill="#00F0FF"
                            fillOpacity="0.85"
                            d="M158 22H15v108h143V22z"
                        ></path>
                        <path fill="#FF58E4" d="M209 101H52v116h157V101z"></path>
                        <ellipse
                            cx="156"
                            cy="80"
                            fill="#FFE500"
                            fillOpacity="0.79"
                            rx="83"
                            ry="57"
                        ></ellipse>
                    </g>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_620_2128)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbS01)"
                    />
                )}
            </g>
            <defs>
                <filter
                    id="filter0_f_620_2128"
                    width="344"
                    height="315"
                    x="-45"
                    y="-38"
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
                        result="effect1_foregroundBlur_620_2128"
                        stdDeviation="30"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="feTurbS01"
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
                <clipPath id="clip0_620_2128">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}