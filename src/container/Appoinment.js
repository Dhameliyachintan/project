import { useEffect, useState } from "react";


function Appoinment(props) {
    const [data, setData] = useState([])
    const [search, setsearch] = useState([])

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('formdata')) || [])
    }, [])
    return (
        <div>
            <tr>
                <th>username</th>
                <th>email</th>
                <th>phone</th>
            </tr>
            {
                data.map((i) => {
                    return (
                        <tr>
                            <td>{i.username}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                        </tr>
                    )
                })
            }
        </div>
    );
}

export default Appoinment;