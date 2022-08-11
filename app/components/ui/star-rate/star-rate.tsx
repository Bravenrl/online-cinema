import { AxiosResponse } from 'axios';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

import { QueryTitle } from '@/config/query.config';

import MaterialIcon from '../material-icon/material-icon';

import styles from './star-rate.module.scss';

type StarRateProps = {
  className: string;
  rating: number;
};

function StarRate({ className, rating }: StarRateProps): JSX.Element {

  return (
    <div className={cn(styles.rating, className)}>
      <MaterialIcon name='MdStarRate' />
      <span>{rating.toFixed(1)}</span>
    </div>
  );
}

export default StarRate;
