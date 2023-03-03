import React from 'react';

function data(props) {
    const projectlist = [
        {
            employe: 'deep',
            jobtype: 'developer',
            work: 'project',
            complete: 'done',
            salary: 10000,
            joining: 4
        },
        {
            employe: 'red',
            jobtype: 'developer',
            work: 'project',
            complete: 'done',
            salary: 10000,
            joining: 4
        },
        {
            employe: 'blue',
            jobtype: 'developer',
            work: 'project',
            complete: 'done',
            salary: 10000,
            joining: 4
        },
        {
            employe: 'green',
            jobtype: 'developer',
            work: 'project',
            complete: 'done',
            salary: 10000,
            joining: 4
        }
    ]

    let filterdata = projectlist.filter((j) => j.complete === 'done')
    
    let total = filterdata.reduce((acc, curr) => {
        return acc + curr.salary
    },0)

    let totaldata = filterdata.reduce((acc, curr) => {
        return acc + (curr.salary * curr.joining)
    }, 0)

    console.log("TOTAL", total)
    return (
        <div>
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>employe</th>
                        <th>jobtype</th>
                        <th>work</th>
                        <th>complete</th>
                        <th>salary</th>
                        <th>joining</th>
                        <th>total</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        filterdata.map((i, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i.employe}</td>
                                    <td>{i.jobtype}</td>
                                    <td>{i.work}</td>
                                    <td>{i.complete}</td>
                                    <td>{i.salary}</td>
                                    <td>{i.joining}</td>
                                    <td>{i.salary * i.joining}</td> 
                                </tr>
                            )
                        })
                    }
                    {/* <tr>
                        <b>total</b>
                    </tr> */}
                    <tr>
                        {total}
                    </tr>
                     <tr>
                        {totaldata}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default data;