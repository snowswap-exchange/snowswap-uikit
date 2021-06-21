# ❄️ SnowSwap UIkit

SnowSwap UIkit is a set of React components and hooks used to build pages on SnowSwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add 'snowswap-uikit@https://github.com/snowswap-exchange/snowswap-uikit'`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'snowswap-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@pancakeswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
