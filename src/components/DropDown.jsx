
const DropDown = ({question, answer}) => {
    return (
        <>
            <div className="collapse bg-base-200 lg:w-2/3 mx-auto">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-[#524fd5] text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content font-bold ">
                    {question}
                </div>
                <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    <p>{answer}</p>
                </div>
            </div>
        </>
    );
};

export default DropDown;