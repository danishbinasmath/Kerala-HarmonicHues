import { Link } from 'react-router-dom';

const PostOffice3 = () => {


    return (
        <>
            <div className="postofficechoosebuttoncontainer">

                <Link to="/postoffice1" className="PostOfficeChoose1">Search Post Office Details By Branch Name</Link>

                <Link to="/postoffice2" className="PostOfficeChoose2">Search Post Office Details By PinCode</Link>

            </div>
        </>
    );
    ;
}

export default PostOffice3;
