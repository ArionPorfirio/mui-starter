import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import theme from '@styles/theme'

const cache = createCache({ key: 'css', prepend: true })
cache.compat = true

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Project 01</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
