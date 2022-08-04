import AuthButton from './auth-button/auth-button';
import styles from './auth-placeholder.module.scss';

type AuthPlaceholderProps = {
  slug: string;
};

function AuthPlaceholder({ slug }: AuthPlaceholderProps): JSX.Element {
  return (
    <div className={styles.placeholder}>
      <div>
        <p>You must be logged in to start watching</p>
        <AuthButton slug={slug} />
      </div>
    </div>
  );
}

export default AuthPlaceholder;
