import { DataGrid, GridColDef} from "@mui/x-data-grid"
import { useState } from "react"
import { server_calls } from '../api/server';
import Modal from "./Modal"
import BookForm from "./BookForm"
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'book_title',
        headerName: 'Title',
        headerClassName:'bg-gray-100',
        flex: 1
    },
    {
        field: 'author_name',
        headerName: 'Author',
        headerClassName:'bg-gray-100',
        flex: 1
    },
    {
        field: 'book_type',
        headerName: 'Type',
        headerClassName:'bg-gray-100',
        flex: 1
    },
    {
        field: 'page_count',
        headerName: 'Page Count',
        headerClassName:'bg-gray-100',
        flex: 1
    },
    {
        field: 'ISBN',
        headerName: 'ISBN',
        headerClassName:'bg-gray-100',
        flex: 1
    },
]

function DataTable() {
    const [isModalOpen,setModalOpen] = useState(false)
    const [selectionModel,setSelectionModel] = useState<string[]>([])
    const {bookData, getData} = useGetData();

    const toggleModalOpen = async() => {
        await setModalOpen(!isModalOpen);
        await clearSelection();
        await getData();
    }
    
    const clearSelection = () => {
        if(isModalOpen){
            setSelectionModel([])
        }
    }

    const deleteData = async () => {
        await server_calls.delete(selectionModel);
        await getData();
    }

    return (
        <>
            <div>
                { !isModalOpen ? 
                (
                    <>
                        { selectionModel.length == 0 ?
                        (
                            <button onClick={toggleModalOpen} className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Create Entry</button>
                        )
                        :
                        (
                            <>
                                <button onClick={toggleModalOpen} className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Update Entry</button>
                                <button onClick={deleteData} className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Delete Entry</button>
                            </>
                        )}                        
                        <div>
                            <h2 className='p-3 bg-gray-300 my-2 rounded'>Book Inventory</h2>
                            <DataGrid 
                                rows={bookData} 
                                columns={columns} 
                                pageSizeOptions={[6]} 
                                checkboxSelection 
                                disableRowSelectionOnClick
                                onRowSelectionModelChange={(item : any) => {
                                    setSelectionModel(item), 
                                    console.log(item)}
                                } 
                                columnVisibilityModel={{id : false}}
                            />
                        </div>
                    </>
                )
                :
                (
                    <Modal 
                        open={isModalOpen} 
                        toggleForm={toggleModalOpen} 
                        form={<BookForm id={selectionModel} toggleForm={toggleModalOpen} />}
                    />
                )}
            </div>
        </>
    )
}

export default DataTable