import styled from 'styled-components'
import global from '@/assets/global-style'

export const SliderContainer = styled.div `
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #fff;
  .mask {
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: ${global['theme-color']};
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: -60px;
      border-radius: 0 0 50% 50%;
      background-color: ${global['theme-color']};
    }
  }
  .slider-container {
    position: relative;
    width: 96%;
    height: 160px;
    border-radius: 6px;
    margin: auto;
    overflow: hidden;
    .slider-nav {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination-bullet {
    background-color: ${global['theme-color']}
  }
`