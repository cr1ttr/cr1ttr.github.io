// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: "https://cr1ttr.github.io",

  markdown: {
    shikiConfig: {
      theme: {
        name: 'cr1ttr.github.io-theme',
        type: 'dark',
        colors: {
          'editor.background': '#111111',
          'editor.foreground': '#eeeef0',
        },
        tokenColors: [
          {
            scope: ['keyword', 'entity.name.function'],
            settings: { foreground: '#ffc92a' } /* #9cb0ff */
          },
          {
            scope: ['string', 'string.quoted', 'variable.other.constant'],
            settings: { foreground: '#d8e0ff' } /* #d8e0ff */
          },
          {
            scope: ['support.type.primitive', 'entity.name.type', 'storage.type', 'keyword.control'],
            settings: { foreground: '#9cb0ff' } // your --yellow-11
          },
          {
            scope: ['comment'],
            settings: { foreground: '#b2b3bd' } // your --gray-8
          },



          /*
            gdscript:

              variable.other
              entity.name.function
              variable.parameter.function
              keyword.control
          */
        ]
      }
    }
  }
});
