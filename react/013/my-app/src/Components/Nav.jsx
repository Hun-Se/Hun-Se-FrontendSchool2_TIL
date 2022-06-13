import { BrowserRouter, Route, Link} from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentNav = styled.nav`
width:100%;
position: fixed;
top: 0;
left: 0;
display:flex;
justify-content: space-around;
align-items: center;
background-color: #212329;
`

const NavUl = styled.ul`
display:flex;
color: #919397;
font-size: 20px;
`

const ArticleUl = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 12px;
color: #fcfcfc;
` 


const Navli = styled.li`
padding:20px;
`

const Articleli = styled.li `
    margin: 5px;
`

const SearchInput = styled.input`
background-color: #212329;
color: #46484a;
`

function Nav ({changeState, stateValue}) {
    return (
        <ContentNav>
            <BrowserRouter>
            <Link to=""><img src="image/react_logo.svg" alt="" /></Link>
            <Route path="/" component={Home}/>
            <NavUl>
                <Navli><Link to="/document" id="document" onClick={changeState} listName={stateValue}>문서</Link></Navli>
                <Navli><Link to="/crib" id="crib" onClick={changeState} listName={stateValue}>자습서</Link></Navli>
                <Navli><Link to="/blog" id="blog" onClick={changeState} listName={stateValue}>블로그</Link></Navli>
                <Navli><Link to="/community" id="community"  onClick={changeState} listName={stateValue}>커뮤니티</Link></Navli>
            </NavUl>
            <Route path="/document" component={Document}/>
            <Route path="/crib" component={Crib}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/community" component={Community}/>
            <ArticleUl>
                <Articleli><SearchInput type="text" placeholder="검색" /></Articleli>
                <Articleli><Link to="/version">v18.0.0</Link></Articleli>
                <Articleli><Link to="/languages">Languages</Link></Articleli>
                <Articleli><Link to="/github">GitHub</Link></Articleli>
                <Route path="/version" component={Version}/>
                <Route path="/languages" component={Languages}/>
                <Route path="/github" component={Github}/>
            </ArticleUl>
            </BrowserRouter> 
        </ContentNav>
    )
}

function Home () {
    return <h1>홈페이지입니다.</h1>
}

function Document () {
    return (
        <h1>문서페이지입니다.</h1>
    )
}

function Crib () {
    return (
        <h1>자습서페이지입니다.</h1>
    )
}

function Blog () {
    return (
        <h1>블로그페이지입니다.</h1>
    )
}

function Community () {
    return (
        <h1>커뮤니티페이지입니다.</h1>
    )
}

function Version () {
    return (
        <h1>버전페이지입니다.</h1>
    )
}

function Languages () {
    return (
        <h1>언어페이지입니다.</h1>
    )
}

function Github () {
    return (
        <h1>깃허브페이지입니다.</h1>
    )
}

export default Nav