const saveCollege = () => {
  return {
    type: "ADD_COLLEGE",
    payload: { message: "Successfully added COLLEGE" },
  };
};

export const addCollege = (payload) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  console.log(requestOptions);
  console.log(payload);
  return (dispatch) => {
    fetch("http://localhost:8075/collegeadd", requestOptions).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log("success");
        dispatch(saveCollege());
      }
    });
  };
};

const findCollege = (payload) => {
  return { type: "FIND_COLLEGE", payload };
};

export const fetchCollege = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return (dispatch) => {
    fetch("http://localhost:8075/collegeview", requestOptions)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(findCollege(data));
      });
  };
};



const removeCollege = (payload) =>{

        return {type : "DELETE_COLLEGE",payload : payload}
    
    }
    
    export const deleteCollege = (collegeRegId) =>{
         const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        return dispatch => {
            
            fetch("http://localhost:8075/collegeid/" + collegeRegId , requestOptions)
                .then(res => {
                    console.log(res)
                    
                    if(res.status === 200){
                       
                    }
                    else
                   
    
                    // return res.json()
                    return res.text()
                }).then(data=>{
                    console.log(data)
                    dispatch(removeCollege({collegeRegId}))
                })
        }
    }


const updateCollege = () => {
  console.log("inside update college");
  return {
    type: "UPDATE_COLLEGE",
    payload: { message: "Successfully updated college" },
  };
};

export const EditCollege = (payload) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  return (dispatch) => {
    console.log(requestOptions);
    console.log(payload);
    fetch("http://localhost:8075/collegedetails", requestOptions).then(
      (res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("successfully updated");
          dispatch(updateCollege(payload));
          // .then(res => {
          //     console.log(res)
          //     // console.log(res.json())
          //     if(res.status === 202){
          //         dispatch(updateCollege("Successfully updated user !!!"));
          //     }else {
          //     dispatch(updateCollege("Updating user failed !!!"))
          // }
        }
      }
    );
  };
};
