import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { metaColor } from '@/config/const';
import { ProgressBarConfig } from '@/config/progress-bar.config';

import Favicons from './favicons';

type HeadProviderProps = {
  children: React.ReactNode;
};

function HeadProvider({ children }: HeadProviderProps): JSX.Element {
  return (
    <>
      <NextNProgress
        color={ProgressBarConfig.Color}
        startPosition={ProgressBarConfig.Position}
        stopDelayMs={ProgressBarConfig.Delay}
        height={ProgressBarConfig.Height}
      />
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5.0'
        />

        <Favicons />

        <meta name='theme-color' content={metaColor} />
        <meta name='msapplication-navbutton-color' content={metaColor} />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content={metaColor}
        />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      {children}
    </>
  );
}
export default HeadProvider;
