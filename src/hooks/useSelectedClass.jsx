import { useQuery } from "@tanstack/react-query";

const useSelectedClass = (studentEmail) => { 
    console.log(studentEmail)
    const { data: allSelectedClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
    
        queryFn: async () => {
            const res = await fetch(`https://lingos-server.vercel.app/selected-classes?email=${studentEmail}`)
            return res.json()
        }
        
    }) 


    return [allSelectedClasses, loading, refetch]

};


export default useSelectedClass;