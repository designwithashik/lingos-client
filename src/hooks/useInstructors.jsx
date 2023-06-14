import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
   
    const { data: allInstructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://lingos-server.vercel.app/instructors')
            return res.json()
        }
        
    }) 
    return [allInstructors, loading, refetch]

};

export default useInstructors;