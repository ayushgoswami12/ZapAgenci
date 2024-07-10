import Header from "./Header"
import './Error.css';

function Error() {
  return (
    <>
<Header></Header>
    <div className="error_heading">
      {/* <h1>Oops This is An Error Page </h1> */}
      <h1 className="text-5xl text-purple-400 font-semibold">404 ERROR </h1>

      <p className="pt-5 text-red-500">This page does not exist yet </p>
    </div>
    </>
  )
}

export default Error
