module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './',
          '@/hooks': './hooks',
          '@/constants': './constants',
          '@/components': './components',
        },
      },
    ],
  ],
};