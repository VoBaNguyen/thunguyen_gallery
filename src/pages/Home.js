import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from '../components/LazyLoad'

export default function Home({ chilren, title }) {
  useEffect(() => {
    document.title = title
  }, [title])

  // Write classname
  const timeline = css`
    display: flex;
    &:hover {
      .tl-item {
        width: 23.3333%;
      }
    }
  `
  const homeData = [
    { id: 1, year: 2020, title: 'Graduated!', href: '/graduate' },
    { id: 2, year: 2021, title: 'SAVARTI ♥', href: '/with-svi' },
    { id: 3, year: 2022, title: 'First TRIP in 2022', href: '/dalat' },
    {
      id: 4,
      year: '2020-...',
      title: 'Some random pictures',
      href: '/unrelease'
    }
  ]

  return (
    <Box id="timeline" css={timeline}>
      {homeData.map(({ id, year, title, href }) => {
        return <HomeItem id={id} year={year} title={title} href={href} />
      })}
    </Box>
  )
}

const HomeItem = ({ id, year, title, href }) => {
  const tlItem = css`
    transform: translate3d(0, 0, 0);
    position: relative;
    width: 25%;
    height: 85vh;
    min-height: 600px;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;

    &:before,
    &:after {
      transform: translate3d(0, 0, 0);
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &:after {
      background: transparentize(#031625, 0.15);
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 75%
      );
      z-index: 1;
      opacity: 0;
      transform: translate3d(0, 0, 0) translateY(50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover {
      width: 30% !important;

      &:after {
        opacity: 0;
      }

      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 0.25s;
      }

      .tl-content {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.75s ease 0.5s;
      }

      .tl-bg {
        filter: grayscale(0);
      }
    }
  `
  const tlContent = css`
    transform: translate3d(0, 0, 0) translateY(25px);
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 1.618em;
    top: 55%;
    opacity: 0;

    h1 {
      font-family: 'Pathway Gothic One', Helvetica Neue, Helvetica, Arial,
        sans-serif;
      text-transform: uppercase;
      color: #1779cf;
      font-size: 1.44rem;
      font-weight: normal;
    }
  `
  const tlYear = css`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50px;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    display: flex;
    align-items: center;

    p {
      font-family: 'Pathway Gothic One', Helvetica Neue, Helvetica, Arial,
        sans-serif;
      font-size: 1.728rem;
      line-height: 0;
    }
    &:hover {
      border-color: #ff889a;
      p {
        color: #ff889a;
        transition: all 0.4s ease;
      }
      transition: all 0.4s ease;
    }
  `
  const tlBg = css`
    transform: translate3d(0, 0, 0);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    transition: filter 0.5s ease;
    filter: grayscale(100%);
  `

  return (
    <Box className="tl-item" css={tlItem}>
      <LazyLoad delay={id * 0.1}>
        <Box
          className="tl-bg"
          css={tlBg}
          backgroundImage={`/images/home/home_${id}.jpg`}
        ></Box>
        <Box className="tl-year" css={tlYear}>
          <Link to={href}>
            <p className="f2 heading--sanSerif">{year}</p>
          </Link>
        </Box>
        <Box className="tl-content" css={tlContent}>
          <h1 className="f3 text--accent ttu">{title}</h1>
          <p>
            Mauris cursus magna at libero lobortis tempor. Suspendisse potenti.
            Aliquam interdum vulputate neque sit amet varius. Maecenas ac
            pulvinar nisi.
          </p>
        </Box>
      </LazyLoad>
    </Box>
  )
}
