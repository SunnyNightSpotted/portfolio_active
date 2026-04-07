

## Replace 3 Video Files with Compressed MP4 Versions

### Steps

1. **Copy uploaded files to `public/videos/`**:
   - `IO2_Solution_compressed.mp4` → `public/videos/IO2_Solution.mp4`
   - `CAMON_Solution_compressed.mp4` → `public/videos/CAMON_Solution.mp4`
   - `DM4_Overview_compressed.mp4` → `public/videos/DM4_Overview.mp4`

2. **Delete old `.mov` files**:
   - `public/videos/IO2_Overview.mov`
   - `public/videos/CAMON_Solution.mov`
   - `public/videos/DM4_Overview.mov`

3. **Update `src/data/projects.ts`** — change video paths:
   - IO2 Solution section: `/videos/IO2_Overview.mov` → `/videos/IO2_Solution.mp4`
   - CAMON Solution section: `/videos/CAMON_Solution.mov` → `/videos/CAMON_Solution.mp4`
   - DM4 Overview section: `/videos/DM4_Overview.mov` → `/videos/DM4_Overview.mp4`

