# injisangjung Project README

`injisangjung`은 고세종의 일상, 글, 개발일지, 프로젝트 포스팅을 관리하고 보여주는 개인 블로그입니다. Next.js App Router 기반으로 홈, 게시글 상세, 관리자 인증, 새 글 작성, 이미지 업로드 기능을 제공합니다.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- MongoDB
- AWS S3
- Zustand
- react-md-editor

## Main Features

- 게시글 목록 및 카테고리 필터링
- 게시글 상세 조회
- 관리자 인증
- 마크다운 에디터 기반 게시글 작성
- 게시글 대표 이미지 및 본문 이미지 업로드
- sitemap, robots metadata 제공
- 웹/모바일 반응형 UI

## Project Structure

```text
src/
  app/                  App Router pages and API routes
  components/           Feature and shared UI components
  constant/             Static values such as category and metadata
  db/                   MongoDB connection
  hooks/                Custom React hooks
  models/               TypeScript model declarations
  store/                Zustand stores
  styles/               Global and CSS module styles
  utils/                Utility functions
```

## API Routes

| Route | Method | Description |
| --- | --- | --- |
| `/api/auth` | `POST` | 관리자 인증 후 access token 발급 |
| `/api/posts` | `GET` | 게시글 preview 목록 조회 |
| `/api/posts/[postId]` | `GET` | 게시글 상세 조회 |
| `/api/posts/pagination` | `GET` | 카테고리/페이지 기반 게시글 목록 조회 |
| `/api/posts/make-post` | `POST` | 인증된 사용자의 새 게시글 생성 |
| `/api/posts/make-post/upload-image` | `POST` | 인증된 사용자의 이미지 S3 업로드 |
