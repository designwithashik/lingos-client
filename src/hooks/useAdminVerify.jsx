import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Module 74/bistro-boss-client/src/hooks/useAxiosSecure";
import useAuth from "./useAuth";

const useAdminVerify = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdminVerify;