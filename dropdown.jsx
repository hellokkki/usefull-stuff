
import React from 'react';


function Drop (props) {
 const [open, setOpen] = React.useState(false);

 const handleOpen = () => {
  setOpen (!open);
 };

 return(
 <div className="dropdown">
  <button onClick={handleOpen} className="btn btn--open-calendar"></button> {
    open ? (
      <div>
        {props.children}
      </div>
    ) : ""
  }
 </div>
 )
}

export default Drop;