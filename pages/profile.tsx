import Profile from '@/components/screens/profile/profile';
import { NextPageAuth } from '@/shared/types/auth.types';


const ProfilePage: NextPageAuth = () => {return(<Profile/>)};

ProfilePage.isOnlyAuthUser = true;

export default ProfilePage;
