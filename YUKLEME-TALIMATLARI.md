# Siteni GitHub'a Yükleme ve Domain Bağlama

## 1. Dosyaları GitHub'a yükle

1. `[kullaniciadin].github.io` reponu GitHub'da aç.
2. **Add file → Upload files** butonuna tıkla.
3. Bu klasördeki TÜM dosya ve klasörleri (index.html, hakkinda.html, style.css, articles/ klasörü, YUKLEME-TALIMATLARI.md hariç) sürükleyip bırak.
4. Alttaki "Commit changes" kutusuna kısa bir not yaz (örn. "İlk sürüm") ve **Commit changes** butonuna bas.

## 2. GitHub Pages'i aç

1. Reponda **Settings** sekmesine git.
2. Sol menüden **Pages**'e tıkla.
3. "Branch" altında `main` seçili olsun, klasör `/ (root)` kalsın, **Save** de.
4. Birkaç dakika içinde siten `https://[kullaniciadin].github.io` adresinde yayında olacak.

## 3. Squarespace domain'ini bağla

Domain Squarespace'te alındığı için DNS ayarlarını Squarespace domain paneli üzerinden yapacaksın:

1. Squarespace hesabına gir → **Domains** → domain'ini seç → **DNS Settings**.
2. Aşağıdaki 4 **A kaydını** ekle (Host: `@`):
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. Bir de **CNAME kaydı** ekle: Host: `www`, Value: `[kullaniciadin].github.io`
4. GitHub reponda **Settings → Pages → Custom domain** kutusuna kendi domain'ini yaz (örn. `iremyemeniciler.com`) ve kaydet.
5. DNS'in yayılması birkaç saat sürebilir. Ardından "Enforce HTTPS" kutucuğunu işaretleyebilirsin.

## 4. Yeni makale eklemek

1. `articles/koklear-implant-nedir.html` dosyasını GitHub'da aç, sağ üstteki kalem (Edit) ikonuna tıkla.
2. İçeriği kendi metninle değiştir, dosya adını değiştirmeden **"Save a copy"** yerine önce dosyayı kopyala:
   - En kolay yol: GitHub'da `articles` klasörüne gir → **Add file → Create new file** → dosya adını yaz (örn. `articles/isitsel-rehabilitasyon-nedir.html`) → örnek dosyanın içeriğini yapıştırıp kendi yazınla değiştir → Commit.
3. `index.html` dosyasını aç, "Son Yazılar" bölümüne yeni bir satır ekle (mevcut `<a class="article-row">` bloğunu kopyala, linkini ve başlığını güncelle).

Herhangi bir adımda takılırsan bana söyle, birlikte hallederiz.
