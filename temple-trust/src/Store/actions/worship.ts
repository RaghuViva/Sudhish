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
    const googleSheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRrNGKkhK4vaDadV7GC-AApFCjF6hfvP9I6deMe7fwKMSmqiC1qCfES3kbhRLiMBmf7nMIKWSLlLXBU/pub?gid=0&single=true&output=csv";
    
    axios.get(googleSheetUrl)
    .then((res)=>{
        const csvData = res.data;
        const rows = csvData.split('\n').map((row: any) => row.split(","));
        console.log('rows', rows)
        setData(rows);
        // return rows;
    })
    .catch(err => {
        console.log(err);
    })
};