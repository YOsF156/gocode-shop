import "./ProductPage.css";
import { useParams, Link } from "react-router-dom";


export default function ProductPage() {

    let { id } = useParams();
    return <div> <Link to={`/`}>{id}</Link></div>

}