import React from 'react';

const Profile = () => {
    return ( 
        <div style={{maxWidth: "550px", margin: "2em auto"}}>
            <div style={{display: "flex", justifyContent: "space-around", margin: "18px 0", borderBottom: "1px solid grey"}}>
                <div>
                    <img 
                        style={{width: "160px", height: "160px", borderRadius: "80px"}} 
                        src="https://images.unsplash.com/photo-1581362232694-329367e2b2d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="person"
                    />
                </div>
                <div>
                    <h4>Kahl Khan</h4>
                    <div style={{display: "flex", justifyContent: "space-between", width: "108%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img 
                    src="https://images.unsplash.com/photo-1591370017551-27c81399aa31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="item"
                    alt="busy place"
                />
                <img 
                    src="https://images.unsplash.com/photo-1591370017551-27c81399aa31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="item"
                    alt="busy place"
                />
                <img 
                    src="https://images.unsplash.com/photo-1591370017551-27c81399aa31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="item"
                    alt="busy place"
                />
                <img 
                    src="https://images.unsplash.com/photo-1591370017551-27c81399aa31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="item"
                    alt="busy place"
                />
                <img 
                    src="https://images.unsplash.com/photo-1591370017551-27c81399aa31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="item"
                    alt="busy place"
                />
                <img 
                    src="https://images.unsplash.com/photo-1591370017551-27c81399aa31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="item"
                    alt="busy place"
                />
            </div>
        </div>
     );
}
 
export default Profile;