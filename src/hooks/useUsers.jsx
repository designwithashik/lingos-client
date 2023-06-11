import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
          
    const {data: users = [], isLoading: loading, refetch} = useQuery(['users'], async () => {
      const res= await fetch('http://localhost:3000/users')
        return res.json()
    }) 
    return [users, loading, refetch]
};

export default useUsers;