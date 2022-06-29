import { TargetOptions } from '@angular-builders/custom-webpack';
import { minify } from 'html-minifier-terser';

export default (options: TargetOptions, indexHtml: string) =>
  options.target === 'serve'
    ? indexHtml
    : minify(indexHtml, {
        caseSensitive: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        useShortDoctype: true,
      });
