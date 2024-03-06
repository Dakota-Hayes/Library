interface Props {
    open: boolean;
    toggleForm: () => void;
    form: JSX.Element;
}

const Modal = (props: Props) => {
    if (!props.open) return (null);
    return (
        <div onClick={props.toggleForm} className="fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-gray-300 bg-opacity-25">
            <div className="max-w2-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded" onClick={(e) => {e.stopPropagation()}}>
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white" onClick={props.toggleForm}>X</p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        {props.form}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal