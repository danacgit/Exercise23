
const IDCardFun = (props) => {
    return (
 
<div className="card w-25 float-start mx-2 my-2 bg-grey">     
    <div className="card-body bg-warning px-0 py-0">
        <h3 className="card-title px-2">{props.name}</h3>
        <h2 className="card-text bg-info my-0 px-2">{props.des}</h2>
        <h5 className="card-text bg-info px-2">{props.age}</h5>
    </div>
</div>
  
      ) 
}
 
export default IDCardFun;
