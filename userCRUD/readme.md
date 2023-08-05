# React - Node/Express - MySQL
Reactjs, Nodejs ve Mysql ile yapılmış basit bir CRUD çalışması

https://github.com/beyza-durmaz/SQL/assets/116080244/e352d2a0-7d54-4275-8314-840bbbde951b

**Proje'nin Amacı?** 

Bu çalışma SQL, MySQL ve CRUD (Create, Read, Update, Delete) işlemlerini öğrenmek için yapılmıştır.

Aynı zamanda frontend tarafında kullanıcıların veritabanı üzerinde değişiklik yapabilmesini sağlamaktır.

Bu projede, kullanıcılar veri tabanı ile etkileşime girebilir, veri ekleyebilir, görüntüleyebilir, güncelleyebilir ve silebilir.

## Önkoşullar
* Node.js (En son LTS sürümü önerilir)
* MySQL (yerel olarak çalıştırmak veya uzak bir veritabanı sunucusu kullanmak)

https://www.youtube.com/watch?v=GwHpIl0vqY4
(bu videoyu izleyerek bilgisayarınıza MySQL kurulumunu yapabilirsiniz)

## Kurulum

Bilgisayarınıza repoyu indirdikten sonra,
backend ve frontend i başlatmadan önce ilk olarak database'e erişmeniz gerekiyor.

---
Bunun için öncelikle bilgisayarınızda __mySQL'in yüklü olması gerekiyor.__ Eğer yüklü değilse yukarıda belirttiğim video'yu izleyerek yükleyebilirsiniz.

---

Eğer bilgisayarınıza __ilk defa yüklüyorsanız__ kurulumu yaparken sizden bir şifre isteyecek orada __"password"__ şifresini verin. 

---

Sonrasında alttaki şifreyi değiştirme işlemlerini yapmadan direk __mySQL workbench'ini açma__ satırına geçebilirsiniz.

---

Eğer önceden __mySQL bilgisayarınıza yüklü ve halihazırda bir şifreniz varsa__ o zaman alttaki talimatları baştan sona uygulayın, __halihazırda olan şifrenizi değiştirmeniz gerekecek.__

---

Bunun için localinizde mySQL workbench'ini ve komut satırını açıp aşağıdaki talimatlara göre ilerleyin.

Sonrasında backend ve frontend çalıştırılacak.

---

1. Repoyu klonla ya da ZIP olarak indirin ve VSCode da açın.
```
git clone https://github.com/beyza-durmaz/SQL.git
```

* Komut satırını açın.
* Aşağıdaki komutu kullanarak MySQL kabuğuna giriş yapın ve root kullanıcısının şifresini girin:
```
mysql -u root -p
```
*komutu çalıştırdıktan sonra, size root kullanıcısının şifresini girmeniz gerektiğini belirten bir istem alacaksınız. Root şifrenizi girin (mysql kurulumu yaparken verdiğiniz şifre) ve enter tuşuna basın.*
* Aşağıdaki komutu kullanarak SQL moduna geçin.
```
\sql
```
* Aşağıdaki komutlardan herhangi birini kullanarak yeni kullanıcı şifresini ayarlayın:
(eğer hata verirse bir kez daha deneyin)

*burada 'mysql123' yerine kendi yeni şifrenizi ya da bağlanmak istediğiniz database in şifresini yazın.(benim database'ime erişmek için backend klörünün içerisinde index.js dosyasında host, user, password ve database bilgilerim bulunmaktadır oradan öğrenebilirsiniz.)*
```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'mysql123';
---
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql123';
---
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('mysql123');
```

Sonrasında şifre değişmiş oluyor ve bu yeni şifreyi kullanarak benim database tabloma erişebilirsiniz.


* __MySQL Workbench'ini açın.__
Yeni şifreyi kullanarak giriş yapın.
* __SQL Dosyasını Açma:__
Workbench ana ekranında, "File" menüsüne gidin ve "Open SQL Script" seçeneğini seçin. Ardından, proje dizininizdeki userCRUD klasörü altında bulunan users_user_table.sql dosyasını seçin ve açın.
* __SQL Dosyasını Çalıştırma:__
Açılan SQL dosyasında, tabloyu oluşturan SQL komutları bulunur. Bu komutları çalıştırmak için, Workbench ekranının sol üst köşesindeki sarı renkli şimşek simgesine tıklayın veya "Query" menüsünden "Execute (All or Selection)" seçeneğini seçin. Böylece, SQL komutları veritabanında çalıştırılır ve tablo oluşturulur.
* __Tabloyu Görüntüleme:__
Oluşturulan tabloyu görmek için Workbench ekranının sol tarafındaki "Schemas" bölümünü açın(eğer tablonuz gözükmüyorsa sayfa yenileme ikonu bulunuyor o bölümde, ona tıklayın gelecektir) ve tablonun bulunduğu veritabanını seçin. Ardından "Tables" altında user_table isimli tabloyu göreceksiniz. Sağ tıklayın ve "Select Rows" seçeneğini seçerek tabloyu görüntüleyebilirsiniz. Tabloda bulunan veriler burada görüntülenecektir.

* Daha sonrasında backend ve frontend klasörlerine gidin ve her birinde terminal açın.
```
cd SQL/userCRUD/backend
---
cd SQL/userCRUD/frontend
```

* Gerekli paketleri yüklemek için;
```
npm install
```
* backend ve frontend i çalıştırmak için;
```
npm start
```

---

## Kullanım

* Tüm kullanıcıları listele.

* Kullanıcıları ekle/sil/güncelle/görüntüle.

