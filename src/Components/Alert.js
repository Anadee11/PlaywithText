import React from 'react';
function Alert(props) {
    const Capitalize=(word)=>{
        let Captype=word.toLowerCase();
        let capital=Captype.charAt(0).toUpperCase()+ Captype.slice(1);
        return capital;
    }
    return (
        <div style={{height:10}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     {Capitalize(props.alert.type)} : {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>}
        </div>
    );
}

export default Alert;
