import { QueryTitle } from "@/config/query.config";
import { ToastMessages } from "@/config/toast.config";
import { UserService } from "@/services/user.service";
import { TypeUserProfile } from "@/shared/types/user.types";
import { getKeys } from "@/utils/object.utils";
import { toastError } from "@/utils/toast-error.utils";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

export const useProfile = (setValue: UseFormSetValue<TypeUserProfile>) => {
  
    const { isLoading } = useQuery(
      QueryTitle.Profile,
      () => UserService.getProfile(),
      {
        onSuccess: ({ data }) => {
            setValue('email', data.email);
          
        },
        onError(err) {
          toastError(err, ToastMessages.ErrorProfile);
        },
      }
    );
  
    const { mutateAsync } = useMutation(
      QueryTitle.UpdateProfile,
      (data: TypeUserProfile) => UserService.updateProfile(data),
      {
        onError(err) {
          toastError(err, ToastMessages.ErrorUpdateProfile);
        },
        onSuccess() {
          toast.success(ToastMessages.UpdateMovie);

        },
      }
    );
  
    const onSubmit: SubmitHandler<TypeUserProfile> = async (
      data: TypeUserProfile
    ) => {
      await mutateAsync(data);
    };
  
    return { onSubmit, isLoading };
  };
  