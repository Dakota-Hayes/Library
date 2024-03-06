import { TextField, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio} from "@mui/material"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAuthor,chooseTitle,chooseType,chooseISBN,choosePageCount } from "../redux/slices/RootSlice"
import { ISBNGenerator } from "./ISBNGenerator"

interface Props {
    id?: string[]
    toggleForm: () => void;
}

function BookForm (props:Props){
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();
    const isbn = ISBNGenerator();
    
    const onSubmit = async (data: any) => {
        
        if(!data.ISBN){
            data = {
                ...data,
                ISBN:isbn
            }
        }
        


        if (props.id && props.id.length > 0) {
            await server_calls.update(props.id[0], data)
            await props.toggleForm()
        } else {
            await dispatch(chooseAuthor(data.author_name));
            await dispatch(chooseTitle(data.book_title));
            await dispatch(chooseType(data.book_type));
            await dispatch(chooseISBN(data.ISBN));
            await dispatch(choosePageCount(data.page_count))
            await server_calls.create(store.getState())
            await props.toggleForm()
        }
    }

    return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>
                    Book Form
                </h1>
            </div>
            <div>
                <TextField placeholder="Author..." {...register('author_name')}></TextField>
            </div>
            <div>
                <TextField placeholder="Title..." {...register('book_title')}></TextField>
            </div>
            <div>
                <TextField placeholder="Page Count..." {...register('page_count')}></TextField>
            </div>
            <div>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="Hard Cover" control={<Radio />} label="Hard Cover" {...register('book_type')}/>
                            <FormControlLabel value="Soft Cover" control={<Radio />} label="Soft Cover" {...register('book_type')}/>
                            <FormControlLabel value="Digital" control={<Radio />} label="Digital" {...register('book_type')}/>
                        </RadioGroup>
                </FormControl>
            </div>
            <div>
                <button className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Submit</button>
            </div>
        </form>
    </>
  )
}

export default BookForm