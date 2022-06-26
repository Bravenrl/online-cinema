import { NextPageAuth } from '@/shared/types/auth.types';


const ProfilePage: NextPageAuth = () => <div>Profile</div>;

ProfilePage.isOnlyAuthUser = true;

export default ProfilePage;
