# Builder.io + Next.js Starter
A starter based off of the [Builder.io + Next.js minimal starter](https://github.com/BuilderIO/builder/tree/main/examples/next-js-simple) with some additional features:
- Custom heading component
- Previewing area for symbols and a sample section model

## Instructions
Clone or fork this repo. Replace the public API key with your own in the files: `.env.development` and `.env.production`

### Deployment
1. Sign up for a free account at [Vercel](https://vercel.com/signup)
2. In your Vercel dashboard select **Add New > Project**
3. When prompted to **Import Git Repository** select this one
5. Click **Deploy**

### Preview URL
Update all the preview URLs in your space to your deployed site (e.g. `https://builder-starter-internal-ancheetah.vercel.app/`)
#### Symbols
To set up symbols, create a section model in your Builder space named **Symbol** and change the preview url to `https://{YOUR_VERCEL_URL}/symbol-preview`

#### Section Model
Create a new section model in your Builder space named **Section Preview** and change the preview url to `https://{YOUR_VERCEL_URL}/section-preview`