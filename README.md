# 인병민 201840225

## [ 12월 01일]
 > + State와 생명주기
 > + 이벤트 처리하기
 > + 조건부 렌더링
### 학습내용
#### State와 생명주기

    1. 생명주기 메서드를 클래스에 추가하기
        + Clock이 처음 DOM에 렌더링 될 때 마다 타이머를 설정하려고 합니다.이것은 React에서 "마운팅"이라고 합니다
        + Clock에 의해 생성된DOM이  삭제될 때 마다 타이머를 해제하려고 합니다.이것은 React에서 "언마운팅"이라고 합니다
        + 컴포넌트 클래스에서 특별한 메서드를 선언하여 컴포넌트가 마운트되거나 언마운트 될 때 일부 코드를 작동할 수 있습니다.
        + ComponenetDidMount() 메서드는 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행
            ```
                componentDidMount() {
                  this.timerID = setInterval(
                    () => this.tick(),
                    1000
                  );
                }
            ```
        + componentWillUnmount() 생명주기 메서드 안에 있는 타이머를 분해해 보겠습니다.
            ```
                componentWillUnmount() {
                  clearInterval(this.timerID);
                }
            ```
        + 위와 같은 특별한 메서드를 "생명주기 메서드" 라고 부릅니다.
## [ 11월 24일]
 > + React 시작하기
 > + React의 주요 개념

### 학습내용
1. [React 시작하기](https://ko.reactjs.org/docs/getting-started.html#learn-react)
    + Act.1 React 시도해보기
        + React는 처음부터 점진적으로 적용할 수 있도록 설계되었으며 **필요한 만큼 React를 사용할 수 있습니다.**
        + React의 간단한것은 온라인 코드 편집기 이용으로도 충분합니다.
        + 자신의 HTML페이지에 추가하고 싶으면 처음에는 CDN링크를 이용하여 간단한 기능을 추가하는것도 추천합니다.
    + Act.2 React 배우기
        + React 홈페이지에는 직접 구현하면서 학습하는 **실용적인 자습서**와 개념을 단계적으로 익히는 **주요 개념 가이드**로 이루어져 있습니다.
        + 만약 React의 문서가 어렵게 느껴진다면 Tania Rasica가 쓴 [React의 개요](https://www.taniarascia.com/getting-started-with-react/)를 먼저 보고 오시는 것을 추천합니다.
        + 주요 개념이 익숙해졌고 다음 단계의 React를 학습하려는 사람들에게는 일반적으로 사용되지 않는 React 기능을 다루는 **고급 개념**과 **API 참조**를 보시면 됩니다.
        + 트위터의 reactjs 계정을 보시면 최신 React 소식을 접할수 있습니다.
        + 혹시 문서가 이상하다고 생각이 들면 공식 계정으로 트윗을 하여 개선단계에 참여할수 있습니다.
2. [React의 주요 개념](https://ko.reactjs.org/docs/hello-world.html)
    + Act.1 [Hello World](https://ko.reactjs.org/docs/hello-world.html)
        + 가장 단순한 React 예시입니다.
            ```
                ReactDOM.render(
                  <h1>Hello, world!</h1>,
                  document.getElementById('root')
                );
            ```
        + 이 코드는 "Hello, world!"라는 제목을 보여줍니다.
        + React는 JavaScript 라이브러리이며, 따라서 JavaScript 언어에 대한 기본적인 이해가 필요합니다.
        + 자신이 없다면 [JavaScript 튜토리얼 살펴보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/A_re-introduction_to_JavaScript)를 통해 자신이 어느정도 수준인지 파악 후 들어가길 권장합니다.
    + Act.2 [JSX 소개](https://ko.reactjs.org/docs/introducing-jsx.html)
        + JSX란 JavaScript를 확장한 문법입니다, JSX의 간단한 코드를 예시로 어떤 형태롤 가지는지 알고 가는것이 좋습니다.
            ```
                const element = <h1>Hello, world!</h1>;
            ```
        + [JSX에 표현식 포함하기](https://ko.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx)
        + [JSX도 표현식입니다.](https://ko.reactjs.org/docs/introducing-jsx.html#jsx-is-an-expression-too)
            + JSX도 JavaScript기반이기 때문에 JavaScript 객체로 인식하여 if구문 및 for loop안에 사용이 가능합니다.
        + [JSX 속성 정의](https://ko.reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx)
            + Attribute에 따옴표를 이용해 문자열 리터럴을 정의할 수 있습니다.
            + 중괄호를 사용하여 Attribute에 JavaScript 표현식을 삽입할 수도 있습니다.
            + 이 두 방법은 동일한 Attribute에 동시에 사용하면 안됩니다.
        + [JSX로 자식 정의](https://ko.reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx)
            + 태그가 비어있다면 XML처럼 />를 이용해 닫아주어야 합니다.
        + [JSX는 객체를 표현합니다.](https://ko.reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx)
             + Babel은 JSX를 React.createElement() 호출로 컴파일합니다.
    + Act.3 [DOM에 엘리먼트 렌더링하기](https://ko.reactjs.org/docs/rendering-elements.html#rendering-an-element-into-the-dom)
        + React 엘리먼트를 DOM 노드에 렌더링하려면 둘 다 ReactDOM.render()로 전달하면 됩니다.
            ```
                const element = <h1>Hello, world</h1>;
                ReactDOM.render(element, document.getElementById('root'));
            ```
        + 마찬가지로 엘리먼트의 업데이트도 새 엘리먼트를 생성 후 ReactDOM.render()로 전달하는 것입니다.
    + Act.4 [Components와 Props](https://ko.reactjs.org/docs/components-and-props.html)
        + 컴포넌트는 함수 컴포넌트와 클래스 컴포넌트가 있다.
        + 컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것입니다.
        + 컴포넌트의 이름은 항상 대문자로 시작합니다.
            + React는 소문자로 시작하는 컴포넌트를 DOM태그로 처리하기 때문이다.
        + [컴포넌트 합성](https://ko.reactjs.org/docs/components-and-props.html#composing-components)
            + 컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있습니다.
            + 예를 들어 Welcome을 여러번 렌더링하는 App 컴포넌트를 만들 수 있습니다.
                ```
                    function Welcome(props) {
                      return <h1>Hello, {props.name}</h1>;
                    }

                    function App() {
                      return (
                        <div>
                          <Welcome name="Sara" />
                          <Welcome name="Cahal" />
                          <Welcome name="Edite" />
                        </div>
                      );
                    }

                    ReactDOM.render(
                      <App />,
                      document.getElementById('root')
                    );
                ```
            + 코드 실행은 [Codepen](https://codepen.io/pen?&editors=0010)에서도 가능하다.
        + [컴포넌트 추출](https://ko.reactjs.org/docs/components-and-props.html#extracting-components)
    + Act.5 [State와 생명주기](https://ko.reactjs.org/docs/state-and-lifecycle.html)
        + [함수에서 클래스로 변환하기](https://ko.reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
            1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성합니다.
            2. render()라고 불리는 빈 메서드를 추가합니다.
            3. 함수의 내용을 render() 메서드 안으로 옮깁니다.
            4. render() 내용 안에 있는 props를 this.props로 변경합니다.
            5. 남아있는 빈 함수 선언을 삭제합니다.
                ```
                    class Clock extends React.Component {
                      render() {
                        return (
                          <div>
                            <h1>Hello, world!</h1>
                            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
                          </div>
                        );
                      }
                    }
                ```
        + [클래스에 로컬 State 추가하기](https://ko.reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
            1. **render()** 메서드 안에 있는 **this.props.date**를 **this.state.date**로 변경합니다.
                ```
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                ```
            2. 초기 **this.state**를 지정하는 class **constructor**를 추가합니다.
                ```
                  constructor(props) {
                      super(props);
                      this.state = {date: new Date()};
                    }
                ```
                + 클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야 합니다.
            3. <Clock /> 요소에서 date prop을 삭제합니다.
                ```
                    ReactDOM.render(
                      <Clock />,
                      document.getElementById('root')
                    );
                ```
            + 완성된것은 [Codepen](https://codepen.io/gaearon/pen/KgQpJd?editors=0010)에서 확인 가능하다.
            + 함수에서 클래스로 변환, 클래스에서 로컬 state를 추가한 코드를 비교해가며 변화한것을 공부하면 좋을것 같다.
## [ 11월 17일]
 > + react 배우기(TODO List부터)

 ### 학습내용
 1. react 배우기 (TODO List부터)
    + 1.Todo List
        + TodoApp과 TodoList 두 개의 컴포넌트로 구성
        + handleChange는 모든 키보드 입력마다 React의 state를 갱신해서 보여준다. (element에서 확인 가능하다.)
        + 시간순으로 보면 다음과 같이 동작한다.
            + 유저입력 > handleChange > React의 state 갱신 > form element가 React의 state를 참조
        + 유저 입력을 강제로 대문자로 변경할 경우에도 사용한다.
            ```
                handleChange(event) {
                this.setState({value: event.target.value.toUpperCase( )})
                }
            ```
        + handleSubmit은 버튼이 클릭될 때 발생하는 event를 처리한다.
        + render( )메소드 에서 초기 렌더링을 실행한다.
        + onChange를 통해 input에 입력되는 값으로 state 상태 변경을 준비한다.
        + 입력된 값은 state의 "text: '' "에 임시로 저장된다.
        + lavel의 htmlFor은 input과의 연결을 위한 id값이다.
            + className처럼 html과 구분하기 위해 JSX에서 사용하는 키워드이다.
        + 버튼을 클릭하면 버튼의 숫자를 증가시킨다.
        + 리스트는 배열로 저장되기 때문에 item.length를 통해 list의 수를 확인한다.
        + input area에 이벤트가 발생하면 handleChange(e)가 동작하여 State의 text값을 변경한다.
        + “Add #x”버튼을 클릭하면 리스트의 item.length에 1을 더해서 버튼에 출력한다.
        + 크롬 DevTool을 열어 실시간으로 state가 변화하는 것을 확인한다.
        + 이제 handleSubmit 메소드에 대해 살펴본다. 제일 중요한 것은 preventDefault 메소드를 사용하는 이유이다.
    + 2.handleSubmit(e)에서 e.preventDefault() 메소드를 사용하는 이유는?
        + 브라우저에서 양식을 제출할 때는 기본적으로 브라우저의 새로 고침이 발생하는데,React나 SPA(single page application)의 경우 필요 없는 동작임으로 이를 방지하기위해 사용한다.
    + 3.TodoList Component
        + TodoList class를 생성한다.
        + ul 안에 추가된 task를 li로 출력한다.
        + 앞서 저장한 id값은 key props로 사용한다.
        + 마지막으로 ReactDOM으로 렌더링만 하면 끝난다.
    + 4.혹시 Key props의 역할이 기억나지 않는다면?
        + key는 props의 안정적으로 사용할 수 있도록 고유성을 부여하기 위해 필요하다.
        + React가 어떤 props를 변경, 추가 또는 삭제할지 식별하는 것을 도와준다.
        + 반드시 date를 사용하지 않아도된다. 배열의 index값을 사용해도 된다.
        + 유일한 값이라면 그 값이 무엇이든 상관없다.
    + 5.외부 플러그인을 사용하는 컴포넌트
        + 외부컴포넌트를 사용한 markdown 에디터 이다.
        + 현재 1~3의 예제를 CDN방법으로 진행했음으로 동일하게 진행한다.
        + 다만 외부 플러그인은 Remarkable을 사용함으로 CDN으로 링크를 추가한다.
        + remarkable.js로 검색해야 찾을 수 있다.
            ```
            https://github.com/jonschlinkert/remarkable
            ```
        + 사이트에서 제공하는 CDN사이트 2곳 중 한 곳에서 링크를 복사해 추가한다.
        + 공식사이트의 소스코드를 복사해 넣는다.
        + 테스트 한다.
        + 하지만 실행이 되지 않는다.
            + cdn방식으로는 import가 불가능하여 commonjs방식을 이용하여 모듈을 가져와야 하지만 commonjs방식으로는 브라우저에서 모듈을 가져올수 없기 때문에 실행되지 않는다.
    + 6.creat-react-app으로, Remarkable 사용하기
        + creat-react-app으로 markdown-editor 프로젝트를 생성한다.
        + 정상 동작을 확인하다.
        + App.js에 있는 필요없는 코드를 삭제한다.
        + App.js에 문서의 코드를 복사해 넣는다.
        + component의 이름을 App으로 수정한다.
        + rendering은 index.js에 위임한다.
        + Remarkable을 설치한다.
        + React와 Remarkable을 import한다.
        + 동작이 되는지 확인한다.

## [ 11월 10일]
> + 영화 앱 깃허브에 배포하기
> + react 배우기
### 학습내용
1. 영화 앱 깃허브에 배포하기
    + Act.1 package.json 파일을 열어 homepage 키와 키값을 browserslist 키 아래에 추가한다.
         + 깃 허브 계정과 저장소 이름에 주의 [ https://계정.github.io/저장소 이름 ]
    + Act.2 package.json 파일에 scripts 키값으로 명령어를 추가한다.
    + Act.3( git add. / git commit -m "" / git push origin master )의 명령어를 사용하여 깃허브에 업로드
    + Act.4 ( npm install gh-pages )의 명령어를 사용하여 gh-pages를 설치한다.
    + Act.5 ( git remote -v )의 명령어를 입력하여 업로드한 깃허브 저장소의 주소를 확인한다.
    + Act.6 ( npm run deploy )의 명령어를 입력하여 영화 앱을 배포한다.
    + Act.7 URL에 'https://계정.github.io/저장소 이름'을 입력해서 확인한다.
2. react배우기
    + React의 특징
        + 상호작용이 많은 UI개발에 적합하다
        + 컴포넌트 로직은 JavaScript로 작성한다.
        + 캡슐화된 컴포넌트로 개발되어 재사용이 용이하다.
        + DOM과는 별개로 상태를 관리할 수 있다.
        + 기술 스택의 나머지 부분에는 관여하지 않는다.
        + 기존 코드와 별개로 개발이 가능하다.
        + React Native를 이용하면 모바일 앱도 만들 수 있다.
    + CDN: Content Delivery Network 또는 Content Distribution Network
    + CORS: 특정 헤더를 통해서 브라우저에게 원 출처(origin) 에서 실행되고 있는 웹 애플리케이션이  다른 출처(cross-origin)에 원하는 리소스에 접근할 수 있는 권한이 있는지 없는지를 알려주는 메커니즘이다
    + Babel: ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수 있는 이전 버전과  호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스  JavaScript 트랜스 컴파일러이다.
    + React 시작해보기
        + Act.1 index.html 만들기
            + 새로운 디렉토리를 만들어 새로운 html파일을 만들어본다.
        + Act.2 CDN 링크 추가하기
            + index.html의 header부분에 아래 스크립트 코드를 추가하기.
                ```
                    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
                    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
                    <script crossorigin src="..."></script>
                ```
        + Act.3 JSX 링크 추가하기
            + 위 링크만 추가하면 작동이 되지 않기 때문에 JSX 스크립트 코드를 추가해준다.
                ```
                    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
                ```
        + Act.4 간단한 컴포넌트 추가하기
            + React 홈페이지의 Component를 복사하여 헤더에 Script 추가 후  body의 div태그와 id속성을 부여하여 작동해보기
            + 작동이 안되면 Script에 "type=text/babel"을 추가하기
        + Act.5 상태를 가지는 컴포넌트 추가
            + 위와 똑같은 방법으로 Component 복사 후 작동해보기
## [ 11월 03일]
 > + 네비게이션 만들어 보기
 > + 영화 상세 정보 기능 만들어 보기
 > + 리다이렉트 기능 만들어 보기
### 학습내용
1. 네비게이션 만들어 보기
    + Act.1 Navigation 컴포넌트 만들기
        ```
            function Navigation() {
                return(
                    <div>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    </div>
                )
            }

            export default Navigation
        ```
    + Act.2 Navigation 컴포넌트 App 컴포넌트에 포함 시키기
        ```
            import Navigation from "./components/Navigation"
        ```
    + Act.3 Home 링크 눌러 보기
        + home링크를 눌러보면 react가 죽고 새 페이지가 로딩되는 문제 발견
    + Act.4 a 태그 Link 컴포넌트로 바꾸기
        + Link를 react-router-dom으로 import후 a -> Link 로 href -> to 로 수정한다.
    + Act.5 Navigation 컴포넌트 위치 다시 확인하기
        + HashRouter안에 Navigator가 있게 배치해준다.
    + Act.6 Navigation 컴포넌트 스타일링하기
        + Navigation.css를 만든후 Navigation.js에 import 해준다.
2. 영화 상세 정보 기능 만들어 보기
    + Act.1 route props 살펴보기
        + console.log를 이용해 About으로 어떤 props가 전달되는지 확인한다.
    + Act.2 route props에 데이터 담아 보내기
        ```
            {{ pathname: '/about', state: {fromNavigation:true}}}
        ```
    + Act.3 route props 다시 살펴 보기
    + Act.4 Navigation 컴포넌트 정리하기
        + 위에서 수정한 코드를 원래대로 돌려놓자.
    + Act.5 Movie 컴포넌트에 Link 컴포넌트 추가하기
        + Movie.js에 Link 컴포넌트를 추가한 후 to props를 작성한다.
    + Act.6 Detail 컴포넌트 만들기
        + routes 폴더 안에 Detail.js를 만든후 안의 코드를 작성한다.
    + Act.7 Route 컴포넌트 추가하기
        + App.js에 Detail.js를 import하고 Detail을 뿌려주도록 코드를 작성한다.
    + Act.8 영화 카드를 눌러 /movie-detail로 이동한 다음 영화 데이터 확인하기
        + 영화 카드를 누르면 /movie-detail로 이동이 되고 개발자 모드로 들어가 console을 확인하면 받은값이 들어와있다.
    + Act.9 /movie-detail로 바로 이동하기
        + 영화카드가 아닌 주소창으로 들어오면 화면의 hello는 보이나 console값에는 아무것도 나오지 않았다.
        + console값에 movie-detail의 static값은 undefined로 보인다.
3. 리다이렉트 기능 만들어 보기
    + Act.1 History 키 살펴보기
        + 아무 영화를 클릭하여 이동후 console을 통해 history를 확인
        + componentDidMount() 생명주기 함수를 사용해 Detail 컴포넌트가 마운트될 때 push()함수를 실행하도록 한다.
    + Act.2 Detail 컴포넌트 클래스형 컴포넌트로 변경하기
        + Detail 컴포넌트를 함수형에서 클래스형으로 변경한 후 location, history키를 구조 분해 할당한다.
            ```
                class Detail extends React.Component{
                    componentDidMount() {
                        const { location,history } = this.props
                    }
                    render (){
                        return(
                        <span>hello</span>
                        )
                    }
                }
            ```
    + Act.3 push() 함수 사용하기
        + location.state가 undefined인 경우 history.push('/')를 실행하도록 코드를 작성한다.
    + Act.4 리다이렉트 기능 확인해 보기
        + home 화면에서 주소창에 /movie-detail를 입력하여 home화면으로 돌아가는지 확인해본다.
    + Act.5 영화 제목 출력하기
        + span 내부에 "{ location.state.title }"를 입력하여 영화 제목을 출력한다.
    + Act.6 /movie-detail로 바로 이동하기
        + home 화면에서 주소창에 /movie-detail를 입력하면 오류가 발생한다.
        + componentDidMount() 생명주기 함수를 사용하는데 주소를 통해 이동하면 render함수가 작동하질 못하여 redirect가 작동을 안함.
        + 따라서 값이 없으면 null값을 return하게 코드를 수정한다.
    + Act.7 location.state 확인하기
        + 다시 home화면에서 /movie-detail로 이동해 home으로 이동하는지 확인해보기.
## [ 10월 27일]
> + 영화 앱 전체 모습 수정하기(Act.6 부터 시작함)
> + 영화 앱 멋지게 스타일링하기
> + react-router-dom 설치하고 프로젝트 폴더 정리하기
> + 라우터 만들어 보기
### 학습내용
1. 영화 앱 전체 모습 수정하기
    + Act.6 영화 장르 출력하기
        + movie 컴포넌트 내부에 장르가 출력되도록 코드를 수정한다.
            ```
                <ul className="movie-genres">
                {genres.map((genre) => {        <!--장르가 배열이므로 map함수를 이용해 출력-->
                    return <li className="movie-genre">{genre}</li>
                })}
                </ul>
            ```
        + console을 확인하면 Key props가 없다는 내용을 확인.

            ![a](https://user-images.githubusercontent.com/79895970/139568226-54bcc5ea-fab7-4d36-8271-8ad83b6beb1c.png)
    + Act.7 li tag에 key props 추가하기
        + li tag에 index로 key값을 추가한다.
2. 영화 앱 멋지게 스타일링하기
    + Act.1 App.css 수정하기
    + Act.2 Movie.css 수정하기
    + Act.3 시놉시스 180자로 제한하기
        + slice를 이용해 summary부분을 180자로 제한하자
    + Act.4 영화 앱 제목 살펴보기
    + Act.5 영화 앱 제목 바꾸기
        + index.html에 들어가 제목을 Movie App으로 변경하자
3. react-router-dom 설치하고 프로젝트 폴더 정리하기
    + Act.1 react-router-dom 설치하기
        ```
            npm install react-router-dom
        ```
    + Act.2 components 폴더에 Movie 컴포넌트 옮기기
    + Act.3 routes 폴더에 라우터가 보여줄 화면 만들기
    + Act.4 Home.js 수정하기
        + App.js내용을 Home.js로 복사하고 컴포넌트 이름을 Home으로 수정한다.
        + Home.css를 생성하고 Home.js에 import한다.
    + Act.5 Home.css 만들기
        + Home.css는 교재의 내용을 그대로 사용한다.
    + Act.6 App.js 수정하기
4. 라우터 만들어 보기
    + Act.1 HashRouter와 Router컴포넌트
        ```
            import { HashRouter, Route } from 'react-router-dom'
        ```
    + Act.2 Route 컴포넌트에 path, component props 추가하기
        ```
            import About from './routes/About'
        ```
    + Act.3 About.js 수정하기
    + Act.4 라우터 테스트해 보기
    + Act.5 Home 컴포넌트를 위한 Route컴포넌트 추가하기
        ```
            import Home from './routes/Home'
        ```
    + Act.6 라우터 테스트하고 문제 찾아보기
        + 문제점은 Home과 About이 같이 출력함
    + Act.7 라우터 자세히 살펴보기
        + App.js를 수정하고 주소를 바꿔 결과값을 확인해보자
            ```
                <Route path='/home' component={Home}>
                    <h1>Home</h1>
                </Route>
                <Route path='/home/introduction'>
                    <h1>Introduction</h1>
                </Route>                
                <Route path='/about' component={About}>
                    <h1>About</h1>
                </Route>
            ```
        + Introduction을 출력할때 Home도 같이 출력함
        + 순서를 /home/introduction이 아닌 /,/home,/home/introduction 순으로 인식하기 때문
    + Act.8 App 다시 원래대로 돌리기
        + 원래대로 돌려놓고 home에는 exact props를 추가한다
    + Act.9 About.css 작성하기
        + About.css를 작성 후 About.js에 import 하기
            ```
                import './About.css'
            ```

## [ 10월 13일]
 > + 영화 데이터 화면에 그리기(Act.6부터)
 > + Movie 컴포넌트 만들기
 > + 영화 앱 스타일링 하기 - 기초
 > + 영화 앱 전체 모습 수정하기
### 학습내용
1. 영화 데이터 화면에 그리기
    + Act.6 movies state에 영화 데이터 저장하기
        + Act.5에서 console.log부부을 지우고 아래 코드를 입혁해 영화 데이터를 저장한다.
            ```
                this.setState({ movies: movies })
            ```
        + ES6부터 객체의 키와 변수의 이름이 같다면 코드 축약이 가능하다.
        + 따라서 코드를 아래와 같이 수정한다
            ```
                this.setState({movies})
            ```
    + Act.8 isLoading state를 true에서 false로 업데이트하기
        + 영화 데이터를 모두 다운 받았지만 사용자에게 표시가 되지 않는다
        + setState에 코드를 수정해 isLoading을 true에서 false로 바꿔주자
            ```
             this.setState({movies ,isLoading: false});
            ```
2. Movie 컴포넌트 만들기
    + Act.1 Movie 컴포넌트 만들기
        + src 폴더에 Movie.js를 만든후 기본 골격을 만들어준다.
    + Act.2 영화 데이터 다시 살펴보기
        + yts-proxy.now.sh/list_movies.json에 접속하여 필요한 데이터를 골라 영화 앱에 넣는다.
    + Act.3 Movie.propTypes 작성하기
        + PropTypes안에 아래 코드와 같이 작성한다
            ```
                id: PropTypes.number.isRequired,
                year: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                summary: PropTypes.string.isRequired,
                poster: PropTypes.string.isRequired
            ```
    + Act.4 노마드 코더 영화 API 정렬 기능 사용해 보기
        + [yts.lt/api#list_movies]사이트에 들어가서 sort_by 항목의 코드를 확인한다
    + Act.5 axios.get() 수정하기
        + App.js에 axios.get 안에 주소를 [https://yts-proxy.now.sh/list_movies.json?sort_by=rating] 로 수정한다.
    + Act.6 Movie 컴포넌트에서 props를 추가하고 출력해 보기
        + Movie 컴포넌트에서 id, title, year, summary, poster 를 받아 출력할수 있게 수정한다.
            ```
                function Movie({id, title, year,summary,poster})
            ```
    + Act.7 App 컴포넌트에서 Movie컴포넌트 그리기
        + 로딩이 완료되는 자리에 map함수를 사용한다.
    + Act.8 map() 함수에 컴포넌트를 반환하는 함수 전달하기
        + console을 찍는 함수를 먼저 만들어본다.
            ```
                movies.map((movie) => {
                    console.log(movie)
                    return
                })
            ```
    + Act.9 Movie 컴포넌트를 반환하도록 movies.map() 수정하기
        + App.js에 Movie 컴포넌트를 import후 movies.map()에 <Movie />를 반환하도록 한다
    + Act.10 Movie컴포넌트에 props 전달하기
        + map()함수의 return에 아래코드를 적어 props를 전달한다.
            ```
                return (<Movie 
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                />)
            ```
    + Act.11 console탭에서 영화 데이터 확인해 보기
        + 오류는 음식 앱에서 다루었던 내용이다.
    + Act.12 key props 추가하기
        + return 위에 key값을 추가한다.
            ```
                key = {movie.id}
            ```
3. 영화 앱 스타일링 하기 - 기초
    + Act.1 App컴포넌트에 HTML추가하기
        + render안의 return에 HTML을 추가하면 아래와 같은 코드로 수정한다.
            ```
                <section class="container">
                    {isLoading ? (
                        <div class ="loader">
                         <span class="loader-text">'Loading......' </span></div>
                    ) : (
                        <div class="movies">
                        {movies.map((movie) => (
                            <Movie 
                            key = {movie.id}
                            id = {movie.id}
                            year = {movie.year}
                            title = {movie.title}
                            summary = {movie.summary}
                            poster = {movie.medium_cover_image}
                        />
                        ))}
                        </div>
                    )}
                </section>
            ```
    + Act.2 Movie컴포넌트에 HTML추가하기
        + function Movie내부에 HTML을 추가한다.
    + Act.3 영화 포스터 이미지 추가하기
        + Act.2와 같은 방법으로 포스터 이미지를 추가하는 HTML을 작성한다.
    + Act.4 Movie 컴포넌트 정리하기
        + id Props가 필요없으니 지워준다
    + Act.5 style속성으로 title 스타일링하기
        + h3 tag에 스타일속성으로 바탕을 빨간색으로 지정한다.
    + Act.6 CSS파일 생성
        + App.css 와 Movie.css파일을 만든다.
    + Act.7 App, Movie 컴포넌트에 CSS 파일 import하기
        + 각각의 파일에 맞는 css를 import 한다
    + Act.8 App.css파일 작성하기
        + App.css 에서 body를 어두운색으로 바꿔본다.
4. 영화 앱 전체 모습 수정하기
    + Act.1 App.cs 내용 모두 지우기
    + Act.2 Movie 컴포넌트에 genres props 넘겨주기
    + Act.3 Movie 컴포넌트 수정하기
        + Movie 컴포넌트에 genres를 넣는다.
    + Act.4 App 컴포넌트 수정하기
        + App.js에 genres를 Movie컴포넌트에 넘길수 있게 수정한다.
        + 수정후 console을 확인해서 오류가 나오는지 확인해본다.
    + Act.5 class 속성 이름 className으로 바꿔 주기
        + class를 className으로 바꿔준다
        + vscode를 사용하면 ctrl+shift+l 로 전체선택 기능을 이용하면 편하다

## [ 10월 06일]
 > + 영화 앱 만들기 워밍업
 > + 영화 API사용해 보기
 > + 영화 데이터 화면에 그리기
### 학습내용
1. 영화 앱 만들기 워밍업
    + Act.1 App 컴포넌트 비우기
        + 지금까지 사용하던 App.js를 따로 백업해주고 새로운 App.js를 만든다
    + Act.2 영화 데이터 로딩 상태 표시해주기
        + state를 선언하고, isLoading키 생성 후 키값을 true로 설정한다.
            ```
                class App extends React.Component{
                    state = {
                        isLoading: true
                    }
                    render(){
                        const { isLoading } = this.state
                        return(
                            <div>
                                {isLoading ?  'Loading......' : 'We are ready'}
                            </div>
                        )
                    }
                }
            ```
    + Act.3 구조분해할당 + 삼항연산자 = 로딩상태 출력
        + 구조분해할당으로 this.state에 있는 isLoading을 상수로 선언하여, 앞으로 this.state를 쓰지 않아도되게 한다.
        + 삼항연산자를 사용해서 isLoading이 true면 'Loading...'을 출력하고,false면 'We are ready'를 출력하게 된다.
    + Act.4 로딩 현상 구현하기
        + setTimeout()함수의 첫 번째 인자는 실행할 함수이고, 두 번째 인자로 전달한 값은 지연시간이다. 즉 두 번째 인자 시간만큼 지난 후 첫번째 인자의 함수를 실행한다
            ```
                componentDidMount(){
                setTimeout( () => {this.setState({ isLoading : false})} , 6000)
                }
            ```
        + ComponentDidMount를 사용한 이유는 생명 주기 함수에서 render 다음으로 실행되는 함수이기 때문이다.
        + 6초 뒤에 'We are ready'가 출력된다
    + Act.5 영화 데이터를 어디에 저장할까?
        + state내부에 movies라는 배열을 만들어 로딩된 데이터를 저장한다.
        + 배열로만드는 이유는 데이터가 여러가지이기 때문이다.
2. 영화 API 사용해 보기
    + Act.1 axios 설치하기
        ```
            npm install axios
        ```
    + Act.2 YTS영화 데이터 API 살펴보기
        + YTS 사이트에 들어가서 API를 가져오기.
    + Act.3 영화 목록 데이터 확인해 보기
        + 아래 주소를 들어가면 JSON 데이터들이 있는것을 확인할 수 있다.
            ```
                [https://yts.mx/api/v2/list_movies.json]
            ```
    + Act.4 JSON Viewer 확장 도구 설치하기
        + 위 주소로 그냥 들어가면 min스타일로 제공되어 보기 불편하다.
        + 확장프로그램 설치후 확인해보기.
    + Act.5 영화 목록 다시 확인해보기
    + Act.6 영화 API를 사용하자
        + 노마드코더 깃허브에서 제공하는 영화 API를 이용해보자.
    + Act.7 영화 정보 더 자세히 살펴보기
        + 주소창에 아래 링크를 입력한다
            ```
                yts-proxy.now.sh/movie_detail.json
            ```
        + 결과는 아무것도 출력되지 않는다. Why?
            + movie_id라는 조건을 요구하기 때문에
            + 위 주소를 다음과 같이 수정해서 접속해보자
                ```
                    yts-proxy.now.sh/list_movies.json?movie_id=10
                ```
            + id가 10인 영화의 자세한 정보를 볼 수 있다.
    + Act.8 영화 API를 영화 앱에서 호출하기
        + axios를 import하고 두번째 줄의 코드를 componentDidMount()에 넣어준다.
            ```
                import axios from "axios"
                axios.get('https://yts-proxy.now.sh/list_movies.json')
            ```
    + Act.9 axios 동작 확인하기
        + network탭을 열고 새로고침(ctrl+f5)를 해준다
    + Act.10 getMovies()함수 기다린 다음, axios.get() 함수가 반환한 데이터 잡기
    + Act.11 getMovies()에 async 붙이고,axios.get()에 await붙이기
        + 아래 코드와 같이 수정을 해준다.
            ```
                getMovies = () => {
                    const movies = axios.get('https://yts-proxy.now.sh/list_movies.json')
                }
            
                componentDidMount(){
                    this.getMovies()
                }
            ```
3. 영화 데이터 화면에 그리기
    + Act.1 console.log() 함수로 영화 데이터 출력해 보기
        + getMovies함수 내부에 console.log를 통해 출력해보기.
    + Act.2 영화 데이터 자세히 살펴보기
    + Act.3 객체에 있는 movies키에 접근하기
        + 필요한 정보를 뽑기 위해서 root를 지정해주자
            ```
                console.log(movies.data.data.movies)
            ```
        + 위 코드와 같이 찍으면 필요한 데이터만 볼수 있다.
    + Act.4 객체에 있는 movies 키에 조금 더 똑똑하게 접근하기
        + 구조분해할당 방법을 사용해 객체에 접근해보자
            ```
                const {
                    data: {
                        data: {movies}
                    }
                } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
            ```
        + 위 코드와 같이 const를 수정해보고 console.log(movies)를 찍어 결과를 확인해보자.
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