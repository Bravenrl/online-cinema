import { getUser, getUserIsLoading } from '@/store/user/user-selectors';

import { useTypedSelector } from './use-typed-selector';

export const useAuth = () => {
    const user = useTypedSelector(getUser);
    const isLoading = useTypedSelector(getUserIsLoading);
    return {user, isLoading}
};
