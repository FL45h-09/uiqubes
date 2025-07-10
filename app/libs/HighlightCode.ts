// lib/highlightCode.ts
import { createHighlighter } from 'shiki';
import type { Highlighter } from 'shiki';

// List of built-in dark themes
export const darkThemes = ['dark-plus','dracula','github-dark','github-dark-dimmed','min-dark','monokai','nord','one-dark-pro','slack-dark','solarized-dark','vitesse-dark']; //11 Themse
export const LightThemes = ['github-light','light-plus','min-light','slack-ochin','solarized-light','vitesse-light']; //6 Themse
// export const darkThemes = ["vitesse-dark","dracula","github-dark","github-dark-dimmed","monokai","monokai-charcoal","monokai-extended","monokai-extended-bright","nord","one-dark-pro","slack-dark","solarized-dark","tokyo-night","tokyo-night-storm","rose-pine","rose-pine-moon","material-darker","material-ocean","night-owl","red","palenight","ayu-mirage","dark-plus"];
let highlighter: Highlighter | null = null;

export async function HighlightCode(
  code: string,
  lang: string = 'tsx',
  themeIndex: number = 0
) {
  const themeName = darkThemes[themeIndex] || darkThemes[0]; // fallback to first theme

  if (!highlighter) {
    highlighter = await createHighlighter({
      langs: [lang],
      themes: darkThemes,
    });
  }

  const codeString = typeof code === 'string' ? code : String(code);
  return highlighter.codeToHtml(codeString , {
    lang,
    theme: themeName,
  });
}
