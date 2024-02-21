import * as React from "react";
import Star_1 from "./star_1";
import Star_2 from "./star_2";
import Star_3 from "./star_3";
import Star_4 from "./star_4";
import Star_5 from "./star_5";
import Star_6 from "./star_6";
import Star_7 from "./star_7";
import Star_8 from "./star_8";
import Star_9 from "./star_9";


export {
    Star_1,
    Star_2,
    Star_3,
    Star_4,
    Star_5,
    Star_6,
    Star_7,
    Star_8,
    Star_9,
};

export const Test = (props) => {
    const { showNoise } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 200}
            height={props.size || 200}
            fill="none"
            viewBox="0 0 200 200"
        >
            <g clipPath="url(#clip0_627_189)">
                <mask
                    id="mask0_627_189"
                    style={{ maskType: "alpha" }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="url(#paint0_linear_627_189)"
                        fillRule="evenodd"
                        d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.797c8.22 8.22 20.701 9.966 45.664 13.461L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.665z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask0_627_189)">
                    <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                    <path
                        fill="url(#paint1_radial_627_189)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint2_radial_627_189)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                    <path
                        fill="url(#paint3_radial_627_189)"
                        d="M200 0H0v200h200V0z"
                    ></path>
                </g>
            </g>
            <g style={{ mixBlendMode: "overlay" }} mask="url(#mask0_627_189)">
                {showNoise && (
                    <path
                        fill="gray"
                        stroke="transparent"
                        d="M200 0H0v200h200V0z"
                        filter="url(#feTurbT01)"
                    />
                )}
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_627_189"
                    x1="126"
                    x2="-5"
                    y1="-3"
                    y2="128"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF856"></stop>
                    <stop offset="1" stopColor="#FF58E4"></stop>
                </linearGradient>
                <radialGradient
                    id="paint1_radial_627_189"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(-110.50017 -145.49948 325.46274 -247.17399 134.5 190.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.013" stopColor="#FF00D6"></stop>
                    <stop offset="1" stopColor="#FFF856" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint2_radial_627_189"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(127.225 74.965 66.165) scale(177.703)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF500"></stop>
                    <stop offset="1" stopColor="#FF58E4" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint3_radial_627_189"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(35.782 -18.123 65.71) scale(163.329)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#07FFE1"></stop>
                    <stop offset="1" stopColor="#FFE500" stopOpacity="0"></stop>
                </radialGradient>
                <filter
                    id="feTurbT01"
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
                <clipPath id="clip0_627_189">
                    <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}