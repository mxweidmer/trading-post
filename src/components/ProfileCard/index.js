import React from 'react'

const picStyle = {
    border: "2px solid #00838f"
}

const nameStyle= {
    textStyle: "italic",
    textShadow: "1px 1px"
}

export function ProfileTop(props) {
    return (
        <div className="row">
            <div className="container">
                <div className="col s4">
                    <img src={props.image} style={picStyle} className="circle profile-pic responsive-img z-depth-4 " alt="Profile Pic" />
                </div>
                <div className="col s7">
                    <h3 className="left-align" style={nameStyle}>{props.username}</h3><hr/>
                    
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
