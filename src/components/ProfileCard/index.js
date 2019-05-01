import React from 'react'

export function Profile(props) {
    return (
        <div class="row">
            <div class="container">
                <div class="col s4">
                    <img src={props.image} class="circle profile-pic responsive-img z-depth-4" />
                </div>
                <div class="col s7 push-s1">
                    <h3>{props.username}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export function List(props) {
    return (
        <div class="row">
            <div class="container">
                <div class="col s5">
                    <table>
                        <tr>
                            <th class="center">{props.listTitle}</th>
                        </tr>
                        {props.items.map(item => (
                            <tr key={items.id}>
                                <td><a href={items.link}>{item.name}</a></td>
                            </tr>
                        ))
                        }


                    </table>
                </div>

            </div>
        </div>
    )
}
