import styles from './admin-create-button.module.scss';

type AdminCreateButtonProps = {
  onClick: () => void;
};

function AdminCreateButton({ onClick }: AdminCreateButtonProps): JSX.Element {
  return (<div>AdminCreateButton</div>);
}

export default AdminCreateButton;
