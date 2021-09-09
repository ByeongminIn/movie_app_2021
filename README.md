# 인병민 201840225

## [ 09월 08일 ]
 > + 리액트로 클론 코딩 시작 하기
### 학습내용
1. 슈퍼 빠른 create-react-app
    + 웹팩(webpack)은 자바스크립트 앱을 위한  정적 모듈들을 하나로 묶어주는 번들러이다.
    웹팩에서는 자바스크립트,스타일 시트, 이미지 등 모든것을 모듈로 본다.
    + 바벨(Bavel)은 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스파일러이다.
    + React로 개발하는 경우 웹팩이나, 바벨은 신경 쓰지 않아도 된다.
    + creat-react-app은 react를 위한 보일러 플레이트<sup>[1](#Boilerplate)</sup>이며, 
    이 한줄을 입력해서 리액트 개발을 바로 시작할 수 있다.
    + 다시 말해 create-react-app은 별다른 개발환경 구축없이 리액트 개발을
     바로 시작할 수 있도록 프로젝트 구조 작업,설정 작업 등을 자동으로 진행해주는 도구이다.
     개발 준비는 create-react-app이 하고 개발자는 그냥 코딩만 하면 된다.
    + 이전에는 주로 Webpack과 Babel을 이용한 React개발 환경으 구축하고 개발을 했으며,
    지금도 많은 개발자들이 그렇게 하고 있다. 구글링을 해보면 최근까지도 개발 환경 구축과 관련한
    자료들이 많이 나와 있다.
2. create-react-app으로 리액트 앱 만들기
    + 아래 명령어를 입력
        ```
            npm create-react-app movie_app_2021
        ```
    + File > Open Folder 메뉴를 이용하여 프로젝트 폴더를 연다
    + README.md 안의 내용을 전부 지운후 새로 기입한다.
    + package.json파일에서 "test": "react-scripts-test","eject": "react-scripts-eject" 부분을 삭제해준다.
    + 아래 명령어로 리액트 앱을 실행해준다
        ```
            npm start
        ```
        + 종료를 하고 싶으면 Crtl+c를 누르면 된다.
    + 깃허브에 앱 업로드를 한다. node_modules폴더는 올리지 않기 때문에 .gitignore파일에 /node_modules 를 작성하여 node_modules를 제외 시켜준다.
    + 리액트 앱프로젝트에서 App.css,App.test.js,index.css,logo.svg,reportWebVital.js,setupTest.js,package-lock.json 파일을 삭제해준다. (프로젝트에서 불필요한 파일 정리)
    + index.js 파일 내부의 내용을 전부 지우고 아래 코드로 수정한다.
        ```
            import React from 'react';
            import ReactDOM from 'react-dom';
            import App from './App';

            ReactDOM.render(
                <App />,
              document.getElementById('root')
            );
        ```
    + App.js의 1&#126;2줄,7&#126;21줄을 전부 제거해준다.
3. 리액트 기초개념 알아보기
    + 리액트 동작원리
        + 리액트는 프로젝트 폴더에 있는 코드를 해석하여 해석된 결과물을 index.hrml에 삽입하여 보여주는 방식으로 동작한다.
    + App.js 수정해보기
        + App.js파일을 아래 코드와 같이 수정해본다
            ```
            import React from 'react';

            function App() {
              return (
                <div >
                  Hello React!!!!!
                </div>
              );
            }

            export default App;
            ```
        + fuction으로 정의 내린 곳을 컴포넌트(component)라고 한다.
        + 컴포넌트를 외부에서 사용 가능하게 하려면 필수적으로 "export default"를 이용하여 함수,변수,오브젝트,클래스등을 전달해주어야 한다.
        + 외부에서 컴포넌트를 가지고 오려면 "import A from B"를 이용하면 된다, 여기서 A는 함수,변수 부분이고 B는 A 함수가 적힌 파일의 위치이다.
        (경로지정은 상대경로로 지정해주고 폴더의 위치가 복잡해지면 절대경로를 이용하는등 상황에 맞게 이용하면 된다. )

<a name="Boilerplate">1</a>: 오래전 신문사에서 계속 반복적으로 사용되는 문구나 광고등을 부드러운 납 대신 강철로 찍기 시작한데서 유래 된 것으로, 최소한의 변경으로 여러곳에서 재사용이 가능한 코드를 보일러 플레이트 코드라고 부른다.



## [ 09월 01일 ]
학습내용
...