
const CommonQuestions = () => {
    return (
        <div className="grid lg:grid-cols-1 gap-5 p-5 grid-cols-1">
            <div className="collapse bg-base-200">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default CommonQuestions;