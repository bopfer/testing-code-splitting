module.exports = api => {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react'
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/transform-runtime'
  ];

  if (api.env() === 'test') { // Jest runs in 'node' mode
    plugins.unshift('dynamic-import-node');
  } else {
    plugins.unshift('@babel/syntax-dynamic-import');
  }

  return { plugins, presets };
};
