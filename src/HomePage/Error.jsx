import Header from "./Header"
import './Error.css';

function Error() {
  return (
    <>
<Header></Header>
    <div className="error_heading">
      <h1>Oops This is An Error Page </h1>
      <p>Page does not exist , choose where would you like to visit </p>
    </div>
    </>
  )
}

export default Error
