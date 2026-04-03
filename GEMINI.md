# GEMINI.md - MyLink 프로젝트 가이드

이 파일은 MyLink 프로젝트의 구조, 기술 스택, 개발 컨벤션 및 주요 워크플로우를 정의합니다. Gemini CLI와 협업할 때 이 지침을 최우선으로 준수하십시오.

## 1. 프로젝트 개요 (Project Overview)
- **프로젝트명:** 마이링크 (MyLink)
- **목적:** 사용자가 자신의 포트폴리오, SNS, 작업물 등의 여러 링크를 하나의 페이지에 모아서 공유할 수 있는 '멀티 링크 프로필' 서비스입니다.
- **핵심 철학:** 인라인 편집(In-line editing) 기반의 끊김 없는(Seamless) 사용자 경험 제공, 화려한 커스텀보다는 모던하고 정제된 단일 디자인 지향.
- **대상 사용자:** 개발자, 크리에이터 등 본인의 다양한 채널을 한곳에 요약하고자 하는 모든 사용자.

## 2. 기술 스택 (Tech Stack)
- **Framework:** Next.js 16.1.7 (App Router, Turbopack)
- **Library:** React 19.2.4
- **Styling:** Tailwind CSS 4.2.1, shadcn/ui, lucide-react (Tabler Icons)
- **Theme:** next-themes (다크/라이트 모드 지원)
- **Backend (Planned):** Firebase (Authentication - Google Social, Firestore)
- **Package Manager:** npm

## 3. 주요 명령어 (Key Commands)
- **개발 서버 실행:** `npm run dev`
- **프로젝트 빌드:** `npm run build`
- **프로덕션 실행:** `npm run start`
- **린트 체크:** `npm run lint`
- **코드 포맷팅:** `npm run format` (Prettier)
- **타입 체크:** `npm run typecheck`

## 4. 개발 컨벤션 (Development Conventions)

### 코드 스타일 및 포맷팅 (`.prettierrc`)
- **세미콜론:** 사용하지 않음 (`semi: false`)
- **따옴표:** 큰따옴표 사용 (`singleQuote: false`)
- **탭 너비:** 2칸 (`tabWidth: 2`)
- **줄 바꿈:** LF (`endOfLine: lf`)
- **Tailwind CSS:** `prettier-plugin-tailwindcss`를 사용하여 클래스 순서 자동 정렬.

### 컴포넌트 및 아키텍처
- **컴포넌트 추가:** `npx shadcn@latest add [component]` 명령어를 사용하여 `components/ui`에 추가합니다.
- **스타일링:** `cn()` 유틸리티 함수와 `class-variance-authority (cva)`를 활용하여 조건부 스타일링을 관리합니다.
- **인라인 편집:** PRD에 따라 별도의 모달 없이 텍스트 영역을 직접 클릭하여 수정하고 `blur` 시점에 데이터를 저장하는 UX를 구현해야 합니다.

### 문서 관리
- `docs/` 디렉토리에 있는 `PRD.md`, `USER_SCENARIO.md`, `WIREFRAME.md`를 참고하여 기능을 구현하십시오. 요구사항 변경 시 해당 문서들도 함께 업데이트해야 합니다.

## 5. 아키텍처 구조 (Directory Structure)
- `app/`: Next.js App Router 기반의 페이지 및 레이아웃.
- `components/`: UI 및 공통 컴포넌트.
  - `ui/`: shadcn/ui 기반 원자적 컴포넌트.
- `lib/`: 유틸리티 함수 (`utils.ts`).
- `docs/`: 프로젝트 요구사항 및 설계 문서.
- `hooks/`: 커스텀 리액트 훅 (필요 시 생성).
- `public/`: 정적 자산.

## 6. 특이 사항
- **파비콘 연동:** 외부 링크 추가 시 `https://s2.googleusercontent.com/s2/favicons?domain=[domain]` API를 사용하여 자동으로 파비콘을 노출합니다.
- **자동 URL 슬러그:** 가입 시 구글 이메일의 로컬 파트를 추출하여 초기 `displayName`으로 자동 설정합니다.
