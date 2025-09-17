## mx Expense Tracker 💴

اپلیکیشن تک‌صفحه‌ای برای ثبت و مدیریت تراکنش‌های مالی (درآمد/هزینه) با رابط کاربری فارسی و سبک. این پروژه با React + TypeScript + Vite و Tailwind CSS ساخته شده.

---

![screenshot](src/assets/screenshot.png)

### برای پیش‌نمایش زنده اینجا کلیک کنید 👈 [پیش‌نمایش](https://micodex.github.io/mx-expense-tracker/)

## ✨ امکانات فعلی

- **ثبت تراکنش**: عنوان، مبلغ، نوع (درآمد/هزینه)، دسته‌بندی و تاریخ
- **حذف تراکنش**: با افکت محو شدن نرم (fade-out)
- **جستجو**: فیلتر هم‌زمان بر اساس متن عنوان
- **فیلتر دسته‌بندی**: نمایش همه یا یک دسته مشخص
- **داشبورد جمع‌بندی**: نمایش مجموع درآمد و مجموع هزینه‌ها
- **خلاصه دسته‌بندی**: مجموع مبالغ بر اساس هر دسته
- **رابط فارسی و راست‌به‌چپ**: با فونت فارسی (Vazir)
- **انیمیشن‌ها**: ورود (fade-in) و خروج (fade-out) آیتم‌ها
- **حافظه لوکال**: ذخیره تراکنش ها در حافظه لوکال مرورگر

---

## 🧰 فناوری

- **React 19** + **TypeScript**
- **Vite 7** (ابزار توسعه و ساخت)
- **Tailwind CSS 4** (از طریق `@tailwindcss/vite`)
- **React Icons** برای آیکون‌ها

بدون Router و بدون کتابخانه مدیریت وضعیت خارجی؛ از `useState` در `App` استفاده شده است.

---

## 📦 پیش‌نیازها

- Node.js 18 یا جدیدتر
- NPM (یا PNPM/Yarn)

---

## 🚀 اجرا و توسعه

```bash
# نصب وابستگی‌ها
npm install

# اجرای محیط توسعه (Vite)
npm run dev
# معمولاً روی http://localhost:5173

# ساخت نسخه تولید
npm run build

# پیش‌نمایش نسخه تولید
npm run preview
```

---

## 🔧 اسکریپت‌ها

- `dev`: اجرای Vite در حالت توسعه
- `build`: کامپایل TypeScript و ساخت خروجی تولید با Vite
- `preview`: اجرای پیش‌نمایش خروجی تولید
- `lint`: اجرای ESLint
- `predeploy`: ساخت قبل از دیپلوی
- `deploy`: انتشار `dist` روی GitHub Pages

---

## 🌐 دیپلوی روی GitHub Pages

- آدرس صفحه خانگی در `package.json` تنظیم شده است:
  - `homepage`: `https://micodex.github.io/mx-expense-tracker/`
- پایه مسیر (Base) در `vite.config.ts` مشخص است:
  - `base: "/mx-expense-tracker"`
- انتشار:

```bash
npm run deploy
```

خروجی فولدر `dist` با `gh-pages` روی شاخه `gh-pages` منتشر می‌شود.

> اگر نام مخزن یا مسیر انتشار را تغییر می‌دهید، مقدار `homepage` و `base` را نیز متناسب به‌روزرسانی کنید.

---

## 🗂️ ساختار پروژه

```text
src/
├─ components/
│  ├─ Dashboard.tsx        # کارت‌های مجموع درآمد/هزینه
│  ├─ ExpenseItem.tsx      # آیتم تراکنش با قابلیت حذف
│  ├─ NoExpense.tsx        # پیام خالی بودن لیست
│  └─ CategorySummary.tsx  # جمع مبالغ بر اساس دسته
├─ App.tsx                 # منطق اصلی: فرم، لیست، فیلتر، جستجو
├─ App.css                 # فونت و انیمیشن‌ها (fadeIn/fadeout)
├─ index.css               # استایل‌های سراسری/Tailwind
├─ main.tsx                # ورودی برنامه
└─ assets/                 # منابع
```

---

## 🎨 استایل و فونت

- Tailwind CSS فعال است (پلاگین `@tailwindcss/vite`).
- فونت فارسی در `src/App.css` تنظیم شده است:

```css
body {
  font-family: Vazir FD, sans-serif;
}
```

در صورت نیاز فونت را به صورت صحیح در HTML/CSS اضافه و بارگذاری کنید.

---

## 💡 نحوه استفاده

1. در فرم سمت چپ، اطلاعات هر تراکنش (عنوان، مبلغ، نوع، دسته، تاریخ) را وارد و ثبت کنید.
2. برای جستجو، متن عنوان را در کادر مربوطه بنویسید.
3. برای فیلتر دسته‌بندی، از منوی کشویی استفاده کنید.
4. مجموع درآمد/هزینه و خلاصه دسته‌ها به‌صورت خودکار به‌روزرسانی می‌شود.

---

## 🛠️ سفارشی‌سازی‌های رایج

- **دسته‌بندی‌ها**: آرایه‌های `expenseCategories` و `incomeCategories` در `App.tsx` را ویرایش کنید.
- **پایه مسیر (Base)**: اگر مسیر انتشار متفاوت است، `base` در `vite.config.ts` و `homepage` در `package.json` را هماهنگ کنید.
- **ذخیره‌سازی**: برای ماندگاری داده‌ها می‌توانید LocalStorage/IndexedDB یا یک API اضافه کنید.
- **آیکون‌ها**: با `react-icons` قابل توسعه است.

---

## ❓ رفع اشکال

- اجرا نمی‌شود؟ نسخه Node را بررسی و وابستگی‌ها را مجدد نصب کنید:

```bash
rm -rf node_modules package-lock.json
npm install
```

- مشکل مسیر پس از دیپلوی؟ `base` در `vite.config.ts` و `homepage` را بررسی کنید.
- استایل‌ها اعمال نمی‌شود؟ پیکربندی Tailwind و import فایل‌های CSS را بررسی کنید.

---

## 🤝 مشارکت

1. شاخه بسازید: `git checkout -b feature/your-feature`
2. تغییرات را کامیت کنید: `git commit -m "feat: add ..."`
3. شاخه را پوش کنید: `git push origin feature/your-feature`
4. Pull Request باز کنید.

---

## 📜 مجوز

MIT

---

کدنویسی‌ شده با ☕️ توسط میلاد
