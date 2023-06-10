import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
   
    const { data: allClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/classes')
            return res.json()
        }
        
    }) 
    return [allClasses, loading, refetch]

};

export default useClasses;