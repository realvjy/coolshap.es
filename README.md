<p align=center><img width="480" src="https://lucide.dev/lucide-logo-repo.svg" alt="Lucide Logo"></p>
<p align="center">
  <a href="https://github.com/lucide-icons/lucide/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/coolshapes-react" alt="license"></a>
  <a href="https://www.npmjs.com/package/lucide"><img src="https://img.shields.io/npm/v/react-coolshapes" alt="npm package"></a>
  <a href="https://www.figma.com/community/plugin/939567362549682242/Lucide-Icons"><img src="https://img.shields.io/endpoint?logo=figma&label=installs&url=https://yuanqing.github.io/figma-plugins-stats/plugin/939567362549682242/installs.json" alt="figma installs"></a>
  <a href="https://github.com/lucide-icons/lucide/actions/workflows/release.yml"><img src="https://github.com/lucide-icons/lucide/actions/workflows/release.yml/badge.svg" alt="build status"></a>

</p>

# Coolshapes



### Why?

- More icons to work with: Lucide already has hundreds of icons more than Feather does.


## Table of Contents

- [Usage](#usage)
  - [Web](#web)
  - [React](#react)
- [Contributing](#contributing)
- [Community](#community)
- [License](#license)
- [Credits](#credits)
- [Sponsors](#sponsors)

## Usage

At its core, Lucide is a collection of [SVG](https://svgontheweb.com/#svg) files. This means that you can use Lucide icons in all the same ways you can use SVGs (e.g. `img`, `background-image`, `inline`, `object`, `embed`, `iframe`). Here's a helpful article detailing the many ways SVGs can be used on the web: [SVG on the Web – Implementation Options](https://svgontheweb.com/#implementation)

The following are additional ways you can use Lucide.
With the Javascript library you can easily incorporate the icon you want in your webpage.

### Web

Implementation of the lucide icon library for web applications.

```sh
npm install coolshapes-react
```

or

```sh
yarn add coolshapes-react
```

# Coolshapes React

Implementation of the lucide icon library for react applications.


## How to use

It's built with ES modules so it's completely tree-shakable.
Each icon can be imported as a react component.

### Example

You can pass additional props to adjust the icon.

```js
import { Coolshape } from 'coolshapes-react';

const App = () => {
  return <Coolshape type="star" size={48} noise={true} />;
};

export default App;
```

```js
import { Star, Ellipse } from 'coolshapes-react';

const App = () => {
  return <Star index="1" size={48} noise={true} />;
};

export default App;
```

### Props

| name          | type     | default      |
| ------------- | -------- | ------------ |
| `size`        | _Number_ | 200           |
| `type`        | _String_ | currentColor |
| `noise`       | _Boolean_| true         |
| `strokeWidth` | _Number_ | 2            |
| `strokeWidth` | _Number_ | 2            |
| `strokeWidth` | _Number_ | 2            |




#### With Dynamic Imports

Lucide react exports a dynamic import map `dynamicIconImports`. Useful for applications that want to show icons dynamically by icon name. For example when using a content management system with where icon names are stored in a database.

When using client side rendering, it will fetch the icon component when it's needed. This will reduce the initial bundle size.

The keys of the dynamic import map are the lucide original icon names.

Example with React suspense:

```tsx
import React, { lazy, Suspense } from 'react';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }}/>

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
}

export default Icon
```

##### NextJS Example

In NextJS, [the dynamic function](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic) can be used to dynamically load the icon component.

To make dynamic imports work with NextJS, you need to add `lucide-react` to the [`transpilePackages`](https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages) option in your `next.config.js` like this:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'] // add this
}

module.exports = nextConfig

```

You can then start using it:

```tsx
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />;
};

export default Icon;
```
