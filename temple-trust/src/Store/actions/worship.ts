import axios from 'axios';
import * as actionTypes from '../ActionTypes';

/* -------------Worship List--------------------- */
export const getWorshipListSuccess  = (slots: any[]) => {
    return {
        type: actionTypes.GET_WORSHIP_LIST_SUCCESS,
        slots,
    };
};

export const getWorshipList = (setData: any) => {
    const googleSheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQdEDgiSKLIScboR0F_g-E_nY0t-P9y6Bfph6Fct4IICF1G87dij7ls6tSAhErO9BY4xX3ur1bfXWYZ/pub?gid=0&single=true&output=csv";

    axios.get(googleSheetUrl)
    .then((res)=>{
        const csvData = res.data;
        let rows = csvData.split('\n').map((row: any) => row.split(","));

        if(Array.isArray(rows)){
            rows.shift()
        } 

        setData(rows);
    })
    .catch(err => {
        console.log(err);
    })
};

/* ------------- data from google-sheet --------------------- */
export const getDataFromGoogleSheet = (googleSheetUrl: string, setData: any) => {
    
    axios.get(googleSheetUrl)
    .then((res)=>{
        const csvData = res.data;
        let rows = csvData.split('\n').map((row: any) => row.split(","));

        if(Array.isArray(rows)){
            rows.shift()
        } 

        setData(rows);
    })
    .catch(err => {
        console.log(err);
    })
};