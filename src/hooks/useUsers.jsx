import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
  const [axiosSecure] =useAxiosSecure()
    //TODO:  keep it secure by all users to the axios and single to check admin/instructor in class
          
    const {data: users = [], isLoading: loading, refetch} = useQuery(['users'], async () => {
      const res= await axiosSecure.get('http://localhost:3000/users')
        return res.data
    }) 
    return [users, loading, refetch]
};

export default useUsers;