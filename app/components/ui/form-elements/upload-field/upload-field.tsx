import cn from 'classnames';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { FieldError } from 'react-hook-form';

import { useUpload } from '@/hooks/query-hooks/use-upload';

import SkeletonLoader from '../../skeleton-loader/skeleton-loader';

import styles from './upload-field.module.scss';

type UploadFieldProps = {
  folder?: string;
  value?: string;
  onChange: (...event: any[]) => void;
  placeholder?: string;
  error?: FieldError;
  style?: CSSProperties;
  isNoImage?: boolean;
};

function UploadField({
  onChange,
  placeholder,
  error,
  style,
  isNoImage = false,
  folder,
  value,
}: UploadFieldProps): JSX.Element {
  const { isLoading, uploadFile } = useUpload(onChange, folder);
  return (
    <div className={cn(styles.field, styles.uploadField)} style={style}>
      <div className={styles.uploadFlex}>
        <label>
          <span>{placeholder}</span>
          <input type='file' onChange={uploadFile} />
          {error && <p className={styles.error}>{error.message}</p>}
        </label>

        {!isNoImage && (
          <div className={styles.uploadImageContainer}>
            {isLoading ? (
              <SkeletonLoader count={1} className={styles.loader} />
            ) : (
              value && <Image alt='' src={value} layout='fill' unoptimized  height={96} width={96}/>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadField;
