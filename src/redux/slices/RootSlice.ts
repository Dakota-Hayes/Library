import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author_name: "Author",
        book_title: "Title",
        book_type: "Type",
        ISBN: "ISBN",
        page_count: "Page Count"

    },
    reducers: {
        chooseAuthor: (state,action) => {state.author_name = action.payload},
        chooseTitle: (state,action) => {state.book_title = action.payload},
        chooseType: (state,action) => {state.book_type = action.payload},
        chooseISBN: (state,action) => {state.ISBN = action.payload},
        choosePageCount: (state,action) => {state.page_count = action.payload},
    }
})

export const reducer =  rootSlice.reducer;
export const {chooseAuthor,chooseTitle, chooseType, chooseISBN, choosePageCount} = rootSlice.actions;