import React from 'react'

export function ProfileTop(props) {
    return (
        <div className="row">
            <div className="container">
                <div className="col s4">
                    <img src={props.image} className="circle profile-pic responsive-img z-depth-4" />
                </div>
                <div className="col s7 push-s1">
                    <h3>{props.username}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export function List(props) {
    return (
        <div className="container">
            <div className="col s5 push-s1">
                <table>
                    <tbody>
                        <tr>
                            <th className="center">{props.listTitle}</th>
                        </tr>

                        {props.items.map(items => (
                            <tr key={items.id}>
                                <td><a href="#">{items.title}</a></td>
                            </tr>
                        ))
                        }
                    </tbody>

                </table>
            </div>

        </div>
    )
}
