
"use client";

import {
  BorderGradient, ConicGradient,
  Container, GhostButton, GradientBG, GridBackground,
  LinkButton, MaskGradient, SocialShare, ToggleButton
} from "@/styles/ReuseableStyle";
import styled from "styled-components"

export default function HeaderBG() {
  return (
    <>
      <GridBackground />
      <GradientBG>
        <BorderGradient />
        <MaskGradient>
          <ConicGradient className="rotate-gradient" />
        </MaskGradient>
      </GradientBG>
    </>
  )
}