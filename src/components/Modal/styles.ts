import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from {
    display: none;
    top: 45%;
    opacity: 0;
  }

  to {
    display: block;
    top: 50%;
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  from {
    display: block;
    top: 50%;
    opacity: 1;
  }

  to {
    display: none;
    top: 45%;
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: none;

  &.active {
    display: block;

    animation: ${FadeIn} 0.3s;
    -moz-animation: ${FadeIn} 0.3s; /* Firefox */
    -webkit-animation: ${FadeIn} 0.3s; /* Safari and Chrome */
    -o-animation: ${FadeIn} 0.3s; /* Opera */
  }

  &.no-active {
    display: block;

    animation: ${FadeOut} 0.2s;
    -moz-animation: ${FadeOut} 0.2s; /* Firefox */
    -webkit-animation: ${FadeOut} 0.2s; /* Safari and Chrome */
    -o-animation: ${FadeOut} 0.2s; /* Opera */
  }
`;
