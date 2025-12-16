import type { StorybookConfig } from '@storybook/react-webpack5';
import type { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-swc',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config) => {
    if (!config.module?.rules) return config;

    const scssModuleRule: RuleSetRule = {
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            esModule: false,
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    };

    const scssGlobalRule: RuleSetRule = {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            esModule: false,
          },
        },
        'sass-loader',
      ],
    };

    config.module.rules.push(scssModuleRule, scssGlobalRule);
    return config;
  },
};

export default config;
