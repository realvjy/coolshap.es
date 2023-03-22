import styled from "styled-components"


export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.deviceSizes.desktop};
`;