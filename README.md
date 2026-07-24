### Hi! There 👋

[신지연](https://jiyeon0320.github.io)의 블로그입니다. **Astro**로 만들고 글은 **Markdown**으로 씁니다.

## 스택

- [Astro](https://astro.build) — 정적 사이트 생성 (SSG)
- Content Collections — `src/content/blog/*.md`
- Shiki — 코드 하이라이팅
- GitHub Pages — GitHub Actions로 자동 배포

## 개발

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ 로 정적 빌드
npm run preview    # 빌드 결과 미리보기
```

## 글쓰기

`src/content/blog/` 에 `.md` 파일을 추가하고 push 하면 자동 배포됩니다.
Obsidian으로 쓰는 방법은 [OBSIDIAN.md](./OBSIDIAN.md) 참고.

## 구조

```
src/
  content/blog/      # 블로그 글 (md)
  content.config.ts  # frontmatter 스키마
  layouts/           # 공통 레이아웃
  components/        # Header, Footer
  pages/             # index(목록), blog/[...slug], about, rss.xml
  styles/global.css
```

## 앞으로 (TODO)

- [ ] 포스트 페이징
- [ ] 해시태그별 필터
- [ ] About(이력) 내용 채우기
- [ ] 댓글 / 좋아요 / 공유
