import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const menuList = [
        '여성', 
        'Divided', 
        '남성', 
        '신생아/유아', 
        '아동', 
        'H&M Home', 
        'Sale', 
        '지속가능성',
    ];

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const search = (event) => {
        if(event.key === "Enter") {
            console.log("we click this key", event.key);
            // 입력한 검색어를 읽어와서 
            let keyword = event.target.value;
            console.log("keyword", keyword);
            //url를 바꿔준다.
            navigate(`/?q=${keyword}`);
            
        }
    };

    const homepage = () => {
        navigate('/');
    };
    
  return (
    <div>
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>

        <div className="nav-section">
            <img 
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
            onClick={homepage}
            />
        </div>
        
        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map(menu=>
                <li>{menu}</li>
                )}
            </ul>
            <div className="input-area">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" onKeyPress={(event) => search(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar;