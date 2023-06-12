import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useUser = () => {
    const { user } = useAuth();
    
    const {data: singleUser = [], isLoading: loading, refetch} = useQuery(['users'], async () => {
        const res= await fetch(`http://localhost:3000/user/${user?.email}`)
          return res.json()
      }) 
      return [singleUser, loading, refetch]
};

export default useUser;