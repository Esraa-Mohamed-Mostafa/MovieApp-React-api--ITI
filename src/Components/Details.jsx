import { useParams } from "react-router-dom"

function Details() {
  
//   const {id,title} = useParams()
// console.log('id', id);

  const params = useParams();
  console.log('params', params);

  return (
    <div>Details</div>
  )
}
export default Details;
