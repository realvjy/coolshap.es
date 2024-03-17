# <p align=center>Coolshapes</p>
<p align="center">
  <a href="https://github.com/realvjy/coolshapes-react/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/coolshapes-react" alt="license"></a>
  <a href="https://www.npmjs.com/package/coolshapes-react"><img src="https://img.shields.io/npm/v/coolshapes-react" alt="npm package"></a>

</p>


### Why?

- More icons to work with: Lucide already has hundreds of icons more than Feather does.


## Table of Contents

- [Usage](#usage)
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

Implementation of the coolshapes icon library for web applications.

```sh
npm install coolshapes-react
```

or

```sh
yarn add coolshapes-react
```

# Coolshapes React

Implementation of the coolshapes icon library for react applications.


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

| name          | type     | default       |
| ------------- | -------- | -------------  |
| `size`        | _Number_ | 200           |
| `type`        | _String_ | currentColor  |
| `noise`       | _Boolean_| true          |
| `index`       | _Number_ | random        |



##### NextJS Example


You can then start using it:

## Contributor


