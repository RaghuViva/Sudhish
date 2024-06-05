import React, { useEffect, useState } from "react";
import { getDataFromGoogleSheet } from "../../Store/actions/worship";

const About = () => {
    const [data, setData] = useState<any>(null);

    const getData = async () => {
        let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9GkOCkfS44lZQaYdSBc8GdL6QMwMF_BpmFuqbKpDSYFJDC6Z7BYVuZpMdx_7GHaqkee7EMFmvn1g7/pub?gid=0&single=true&output=csv";

        await getDataFromGoogleSheet(url, setData);
    };

    useEffect(() => {
        getData();
    },[]);

    console.log("data :", data)

    return (
        <div>
            <h1 style={{fontSize:"2.5rem", fontWeight: "600", textAlign: "center", marginTop:"2rem",}}>About Us</h1>
            <div>
                <table style={{margin: "auto", marginTop:"1rem",}}>
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>position</th>
                            <th>Name</th>
                            <th>Phone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(data) &&
                            data.map((item: any, i: number) => {
                                return (
                                    <tr key={i}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default About;