# Abdullah Omran — Portfolio 🚀

Portfolio شخصي تفاعلي — Dark luxury theme بالذهبي والكحلي.

## 📁 الملفات

| الملف | وظيفته |
|------|--------|
| `index.html` | الهيكل (مش محتاج تلمسه غالباً) |
| `style.css` | التصميم (مش محتاج تلمسه) |
| `app.js` | المحرك (مش محتاج تلمسه) |
| `config.js` | ⚙️ **كل حاجة بتعدلها هنا** |
| `assets/` | الصور |

## ✏️ إزاي تعدّل أي حاجة

افتح `config.js` بأي محرر نصوص (Notepad / VS Code) وغيّر:

- **اسمك وبياناتك** → قسم `name`, `email`, `phone`, `links`
- **روابط LinkedIn و GitHub** → `links.linkedin` و `links.github`
  (دلوقتي فيها YOUR-LINKEDIN — حط لينك الحقيقي بتاعك)
- **نبذة عنك** → `about.paragraphs`
- **المهارات** → `skills`
- **الخبرات** → `experience`
- **المشاريع** → `projects`

## ➕ إزاي تضيف مشروع جديد

في `config.js`، في قسم `projects`، انسخ بلوك كامل زي ده وعدّل فيه:

```js
{
  emoji: "🚀",
  title: "اسم المشروع",
  category: "نوعه",
  desc: "وصف قصير للمشروع",
  tags: ["Tag1", "Tag2"],
  link: "https://لينك-المشروع-لو-موجود",
},
```

احفظ الملف، افتح `index.html` في المتصفح — المشروع هيظهر فوراً.

## 🌐 النشر على GitHub Pages (مجاني)

1. اعمل حساب على [github.com](https://github.com)
2. اعمل repository جديد باسم `portfolio`
3. ارفع كل الملفات (index.html, style.css, app.js, config.js, مجلد assets)
4. روح Settings → Pages → Source: `main` branch → Save
5. الموقع هيبقى live خلال دقيقة على:
   `https://YOUR-USERNAME.github.io/portfolio`

## 📱 تحديث الصورة الشخصية

استبدل `assets/profile.jpg` و `assets/about.jpg` بصور جديدة بنفس الأسماء.

---
Built with ♥ — 2026
