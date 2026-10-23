# kkaeunhan.github.io

Kaeun Han의 개인 홈페이지입니다. 빌드 과정 없는 정적 사이트라 GitHub Pages에 그대로 올리면 됩니다.

## 폴더 구조

```
kkaeunhan.github.io/
├── index.html            # 페이지 뼈대 (섹션 순서)
├── data/
│   └── content.js        # ★ 모든 내용(소개, 경력, 학력, 수상 등)은 여기서 수정
├── assets/
│   ├── css/style.css     # 디자인 (글꼴, 색, 간격) — 맨 위 :root 에서 한 번에 변경
│   └── js/main.js        # content.js 내용을 페이지에 그려주는 코드
├── images/
│   ├── profile/          # profile.jpg 를 여기에 넣기
│   ├── logos/            # hdksoe.png, eventim.png 를 여기에 넣기
│   ├── icons/            # 이메일/GitHub/LinkedIn/arXiv 등 아이콘 (SVG)
│   └── title_img/        # 논문 대표 이미지 (나중에)
└── .nojekyll             # GitHub Pages가 파일을 그대로 서빙하도록
```

## 배포 방법

1. GitHub에서 **`kkaeunhan.github.io`** 라는 이름으로 새 public 저장소를 만듭니다.
   (저장소 이름이 `아이디.github.io` 여야 `https://kkaeunhan.github.io` 주소가 됩니다.)
2. 이 폴더 안의 파일들을 저장소 루트에 올립니다.
   - 웹에서: 저장소 → **Add file → Upload files** → 폴더 안 내용 전부 드래그
   - 터미널에서:
     ```bash
     git init
     git add .
     git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/kkaeunhan/kkaeunhan.github.io.git
     git push -u origin main
     ```
3. 저장소 **Settings → Pages** 에서 Source를 `Deploy from a branch`, Branch를 `main` / `(root)` 로 설정합니다.
4. 1~2분 뒤 `https://kkaeunhan.github.io` 에서 확인할 수 있어요.

## 자주 하는 수정

- **사진**: `images/profile/profile.jpg` 로 저장 (정사각형 권장)
- **회사 로고**: `images/logos/hdksoe.png`, `images/logos/eventim.png` 로 저장. 없으면 이니셜 배지가 표시됩니다.
- **글꼴 바꾸기**: `index.html` 의 Google Fonts 링크와 `style.css` 의 `--font` 값을 함께 변경
- **논문 추가**: `data/content.js` 의 `publications` 에 주석 처리된 예시를 복사해 채우면 Publications 섹션이 자동으로 나타납니다.
- **로컬 미리보기**: `index.html` 을 브라우저로 바로 열면 됩니다.
