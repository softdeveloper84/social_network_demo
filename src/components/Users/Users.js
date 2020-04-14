import React from "react";
import styles from './users.module.css';


let Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {id:1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp0mVD_rr7-5sliY0MiB8-Rr2KhY5cMEyaDTl4itMtCtw3U1Ts&usqp=CAU',
                followed:true, fullName: 'Alex', status: 'active', location: {city: 'kiev', country: 'Ukraine'}},
            {id:2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp0mVD_rr7-5sliY0MiB8-Rr2KhY5cMEyaDTl4itMtCtw3U1Ts&usqp=CAU',
                followed:false, fullName: 'Lexus', status: 'active', location: {city: 'grodno', country: 'Belarus'}},
            {id:3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp0mVD_rr7-5sliY0MiB8-Rr2KhY5cMEyaDTl4itMtCtw3U1Ts&usqp=CAU',
                followed:true, fullName: 'Ivanov', status: 'active', location: {city: 'moskow', country: 'Russian'}},
        ]);
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>
            </div>)
        }
    </div>;
};

export default Users;