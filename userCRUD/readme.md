# React - Node/Express - MySQL
A simple CRUD made with Reactjs, Nodejs and Mysql

**Proje'nin Amacı?** 

Bu çalışma SQL, MySQL ve CRUD (Create, Read, Update, Delete) işlemlerini öğrenmek için yapılmıştır.

Aynı zamanda frontend tarafında kullanıcıların veritabanı üzerinde değişiklik yapabilmesini sağlamaktır.

Bu projede, kullanıcılar veri tabanı ile etkileşime girebilir, veri ekleyebilir, görüntüleyebilir, güncelleyebilir ve silebilir.

## Önkoşullar
* Node.js (En son LTS sürümü önerilir)
* MySQL (yerel olarak çalıştırmak veya uzak bir veritabanı sunucusu kullanmak)

## Kurulum

1. Repoyu klonla ya da ZIP olarak indir.
```
git clone https://github.com/beyza-durmaz/SQL.git
```

* Komut satırını açın.
* Aşağıdaki komutu kullanarak MySQL kabuğuna giriş yapın ve root kullanıcısının şifresini girin:
```
mysql -u root -p
```
*komutu çalıştırdıktan sonra, size root kullanıcısının şifresini girmeniz gerektiğini belirten bir istem alacaksınız. Root şifrenizi girin ve enter tuşuna basın.(mysql kurulumu yaparken verdiğiniz şifre)*
* Aşağıdaki komutu kullanarak SQL moduna geçin.
```
\sql
```
* Aşağıdaki komutlardan herhangi birini kullanarak yeni kullanıcı şifresini ayarlayın:
```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'mysql123';
---
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql123';
---
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('mysql123');
```
*burada 'mysql123' yerine kendi yeni şifrenizi ya da bağlanmak istediğiniz database in şifresini yazın.(benim database'ime erişmek için backend klörünün içerisinde index.js dosyasında host, user, password ve database bilgilerim bulunmaktadır oradan öğrenebilirsiniz.)*

Sonrasında şifre değişmiş oluyor ve bu yeni şifreyi kullanarak benim database tabloma erişebilirsiniz.


* __MySQL Workbench'ini açın.__
* __SQL Dosyasını Açma:__
Workbench ana ekranında, "File" menüsüne gidin ve "Open SQL Script" seçeneğini seçin. Ardından, proje dizininizdeki userCRUD klasörü altında bulunan users_user_table.sql dosyasını seçin ve açın.
* __SQL Dosyasını Çalıştırma:__
Açılan SQL dosyasında, tabloyu oluşturan SQL komutları bulunur. Bu komutları çalıştırmak için, Workbench ekranının sol üst köşesindeki sarı renkli şimşek simgesine tıklayın veya "Query" menüsünden "Execute (All or Selection)" seçeneğini seçin. Böylece, SQL komutları veritabanında çalıştırılır ve tablo oluşturulur.
* __Tabloyu Görüntüleme:__
Oluşturulan tabloyu görmek için Workbench ekranının sol tarafındaki "Schemas" bölümünü açın ve tablonun bulunduğu veritabanını seçin. Ardından "Tables" altında user_table isimli tabloyu göreceksiniz. Sağ tıklayın ve "Select Rows" seçeneğini seçerek tabloyu görüntüleyebilirsiniz. Tabloda bulunan veriler burada görüntülenecektir.

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

