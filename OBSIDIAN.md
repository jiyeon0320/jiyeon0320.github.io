# Obsidian으로 글쓰기

이 블로그의 글은 전부 `src/content/blog/` 폴더 안의 Markdown 파일입니다.
이 폴더를 Obsidian vault로 열면, 옵시디언이 곧 블로그 에디터가 됩니다.

## 1. vault 열기

Obsidian → **Open folder as vault** → 이 저장소의 `src/content/blog` 폴더 선택.

> 사이트 전체를 한 vault로 관리하고 싶으면 저장소 루트를 열어도 됩니다.
> 단, 글이 아닌 파일(코드 등)도 vault에 보이게 됩니다.

## 2. 권장 설정 (Settings → Files and links)

| 설정 | 값 | 이유 |
| --- | --- | --- |
| New link format | **Relative path to file** | 사이트 경로와 어긋나지 않게 |
| Use [[Wikilinks]] | **ON** | 글끼리 `[[파일이름]]`으로 연결 |
| Default location for new attachments | **Same folder as current file** | 이미지가 글 옆에 저장됨 |

## 3. frontmatter (= Obsidian Properties)

모든 글 맨 위에 아래 형식이 필요합니다. 옵시디언에서는 "Properties"로 보입니다.

```yaml
---
title: '글 제목'          # 필수
description: '한 줄 요약'   # 필수
pubDate: 2026-05-27       # 필수 (작성일)
updatedDate: 2026-05-28   # 선택 (수정일)
heroImage: ./cover.jpg    # 선택 (대표 이미지, 글과 같은 폴더)
---
```

## 4. 글끼리 연결 (위키링크)

- `[[hello-bburnjilog]]` → `/blog/hello-bburnjilog/` 로 연결
- `[[hello-bburnjilog|첫 글 보기]]` → 링크 텍스트만 바꾸기
- **규칙:** 파일 이름은 소문자 + 하이픈(kebab-case)으로. 위키링크는 `.md`를 뺀
  파일 이름을 그대로 적어야 주소가 맞습니다. (`내 글.md`처럼 띄어쓰기/대문자가
  들어가면 URL이 지저분해집니다.)

## 5. 이미지

이미지는 글과 같은 폴더에 두고 표준 마크다운 문법으로 넣습니다:

```markdown
![설명 텍스트](./photo.png)
```

> 옵시디언 기본 임베드 `![[photo.png]]`도 동작은 하지만, 호환성을 위해
> 위 표준 문법을 권장합니다.

## 6. 발행

1. 글을 저장하고 `git add` → `git commit` → `git push`
2. 터미널을 열기 싫으면 Obsidian 커뮤니티 플러그인 **"Obsidian Git"** 설치 →
   버튼 한 번으로 commit + push.
3. push하면 연결된 호스팅(Netlify/Vercel/Cloudflare/GitHub Pages)이 자동 배포.

## 로컬에서 미리보기

```bash
npm run dev      # http://localhost:4321 에서 확인
```
