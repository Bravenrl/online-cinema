import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

import { SkeletonConfig } from '@/config/skeleton.config';
import classNames from 'classnames';
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './skeleton-loader.module.scss'

function SkeletonLoader({ className, ...rest }: SkeletonProps): JSX.Element {
  return <Skeleton {...rest} 
  baseColor={SkeletonConfig.BaseColor}
  highlightColor={SkeletonConfig.HighlightColor}
  className={classNames([styles.skeleton], className)} />;
}
export default SkeletonLoader;
