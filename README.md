# TodoList(프론트엔드)
## 개요
React를 이용해 구현한 TodoList 프론트엔드 부분입니다.
> main 브랜치 : 기본 파일
> 
> todo 브랜치 : 클래스형 컴포넌트(미완)
> 
> func 브랜치 : 함수형 컴포넌트(완성)

## 개발기간 및 환경
- 기간 : 2023.09.22 ~ 2023.10-05
- 개발프로그램 : Visual Studio Code
- 메인언어 : JavaScript

## 추가기능 구현사항
1. 주어진 클래스형 컴포넌트 코드들을 함수형 컴포넌트로 변경
2. 체크된 Todo들 일괄 삭제 버튼 추가
3. 페이지네이션 기능
4. 회원정보 수정 기능
5. 체크 시 취소선 기능

## 개발 내용
- ApiService.js : fetch를 통해 서버에 요청
- App.js : 화면출력담당 및 기능을 실행해 서버로 보내질경우 App.js를 거쳐서 감
- AppRouter.js : 라우팅 관련 파일
- AddTodo.js : Todo를 추가하기 위한 파일
- Todo.js : Todo의 컨테이너와 체크박스, 수정, 삭제 기능을 가짐
- Login.js : 로그인 기능
- SignUp.js : 회원가입 기능
- EditUser.js : 회원정보 수정 기능
- app-config.js : 백엔드 호스트 주소가 있음
