import DropDown from "../../components/DropDown";

const CommonQuestions = () => {
    return (
        <> <h2 className='text-3xl mb-3 font-bold text-center'>Common questions</h2>
            <p className='text-gray-500 mb-7 text-center'>A language class with learning capacity is a great thing for your summer time. Try any class at affordable price </p>
            <h2 className='text-center text-xl font-bold text-[#524fd5] '>Frequently Asked Questions</h2>
            
        <div className="grid lg:grid-cols-1 gap-5 p-5 grid-cols-1 mb-28">
           

            <DropDown question={'Do I need to buy materials for lessons?'} answer={"The requirement for purchasing materials can vary depending on the language school or program you are enrolled in. Some language schools may provide study materials as part of the course fees, while others may require you to purchase textbooks or supplementary materials separately. It's advisable to inquire with the specific language school or program to understand their policy regarding materials and any additional costs involved."}/>
            <DropDown question={'How can I assess my level of knowledge in a particular language?'} answer={'To assess your language level, consider self-reflection on your vocabulary, grammar, and language skills, or take online language tests. Alternatively, seek evaluation from language schools, tutors, or native speakers through conversations or official proficiency exams.'}/>
            <DropDown question={'How the first lesson with teacher will be?'} answer={'By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.'}/>
            <DropDown question={'Can I do it individually or only in a group?'} answer={'Language lessons are typically offered in both individual and group settings, allowing you to choose the format that suits your needs and preferences. Individual lessons provide personalized attention and can focus on specific areas of improvement, while group lessons offer opportunities for interaction and practicing language skills with peers. Language schools usually offer both options, so you can select the one that aligns with your learning style and goals.'}/>
            <DropDown question={"Are you adjusting to the student's schedule?"} answer={"Yes, language schools typically strive to accommodate students' schedules for summer programs. While specific arrangements may vary, most schools offer flexible scheduling options to accommodate different needs. It's recommended to contact the language school directly to discuss your availability and explore the scheduling options they provide for their summer program."}/>
            </div>
            </>
    );
};

export default CommonQuestions;