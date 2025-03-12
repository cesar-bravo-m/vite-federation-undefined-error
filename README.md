Related React PR: https://github.com/facebook/react/pull/32117

Repro steps
==

Terminal 1
```
git clone https://github.com/cesar-bravo-m/vite-federation-undefined-error
cd host
pnpm i
pnpm run dev
```

Terminal 2
```
cd remote
pnpm i
pnpm build
pnpm vite preview
```

Go to http://localhost:5173, open devtools->sources, and check "Pause on uncaught exception"

Result
==
<img width="655" alt="image" src="https://github.com/user-attachments/assets/602f4aa1-7899-4956-9589-335858127d0b" />
