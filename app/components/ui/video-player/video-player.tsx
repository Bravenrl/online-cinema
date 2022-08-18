import cn from 'classnames';

import { useAuth } from '@/hooks/use-auth';
import { useVideo } from '@/hooks/use-video';

import { formatVideoTime } from '@/utils/date.utils';

import MaterialIcon from '../material-icon/material-icon';

import AuthPlaceholder from './auth-placeholder/auth-placeholder';
import styles from './video-player.module.scss';

type VideoPlayerProps = {
  videoSource: string;
  slug: string;
};

function VideoPlayer({ videoSource, slug }: VideoPlayerProps): JSX.Element {
  const { actions, video, videoRef } = useVideo();
  const { user } = useAuth();

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.auth]: !user,
      })}
    >
      {user ? (
        <>
          <video
            width={1200}
            ref={videoRef}
            className={styles.video}
            src={`${videoSource}#t=8`}
            preload='metadata'
          />
          <div className={styles.progress_container}>
            <div
              style={{ width: `${video.progress}%` }}
              className={styles.progress_bar}
            />
          </div>

          <div className={styles.controls}>
            <div>
              <button onClick={actions.revert}>
                <MaterialIcon name='MdHistory' />
              </button>

              <button onClick={actions.toggleVideo} className={styles.play}>
                <MaterialIcon
                  name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
                />
              </button>
              <button onClick={actions.forward}>
                <MaterialIcon name='MdUpdate' />
              </button>

              <div className={styles.time_controls}>
                <p className={styles.time}>
                  {' '}
                  {formatVideoTime(video.currentTime)}
                </p>
                <p> / </p>
                <p className={styles.time}>
                  {' '}
                  {formatVideoTime(video.videoTime)}
                </p>
              </div>
            </div>

            <div>
              <button onClick={actions.fullScreen}>
                <MaterialIcon name='MdFullscreen' />
              </button>
            </div>
          </div>
        </>
      ) : (
        <AuthPlaceholder slug={slug} />
      )}
    </div>
  );
}

export default VideoPlayer;
