/** @type {import('vite').UserConfig} */

export default {
    base: process.env.NODE_ENV === 'production' ? '/flow-state/' : '',
    assetsInclude: ['**/*.exr']
  }
