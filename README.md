# 인병민 201840225

## [ 09월 29일 ]
 > + 음식 앱에 prop-types 도입하기
 > + state로 숫자 증감 기능 만들어 보기
 > + 숫자 증감 기능을 제대로 만들어 보기
 > + 클래스형 컴포넌트의 일생 알아보기
### 학습내용
0. 상대경로 이미지 삽입 방법
    + public 폴더에 images 폴더 생성
    + img src="images/[이미지이름]" 형태로 태그를 작성한다.
1. 음식 앱에 prop-types 도입하기
    + Act.1 음식 데이터에 rating 추가하기
        + foodLike 배열의 각 요소에 rating(평점)을 추가한다.
        + 값의 자료형은 number로 한다.
    + Act.2 prop-type 설치하기
        ```
            npm install prop-types
        ```
    + Act.3 정상 설치 여부 확인하기
        + 설치 확인은 package.json에 가서 dependencies 키에 있는 값을 확인
    + Act.4 prop-types 적용하기
        + App.js 파일 맨 위에 import PropTypes from 'prop-types' 추가하기
    + Act.5 Food.propTypes작성하기
        ```
            Food.PropTypes = {
              name: PropTypes.string.isRequired,
              picture: PropTypes.string.isRequired,
              rating: PropTypes.string.isRequired
            }
        ```
    + Act.6 Food.propTypes의 rating 키 값 확인하기
        + 오류가 나는 이유는 rating의 값을 String으로 지정하였기 때문에
    + Act.7 prop-types 경고 해결하기
        + rating의 자료형을 String형에서 number형으로 교체
    + Act.8 다른 종류의 prop-types 경고 해결하기
        + picture 이름을 image로 교체하면 오류가 발생하며 이미지가 나오지 않음
    + Act.9 코드 원래대로 돌려놓기
    + Act.10 isRequired의 뜻 알아보기
        + rating props는 필수가 아니어도 되는 항목이다.
        + 다만 값이 전달되는 경우 자료형이 number이기는 해야 한다.
2. state로 숫자 증감 기능 만들어 보기
    + Act.1 클래스형 컴포넌트 작성하기
    + Act.2 App클래스가 React.Component클래스를 상속 받도록 하자
        ```
            import React , {Component} from "react";

            class App extends Component{
            
            }

            export default App
        ```
    + Act.3 render() 함수를 사용해보자
        ```
            render(){
                return(
                    <h1>I am a class Component</h1>
                )
            }
        ```
    + Act.4 state 정의하기
        + class 안에 state = {} 라고 작성하여 state를 정의한다.
    + Act.5 state에 count값 추가하고 사용하기
        ```
            state = {
                count: 0
            }
        ```
        ```
            render(){
                return(
                    <h1>The number is: {this.state.count}</h1>
                )
            }
        ```
    + Act.6 버튼으로 count state값 변경하기
        + Add버튼과 Minus 버튼 추가하기
            ```
                <button>Add</button>
                <button>Minus</button>
            ```
        + add 함수 minus 함수 만들기
            ```
                add = () => {
                    console.log("add");
                }
            
                minus = () => {
                    console.log("minus");
                }
            ```
        + 버튼에 onclick 이벤트 추가하기
            ```
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            ```
3. 숫자 증감 기능을 제대로 만들어 보기
    + Act.1 실제 숫자가 증감하도록 함수 수정
        + console을 지우고 아래 코드로 수정
            ```
                this.state.count = 1
            ```
        + state를 직접 변경하지 말라는 오류가 발생한다.
            ```
                this.setState({count: 1})
            ```
        + 버튼을 누르면 단순히 정해둔 숫자로 변하기만 함 => 증감하는 형식으로 코드 변환
            ```
                this.setState({count: this.state.count +1})
            ```
        + 위와 같은 방법으로도 증감은 하지만 성능에 문제가 생길수 있다.
            ```
                this.setState(current => ({count: this.state.count +1}))
            ```
        + 화살표 함수를 이용하여 안정적이게 전달할 수 있도록 수정.
4. 클래스형 컴포넌트의 일생 알아보기
    + Act.1 constructor() 함수 알아보기
        + constructor()는 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 사용한다.
        + React.Component를 상속해서 만들어진 컴포넌트의 생성자를 구현할 때는 super(props)를 선언을 권고하는 이유는 this.props 사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 있기 때문입니다.
        + React에서는 버전17부터 componentWillMount()를 사용하지 않는다.
            ```
                constructor(props){
                super(props)
                console.log('hello');
                }
            ```
            ```
                render(){
                    console.log('render');
                }
            ```
        + 실행후 console을 확인하면 constructor이 먼저 실행된것을 확인할 수 있다.
    + Act.2 componentDidMount() 함수 알아보기
            ```
                componentDidMount() {
                console.log("componentDidMount");
                }
            ```
        + console을 확인해보면 render()이후에 실행된다.
    + Act.3 componentDidUpdate() 함수 알아보기
            ```
                componentDidUpdate() {
                console.log("componentDidUpdate");
                }
            ```
        + 실행한것으로 console에 찍히지 않으므로 버튼을 클릭한후 console창을 확인.
        + setState() => render() => componentDidUpdate() 순서로 실행된다.
    + Act.4 componentWillUnmount() 함수 알아보기
            ```
                componentWillUnmount() {
                console.log("componentWillUnmount");
                }
            ```
        + 이 함수의 경우는 직접 확인할수 없다. why?
            + 이 함수는 컴포넌트가 화면에서 떠날 때 실행되기 때문에.
## [ 09월 15일 ]
 > + Props
 > + 비슷한 컴포넌트 여러개 만들기
 > + map
### 학습내용
1. props
    + Props란 컴포넌트에서 컴포넌트로 전달하느 데이터를 말한ㄷ. 함수의 매개변수 역할을 하는것이다. 따라서 props를 사용하면 컴포넌트를 효율적으로 사용할수 있다.
    + Act.1 컴포넌트 여러개 사용해보기
        + potato 컴포넌트를 Movie 컴포넌트로 수정하기
            ```
                fuction Movie() {
                    return <h1>I like potato</h1>
                }
            ```
    + Act.2 Movie 컴포넌트를 20개 복사하여 붙여넣기
        ```
            <div>
                <h1>Hello</h1>
                <Movie />
                <!-- Movie 컴포넌트 입력 생략 -->
                <Movie />
            </div>
        ```
    + Act.3 props로 컴포넌트에 데이터 전달하기
        + Movie 컴포넌트의 이름을 Food로 수정 그리고 Movie 컴포넌트를 전부 삭제해준다.
            ```
                function Food() {
                return <h1>I like potato</h1>
                }
            ```
    + Act.4 <Food /> 를 <Food fav="kimchi" />로 수정해본다.
        ```
            function App() {
              return (
                <div >
                  <h1>Hello</h1>
                  <Food fav="kimchi" />
                </div>
              );
            }
        ```
    + Act.5 Food 컴포넌트에 props전달하기.
        ```
            <Food fav="kimchi" something={true} papapapa={['hello',1,2,3,4,true]} />
        ```
    + Act.6 실행하기
        + 아무런 변화가 없다
        
            ![image](https://user-images.githubusercontent.com/79895970/133917132-da7e59c7-178a-447e-9f0e-88f695305fe2.png)
        + 이는 Food컴포넌트에 props를 전달 했을 뿐 아직 사용하지 않았기 때문이다.
    + Act.7 props사용하기
        ```
            function Food(props) {
            console.log(props);
            return <h1>I like potato</h1>;
            }
        ```
    + Act.8 개발자 도구를 실행해서 Console탭을 열어보자.
        + Food컴포넌트에 전달한 props를 속성으로 하는 객체(Object)가 출력된 것을 확인할 수 있다.
            ![image](https://user-images.githubusercontent.com/79895970/133917545-f53d44df-7043-40f6-9461-dab249dbde86.png)
    + Act.9 props 다시 한 번 사용하기.
        + 코드에서 props전달 값 중에서 kimchi만 놔두고 모두 삭제한다.
            ```
                <Food fav="kimchi" />
            ```
        + 결과값을 확인해본다.

            ![image](https://user-images.githubusercontent.com/79895970/133917589-90470bbc-8c9f-4a18-b78c-5e25edb2be21.png)
    + Act.10 ‘props.fav’ 를 중괄호로 감싸서 return값에 적용해 보자.
        + 객체의 특정 값을 사용할 때는 점(.)연산자를 사용한다.
            ```
                function Food(props) {
                return <h1>I like {props.fav}</h1>;
                }
            ```
        + 결과값 확인

            ![image](https://user-images.githubusercontent.com/79895970/133917664-d72328f7-2cd8-474a-882e-a099cbeb3bc6.png)
        + 구조 분해 할당으로 props사용하기
            + 아래 코드와 같이 수정하여 사용하자.
                ```
                    function Food(props) {
                    const { fav } = props
                    return <h1>I like {fav}</h1>;
                    }
                ```
            + 데이터의 개수가 많아지면 구조 분할 할당을 사용하는 것이 편리하다.
    + Act.11 여러 개의 컴포넌트에 props사용하기
        + 앞서서 살펴본 구조 분해 할당을 사용하여 코드를 수정해 보자.
            ```
                function App() {
                  return (
                    <div >
                      <h1>Hello</h1>
                      <Food fav="kimchi" />
                      <Food fav="ramen" />
                      <Food fav="samgiopsal" />
                      <Food fav="chukumi" />
                    </div>
                  );
                }
            ```

                ![image](https://user-images.githubusercontent.com/79895970/133917856-5649471c-f15a-4709-84b4-1f5e99d6c95d.png)
2. 비슷한 컴포넌트 여러개 만들기
    + Act.1 앞에서 만든 컴포넌트 형태 다시 살펴보기
        + 3장에서 작성한 App.js파일을 다시 열어 코드가 효율적인지 살펴본다.
    + Act.2 음식 데이터 만들기
        + 서버에서 넘어온 데이터를 저장할 수 있도록 foodILike라는 변수를 만든 다음 빈 배열을 할당한다.
            ```
               const foodIlike = [] 
            ```
        + 비효율적으로 작성된 Food 컴포넌트는 모두 삭제한다.
            ```
                function App() {
                  return (
                    <div >
                        <h1>Hello</h1>
                    </div>
                  );
                }
            ```
    + Act.3 서버에서 데이터가 넘어온다고 가정하고 다음과 같이 코드를 작성해 본다
        ```
              {
                  name: "chicken",
                  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw.namu.            la%2Fs%2F0757e0521734bb19004e9c35b3d64e26509edd9480b184cdc591364f7d336c01294622cc7c3ec3a1cf95caf9d177e1abb2039b315958a3989b168e6            37497fb54ac296cab8950f3f81720029a246ced799154d29b3619401c53acbcba57fb0b38&imgrefurl=https%3A%2F%2Fnamu.         wiki%2Fw%2F%25EC%25B9%2598%25ED%2582%25A8&tbnid=mj69TAhEXsVw8M&vet=12ahUKEwic7uOnooDzAhXGBKYKHdvcAAoQMygAegUIARDKAQ..i&               docid=O0MPjaXMA5iTmM&w=900&h=682&q=%EC%B9%98%ED%82%A8&ved=2ahUKEwic7uOnooDzAhXGBKYKHdvcAAoQMygAegUIARDKAQ"
                },
                {
                  name: "pizza",
                  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fw.namu.            la%2Fs%2F8c2aebf04d4c6e0ae24ebf3b3789cb064f353da40f0a2916630ee33cc34742414ac8427b8765569e84d615a24cac7bc389ada2e5c60579541ea8b41            be9b22db6d0ce58f59fd1ac01912436c928605cd86974e360258a66ac0374662e70b0ae73&imgrefurl=https%3A%2F%2Fnamu.         wiki%2Fw%2F%25ED%2594%25BC%25EC%259E%2590&tbnid=Buf3KFfT8a1WsM&vet=12ahUKEwjU6qm8ooDzAhXBwYsBHWopBp0QMygAegUIARDNAQ..i&               docid=P_CrebuGKrkEtM&w=640&h=420&q=%ED%94%BC%EC%9E%90&ved=2ahUKEwjU6qm8ooDzAhXBwYsBHWopBp0QMygAegUIARDNAQ"
                },
                {
                  name: "hamburger",
                  image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.              org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0b%2FRedDot_Burger.jpg%2F1200px-RedDot_Burger.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.         org%2Fwiki%2FHamburger&tbnid=VqOMCypKINfRNM&vet=12ahUKEwjZoKrHooDzAhUENqYKHRpkCmoQMygAegUIARDOAQ..i&docid=16_CswVDw3XSKM&w=1200&        h=800&itg=1&q=hamburger&ved=2ahUKEwjZoKrHooDzAhUENqYKHRpkCmoQMygAegUIARDOAQ"
                }
        ```
3. map()함수
    + map 함수 사용법 알아보기
        + Act.1 friends라는 배열을 선언하고 친구 이름을 입력한다.
            ```
                const friends = ["dal","mark","lynn","japan guy"]
            ```
        + 배열의 이름을 입력하여 결과를 확인해보자

            ![image](https://user-images.githubusercontent.com/79895970/133918307-1f7decc5-fed4-4dfd-ad1f-f72167a800c2.png)
        + Act.2 map 함수를 사용해보자
            + 아래 코드를 입력하고 결과를 확인
                ```
                    friends.map(current => { 
                      console.log(current);
                      return 0;
                    })
                ```

                    ![image](https://user-images.githubusercontent.com/79895970/133918374-a2c818de-4f60-48d6-bb6b-818253577174.png)
        + Act.3 map() 함수로 이름에 하트 추가한 배열 만들기.
            + 아래 코드를 입력하기
                ```
                    friends.map(function(friend) { 
                      return friend + "❤";
                    })
                ```
            + 결과를 확인해보자.

                ![image](https://user-images.githubusercontent.com/79895970/133918542-15d426ef-7b93-4c49-86e7-fcfd2887d5ef.png)
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