# راهنمای استفاده از کارت‌های محصول

## فایل‌های ایجاد شده

1. **`product-card-template.html`** - قالب کارت‌های محصول برای کپی و استفاده
2. **`products.html`** - صفحه محصولات کامل با Grid layout
3. استایل‌های CSS در `styles/Style.css` (قبلاً اضافه شده)

## نحوه استفاده

### روش 1: استفاده از Template

1. فایل `product-card-template.html` را باز کنید
2. کارت مورد نظر را کپی کنید
3. در صفحه خود قرار دهید
4. اطلاعات محصول را تغییر دهید

### روش 2: استفاده مستقیم در HTML

```html
<div class="product-card">
  <div class="product-badge">-20%</div>
  <div class="product-image">
    <img src="pictrue/your-image.jpg" alt="Product Name">
  </div>
  <div class="product-info">
    <h3 class="product-name">Product Name</h3>
    <p class="product-description">Product description</p>
    <div class="product-price">
      <span class="old-price">150,000 T</span>
      <span class="new-price">120,000 T</span>
    </div>
  </div>
</div>
```

## ساختار کارت

### بخش‌های کارت:

1. **product-badge** (اختیاری) - بج تخفیف
   - اگر تخفیف ندارید، این بخش را حذف کنید

2. **product-image** - تصویر محصول
   - مسیر تصویر را در `src` قرار دهید

3. **product-info** - اطلاعات محصول
   - **product-name**: نام محصول
   - **product-description**: توضیحات
   - **product-price**: قیمت‌ها
     - **old-price**: قیمت قدیم (اختیاری)
     - **new-price**: قیمت جدید

## فرمت قیمت

- همیشه از جداکننده هزارگان استفاده کنید: `150,000 T`
- از "T" به جای "تومان" استفاده کنید
- اگر تخفیف ندارید، فقط `new-price` را نگه دارید

## Layout ها

### 1. Grid Layout (برای صفحه محصولات)

```html
<div class="products-grid">
  <!-- کارت‌های محصول اینجا -->
</div>
```

### 2. Slider Layout (برای اسلایدر)

```html
<div class="products-track">
  <!-- کارت‌های محصول اینجا -->
</div>
```

## مثال‌های استفاده

### کارت با تخفیف:

```html
<div class="product-card">
  <div class="product-badge">-25%</div>
  <div class="product-image">
    <img src="pictrue/coffee.jpg" alt="Coffee">
  </div>
  <div class="product-info">
    <h3 class="product-name">Coffee</h3>
    <p class="product-description">Fresh brewed coffee</p>
    <div class="product-price">
      <span class="old-price">100,000 T</span>
      <span class="new-price">75,000 T</span>
    </div>
  </div>
</div>
```

### کارت بدون تخفیف:

```html
<div class="product-card">
  <div class="product-image">
    <img src="pictrue/coffee.jpg" alt="Coffee">
  </div>
  <div class="product-info">
    <h3 class="product-name">Coffee</h3>
    <p class="product-description">Fresh brewed coffee</p>
    <div class="product-price">
      <span class="new-price">100,000 T</span>
    </div>
  </div>
</div>
```

## استایل‌های موجود

تمام استایل‌های لازم در `styles/Style.css` موجود است:

- `.product-card` - استایل اصلی کارت
- `.product-badge` - بج تخفیف
- `.product-image` - تصویر محصول
- `.product-info` - اطلاعات محصول
- `.product-name` - نام محصول
- `.product-description` - توضیحات
- `.product-price` - قیمت‌ها
- `.old-price` - قیمت قدیم
- `.new-price` - قیمت جدید
- `.products-grid` - Grid layout
- `.products-track` - Slider layout

## ریسپانسیو

تمام کارت‌ها به صورت خودکار ریسپانسیو هستند و در همه اندازه‌های صفحه به درستی نمایش داده می‌شوند.

## نکات مهم

1. همیشه از جداکننده هزارگان در قیمت استفاده کنید
2. از "T" به جای "تومان" استفاده کنید
3. اگر تخفیف ندارید، `product-badge` و `old-price` را حذف کنید
4. تصاویر باید در پوشه `pictrue/` قرار گیرند
5. برای Grid layout از `.products-grid` استفاده کنید
6. برای Slider layout از `.products-track` استفاده کنید

## صفحه محصولات

صفحه `products.html` شامل:
- هدر با عنوان و توضیحات
- Grid layout برای نمایش کارت‌ها
- 8 کارت محصول نمونه
- Footer مشابه صفحه اصلی

می‌توانید این صفحه را باز کرده و کارت‌های جدید اضافه کنید.

