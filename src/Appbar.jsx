

import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

function Appbar(){

    return <div  style={{display:"flex", justifyContent: "space-between",width: "100vw",
    height: 65  ,
          backgroundColor: "lightblue",position: "sticky",zIndex: 1000 }}>

    <div style={{ display:"flex",justifyContent:"center"
        }}>
    <img
         src="./src\assets\IMG\cit.png"  
         alt="Profile"
        style={{width: 60,
        height: 60 , borderRadius: "50%",
        marginRight: 20,
        marginLeft: 20  }}
                />
        <Typography variant="h9" style={{alignContent:"center"}}>TRAINING & PLACEMENT CELL CIT KOKRAJHAR
            </Typography >
</div>
                                <div style={{ display:"flex", justifyContent:"center", marginRight:40 }}>
                                <div  style={{alignContent:"center"}} > <Button variant="contained" onClick={()=>{window.location="/signin"}}>Button-1</Button></div>
                                <div  style={{alignContent:"center"}}> <Button variant="text">Button-1</Button></div>
                                <div  style={{alignContent:"center"}}> <Button variant="Outlined">Button-2</Button></div>
                                    </div>
   
    </div>
}

export default Appbar;