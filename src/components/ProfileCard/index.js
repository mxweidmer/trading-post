import React from 'react'

export function ProfileTop(props) {
    return (
        <div className="row">
            <div className="container">
                <div className="col s4">
                    <img src={props.image} className="circle profile-pic responsive-img z-depth-4" alt="Profile Pic" />
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
    console.log(props)

    const UserId = props.userId;
    console.log(UserId);

    return (
        <div className="container">
            <div className="col s5 push-s1">
                <table>
                    <tbody>
                        <tr>
                            <th className="center">{props.listTitle}</th>
                        </tr>

                        {props.items.map(item => (
                            <tr key={item._id}>
                                <td><a href={"/trading-post/item/" + item._id}>{item.title}</a></td>
                                <td><a href={"/trading-post/updateitem/" + item._id}>Update Item</a></td>
                                <td><button onClick={() => props.deleteUserItem(UserId, item._id)}>Delete Item</button></td>
                            </tr>
                        ))
                        }
                    </tbody>

                </table>
            </div>

        </div>
    )
}
