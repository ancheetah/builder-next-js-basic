# Next.js + Builder.io Starter
A starter based of the [Builder.io + Next.js minimal starter](https://github.com/BuilderIO/builder/tree/main/examples/next-js-simple) with some additional features:
- Custom heading component
- Previewing area for symbols

## Instructions
Clone this repo. Replace the public API key with your own in the files: `.env.development` and `.env.production`

### Deployment
1. Sign up for a free account at [Vercel](https://vercel.com/signup)
2. In your Vercel dashboard select **Add New > Project**
3. When prompted to **Import Git Repository** select this one
4. When configuring your project override the install command with `npm install`
5. Click **Deploy**

### Preview URL
Update all the preview URLs in your space to your deployed site (e.g. `https://builder-starter-internal-ancheetah.vercel.app/`)
### Symbols
To set up symbols, create a section model in your Builder space called **Symbol** and change the preview url to `https://builder-starter-internal-ancheetah.vercel.app/symbol-preview`