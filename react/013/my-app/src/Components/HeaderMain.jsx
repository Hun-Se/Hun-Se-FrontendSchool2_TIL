import styled from "styled-components";

const ContentHeader = styled.header`
    padding: 80px 20px 40px 20px;
    margin-left: auto;
    margin-right: auto;
    background-color:#282c34;
    color: #FFF;
`

const Headerh1 = styled.h1`
    text-align: center;
    color: #61d9fc;
    font-size:45px;
    font-weight: bold;
`

const Headertext = styled.p`
    padding-top: 15px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.01em;
    font-weight: 200;
`

const HeaderUl = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

const Headerli = styled.li`
    
`

const HeaderButton = styled.button`
    background-color:#61d9fa;
    font-size: 16px;
    margin-right: 20px;
    padding: 10px 25px;

`
const Headerlink = styled.a`
    vertical-align: -12px;
    color:#61d9fa;
    font-size: 16px;
`
function HeaderMain () {
    return (
        <ContentHeader>
            <Headerh1>React</Headerh1>
            <Headertext>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리 시작하기</Headertext>
            <HeaderUl>
                <Headerli><HeaderButton>시작하기</HeaderButton></Headerli>
                <Headerli><Headerlink href="#none">자습서읽어보기</Headerlink></Headerli>
            </HeaderUl>
        </ContentHeader>
    )
}

export default HeaderMain