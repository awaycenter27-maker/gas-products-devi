# Devi Gas Products website

A six-page Next.js App Router site for the industrial gases business. The project includes the supplied operational photos and leadership portrait, optimized as WebP.

## Preview on your computer

Install Node.js 22 or newer. From the extracted project directory run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To test the production version run `npm run build` and then `npm start`.

## Upload to GitHub

1. In GitHub, sign in to the account that should own the website and create a private repository named `devi-gas-products`. Leave it empty if using the commands below.
2. Extract the ZIP. The folder containing `package.json` is the repository root. For browser upload, use **Add file → Upload files** or **uploading an existing file** on the empty repository screen. Drag the extracted files and folders in, including `.gitignore` and `.env.example`, and commit to `main`.
3. Alternatively, run the following inside the extracted folder. Replace the remote URL with the exact URL GitHub shows.

```sh
git init -b main
git add .
git commit -m "Add industrial gases website"
git remote add origin https://github.com/YOUR-ACCOUNT/devi-gas-products.git
git push -u origin main
```

[GitHub upload instructions](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

## Deploy on Vercel

1. In Vercel, choose **Add New → Project**, connect GitHub, and import `devi-gas-products`.
2. Select **Next.js** as the framework preset. Keep the default build settings and set the root directory to the directory containing `package.json`.
3. Set the variables below in the project’s environment settings. Scope live credentials to Production. Use separate test settings for previews if you want preview submissions to reach an inbox.
4. Deploy and open the Vercel URL. Confirm every navigation item works. Submit a sample quote and check that it arrives in the sales inbox.
5. After the first deployment, pushes to the production branch trigger fresh production deployments. Changes to environment variables take effect after a new deployment.

[Vercel GitHub integration](https://vercel.com/docs/git/vercel-for-github) · [Environment variables](https://vercel.com/docs/environment-variables)

## Connect a GoDaddy domain

1. In the Vercel project, open **Settings → Domains** and add your root domain and the `www` hostname if you want both.
2. In GoDaddy, open the domain’s DNS settings. Add or update the exact DNS records shown by Vercel for each hostname. Keep mail and unrelated DNS records. If DNS is hosted elsewhere, make the edits with that DNS provider.
3. Wait for Vercel to validate DNS and provision HTTPS. Choose which hostname should be primary and configure the other to redirect to it.
4. Set `SITE_URL` to the primary HTTPS URL and redeploy. Check `/robots.txt`, `/sitemap.xml`, and the final URL on a phone.

[Vercel domain setup](https://vercel.com/docs/domains/working-with-domains/add-a-domain)

## Quotation delivery

1. In Resend, add and verify a sending domain you control. Add the DNS records Resend provides.
2. Create an API key with sending access. Set `RESEND_API_KEY` in Vercel or in your local `.env.local` copied from `.env.example`.
3. Set `QUOTE_FROM_EMAIL` to an address on the verified sending domain and `QUOTE_TO_EMAIL` to the sales inbox. The site uses the visitor’s email as Reply-To when provided.
4. Redeploy after editing the variables. Send a test from each product’s enquiry link and check the inbox. The form confirms submission only when Resend accepts the request. It retains entries after errors so visitors can retry.

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical HTTPS site URL for metadata and sitemap. Vercel’s production hostname is used as a fallback when available. |
| `RESEND_API_KEY` | Server-side Resend sending key |
| `QUOTE_FROM_EMAIL` | Server-side verified sender address |
| `QUOTE_TO_EMAIL` | Server-side sales inbox address |
| `SALES_PHONE` | Optional public phone number |
| `SALES_WHATSAPP` | Optional public WhatsApp number including country code |
| `SALES_EMAIL` | Optional public contact email |
| `OFFICE_ADDRESS` | Optional confirmed public office address |

[Resend domain setup](https://resend.com/docs/dashboard/domains/introduction) · [Resend Send Email API](https://resend.com/docs/api-reference/emails/send-email)

## Private launch checklist

Keep this checklist in the private repository. Business content is in `lib/content.js`.

- Confirm the current addresses, operators, and map links of the three factories. Confirm the location of each photo before attaching it to a specific factory.
- Confirm the Rajasthan company’s registered name and both remaining companies’ CINs and dates. Add those fields to their entries once verified.
- Confirm the sales contact details and office address. Set the public environment variables for the details approved for publication.
- Set the primary domain and complete an inbox delivery test with the live Resend settings.
