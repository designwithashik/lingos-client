import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
   
    const { data: allInstructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/instructors')
            return res.json()
        }
        
    }) 
    return [allInstructors, loading, refetch]

};

export default useInstructors;