# Omni web

Landing page and driver approval tool for [Omni](https://omnimu.framer.ai).

- `/` landing page
- `/admin/approve` approve a driver by email

## Run

```bash
cp .env.example .env.local   # set DATABASE_URL
npm install
npm run dev                  # http://localhost:3001
```

`DATABASE_URL` is the same Postgres connection string the Ride backend uses. It is only needed for `/admin/approve`.

## License

[MIT](LICENSE)
