# 🔧 Cloudflare Pages Configuration

## Framework Configuration

### **Framework Settings:**
```
Framework preset: Next.js
```

### **Build Configuration:**
```
Build command: npm run build
Build output directory: .next
```

### **Node.js Version:**
```
Node.js version: 18.17.1 (or latest)
```

### **Environment Variables:**
```
NODE_ENV=production
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-5635114711353420
```

---

## Alternative: Static Export Configuration

If you prefer static export (recommended for better caching):

### **Framework Settings:**
```
Framework preset: Next.js (Static HTML Export)
```

### **Build Configuration:**
```
Build command: npm run build && npm run export
Build output directory: out
```

### **Add Export Script:**
Add this script to your `package.json`:
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

---

## 📁 **Current Configuration (Ready to Use)**

Your Next.js app is configured for **standard Next.js deployment** on Cloudflare Pages:

### **Use These Settings:**
- **Framework**: `Next.js`
- **Build Command**: `npm run build`
- **Build Output Directory**: `.next`
- **Node.js Version**: `18.17.1`

### **Environment Variables to Set:**
```
NODE_ENV=production
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-5635114711353420
```

---

## 🚀 **Deployment Steps:**

1. **Connect GitHub Repository**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Connect to GitHub: `shayanmanesh/insurehub`

2. **Configure Build Settings**
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.next`

3. **Set Environment Variables**
   - Add the environment variables listed above

4. **Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete

5. **Custom Domain**
   - Add `insurehub.ai` in Pages > Custom domains
   - Configure DNS to point to Cloudflare

---

## 🔍 **Post-Deployment Verification:**

### **Check these URLs:**
- ✅ `https://insurehub.ai` (homepage)
- ✅ `https://insurehub.ai/health-insurance` (category page)
- ✅ `https://insurehub.ai/ads.txt` (AdSense verification)
- ✅ `https://insurehub.ai/sitemap.xml` (SEO sitemap)
- ✅ `https://insurehub.ai/robots.txt` (search engine instructions)

### **Test AdSense:**
- Verify ads are showing
- Check AdSense dashboard for impressions
- Test on mobile and desktop

### **Performance Check:**
- Run Lighthouse audit
- Check Core Web Vitals
- Monitor page load speed

---

## 🛠️ **Troubleshooting:**

### **If Build Fails:**
1. Check Node.js version is 18.17.1+
2. Verify environment variables are set
3. Check build logs for specific errors

### **If Ads Don't Show:**
1. Verify `ads.txt` is accessible
2. Check AdSense account status
3. Allow time for AdSense approval

### **If Performance Issues:**
1. Enable Cloudflare caching
2. Configure compression
3. Check image optimization

---

## 📊 **Recommended Cloudflare Settings:**

### **Speed Optimization:**
- Auto Minify: HTML, CSS, JS ✅
- Brotli Compression ✅
- Rocket Loader ✅
- Polish (image optimization) ✅

### **Caching:**
- Cache Level: Standard
- Browser Cache TTL: 4 hours
- Edge Cache TTL: 1 week for static assets

### **Security:**
- SSL/TLS: Full (Strict) ✅
- Always Use HTTPS ✅
- Security Level: Medium

---

**✅ Your InsureHub.ai is optimized and ready for Cloudflare Pages deployment!**