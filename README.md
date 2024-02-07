# PUSDATIN API CHALLENGE 

Repository ini menggunakan MVC Pattern, dengan bahasa pemrograman JavaScript dan framework Express.Js

## Installastion

Sebelum menjalankan server pastikan rename file `.env-example` menjadi `.env` dan melakukan konfigurasi sesuai kebutuhan.

Untuk menginstall seluruh dependencies menggunakan command `yarn install`.

Selanjutnya pastikan database dan migrasinya sudah dibuat dengan menjalankan beberapa perintah berikut secara berurutan:

```sh
yarn db:create
yarn db:migrate
yarn db:seed
```

Untuk menjalankan development server, gunakan perintah berikut:

```sh
yarn dev
```

## Database Schema
Di dalam repository ini terdapat 2 tabel, yaitu tabel user serta tabel product. Kedua tabel ini memiliki relasi sebagai berikut, setiap 1 user dapat memiliki banyak produk (one to many). Berikut untuk detail atribut dari setiap tabelnya:

|        |    **user**       |
| :----: | :---------------  |
| **PK** | id:integer        |
|        | FirstName:varchar |
|        | LastName:varchar  |
|        | email:varchar     |
|        | LastName:varchar  |
|        | password:varchar  |
|        | createdAt:date    |
|        | updatedAt:date    |


|        |  **product**        |
| :----: | :-----------------  |
| **PK** | id:integer          |
| **FK** | userId:integer      |
|        | name:varchar        |
|        | description:varchar |
|        | createdAt:date      |
|        | updatedAt:date      |


## Database Management

Di dalam repository ini terdapat beberapa script yang dapat digunakan untuk managment database, yaitu:

-   `yarn db:create` digunakan untuk membuat database
-   `yarn db:drop` digunakan untuk menghapus database
-   `yarn db:migrate` digunakan untuk menjalankan database migration
-   `yarn db:seed` digunakan untuk melakukan seeding
-   `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir


## API Documentation

Berikut untuk URL dokumentasi API menggunakan Swagger-UI

```sh
http://localhost:3000/api-docs
```