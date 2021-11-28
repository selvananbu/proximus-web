import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, INIT_LIST, PUSH_ITEMS, SEARCH_TEXT } from "../types";

const initialState = {
    filterText: {},
    deviceList: [],
    currentEditItem: {},
    searchFilter: '',
    filterList:[]
};


const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            let list = state.deviceList;
            list.push(action?.data?.json);
            localStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
            return { ...state, deviceList: list };
        }
        case DELETE_ITEM: {
            let list = state.deviceList;
            let { _id } = action?.data?.json;
            list = list.filter(val => val?._id !== _id);
            localStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
            return { ...state, deviceList: list };
        }
        case EDIT_ITEM: {
            let list = state.deviceList;
            let { _id } = action?.data?.json;
            list?.map((device, idx) => {
                if (device?._id === _id) {
                    list[idx] = action?.data?.json;
                }
            })
            localStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
            return { ...state, deviceList: list };
        }
        case PUSH_ITEMS: {
            let list = state.deviceList;
            let newList = action?.data?.json;
            list.push(...newList);
            localStorage.setItem("com.devicelist.proximus", JSON.stringify(list));
            return { ...state, deviceList: list };
        }
        case INIT_LIST: {
            let newList = action?.data?.json;
            return { ...state, deviceList: newList };
        }
        case SEARCH_TEXT: {
            let searchText = action?.data?.json;
            let list = state.deviceList;
            let filterList = [];
            if(searchText !== ''){
                list?.map((device, idx) => {
                   if (device?.deviceName?.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || 
                        device?.platform?.toLowerCase().indexOf(searchText.toLowerCase()) > -1  ||
                        device?.owner?.toLowerCase().indexOf(searchText.toLowerCase()) > -1 )  {
                        filterList.push(device)
                    }
                })
            }
            return { ...state, searchFilter: searchText,filterList:filterList };
        }
        default:
            return state;
    }
};
export default deviceReducer;
