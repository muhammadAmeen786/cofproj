import { useRouteError } from "react-router-dom";
const ErrorComponent = ()=>{
    const error = useRouteError();
    return(
      <div>

 
            <h1>Something Wrong happenend</h1>
            <h3>Error</h3>
            <p>{error.status + ": " + error.statusText}</p>

     </div>
      

    )
}

export default ErrorComponent;